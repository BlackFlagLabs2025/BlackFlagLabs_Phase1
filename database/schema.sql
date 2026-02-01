/**
 * Black Flag Labs Analytics Database Schema
 *
 * For Supabase/Postgres
 * Run this SQL in your Supabase SQL editor
 *
 * Tables:
 * - analytics_pageviews: Page view tracking
 * - analytics_events: Custom event tracking
 * - analytics_summary: Aggregated stats (optional, for performance)
 */

-- ============================================
-- TABLE: analytics_pageviews
-- ============================================

CREATE TABLE IF NOT EXISTS analytics_pageviews (
  id BIGSERIAL PRIMARY KEY,

  -- Page info
  path VARCHAR(500) NOT NULL,
  referrer VARCHAR(500) DEFAULT 'direct',

  -- Device info
  device VARCHAR(20) NOT NULL, -- 'mobile', 'tablet', 'desktop'
  viewport_width INTEGER,
  viewport_height INTEGER,
  screen_width INTEGER,
  screen_height INTEGER,

  -- Location
  language VARCHAR(10),
  country VARCHAR(2), -- ISO country code
  city VARCHAR(100),

  -- Browser/OS
  browser VARCHAR(50),
  os VARCHAR(50),
  user_agent VARCHAR(255),

  -- Session tracking (for unique visitors)
  session_id VARCHAR(100),

  -- Timestamp
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Indexes for common queries
  INDEX idx_path (path),
  INDEX idx_created_at (created_at),
  INDEX idx_session_id (session_id),
  INDEX idx_country (country),
  INDEX idx_device (device)
);

-- Add comment
COMMENT ON TABLE analytics_pageviews IS 'Stores page view analytics data';

-- ============================================
-- TABLE: analytics_events
-- ============================================

CREATE TABLE IF NOT EXISTS analytics_events (
  id BIGSERIAL PRIMARY KEY,

  -- Event info
  event_type VARCHAR(100) NOT NULL, -- 'cta_click', 'form_submit', etc.
  event_data JSONB, -- Flexible event properties

  -- Context
  path VARCHAR(500),
  session_id VARCHAR(100),

  -- Timestamp
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Indexes
  INDEX idx_event_type (event_type),
  INDEX idx_created_at_events (created_at),
  INDEX idx_session_id_events (session_id)
);

COMMENT ON TABLE analytics_events IS 'Stores custom event analytics';

-- ============================================
-- TABLE: analytics_summary (Optional)
-- ============================================
-- Pre-aggregated stats for faster dashboard queries

CREATE TABLE IF NOT EXISTS analytics_summary (
  id BIGSERIAL PRIMARY KEY,

  -- Date (daily aggregation)
  date DATE NOT NULL UNIQUE,

  -- Metrics
  total_pageviews INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0, -- Approximate based on sessions

  -- Top pages (JSONB array)
  top_pages JSONB,

  -- Top countries (JSONB array)
  top_countries JSONB,

  -- Device breakdown
  mobile_count INTEGER DEFAULT 0,
  desktop_count INTEGER DEFAULT 0,
  tablet_count INTEGER DEFAULT 0,

  -- Updated timestamp
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  INDEX idx_date (date)
);

COMMENT ON TABLE analytics_summary IS 'Daily aggregated analytics for dashboard performance';

-- ============================================
-- FUNCTION: Aggregate daily stats (optional)
-- ============================================

CREATE OR REPLACE FUNCTION aggregate_daily_stats(target_date DATE)
RETURNS VOID AS $$
BEGIN
  INSERT INTO analytics_summary (
    date,
    total_pageviews,
    unique_visitors,
    mobile_count,
    desktop_count,
    tablet_count,
    top_pages,
    top_countries
  )
  SELECT
    target_date,
    COUNT(*) as total_pageviews,
    COUNT(DISTINCT session_id) as unique_visitors,
    COUNT(*) FILTER (WHERE device = 'mobile') as mobile_count,
    COUNT(*) FILTER (WHERE device = 'desktop') as desktop_count,
    COUNT(*) FILTER (WHERE device = 'tablet') as tablet_count,
    (
      SELECT JSON_AGG(top_pages_data)
      FROM (
        SELECT path, COUNT(*) as views
        FROM analytics_pageviews
        WHERE DATE(created_at) = target_date
        GROUP BY path
        ORDER BY views DESC
        LIMIT 10
      ) as top_pages_data
    ) as top_pages,
    (
      SELECT JSON_AGG(top_countries_data)
      FROM (
        SELECT country, COUNT(*) as views
        FROM analytics_pageviews
        WHERE DATE(created_at) = target_date
        GROUP BY country
        ORDER BY views DESC
        LIMIT 10
      ) as top_countries_data
    ) as top_countries
  FROM analytics_pageviews
  WHERE DATE(created_at) = target_date
  ON CONFLICT (date) DO UPDATE SET
    total_pageviews = EXCLUDED.total_pageviews,
    unique_visitors = EXCLUDED.unique_visitors,
    mobile_count = EXCLUDED.mobile_count,
    desktop_count = EXCLUDED.desktop_count,
    tablet_count = EXCLUDED.tablet_count,
    top_pages = EXCLUDED.top_pages,
    top_countries = EXCLUDED.top_countries,
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- VIEWS: Useful dashboard queries
-- ============================================

-- Recent pageviews (last 7 days)
CREATE OR REPLACE VIEW recent_pageviews AS
SELECT
  path,
  COUNT(*) as views,
  COUNT(DISTINCT session_id) as unique_visitors
FROM analytics_pageviews
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY path
ORDER BY views DESC;

-- Traffic by country (last 30 days)
CREATE OR REPLACE VIEW traffic_by_country AS
SELECT
  country,
  COUNT(*) as views,
  COUNT(DISTINCT session_id) as unique_visitors
FROM analytics_pageviews
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY country
ORDER BY views DESC;

-- Daily traffic trend (last 30 days)
CREATE OR REPLACE VIEW daily_traffic_trend AS
SELECT
  DATE(created_at) as date,
  COUNT(*) as pageviews,
  COUNT(DISTINCT session_id) as unique_visitors
FROM analytics_pageviews
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- ============================================
-- ROW LEVEL SECURITY (Optional)
-- ============================================
-- Enable RLS for security

ALTER TABLE analytics_pageviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to do everything
CREATE POLICY "Service role can do everything"
  ON analytics_pageviews
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Service role can do everything on events"
  ON analytics_events
  FOR ALL
  TO service_role
  USING (true);

-- Policy: Admins can read all data
-- (Create a custom role for your admin dashboard)
CREATE POLICY "Admins can read analytics"
  ON analytics_pageviews
  FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'role' = 'admin'
  );

CREATE POLICY "Admins can read events"
  ON analytics_events
  FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'role' = 'admin'
  );
