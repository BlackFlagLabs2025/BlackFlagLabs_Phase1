/**
 * usePageTracking Hook
 *
 * Automatically tracks page views on route changes
 * Works with React Router
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics/ga4';
import { trackPageView as trackCustomPageView } from '../utils/analytics/customTracker';

/**
 * Track page views on route changes
 * Call this hook in your main App component
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Get page title
    const pageTitle = document.title;
    const pagePath = location.pathname + location.search;

    // Track in GA4
    trackPageView(pagePath, pageTitle);

    // Track in custom analytics
    trackCustomPageView();

    // Scroll to top on route change (optional UX improvement)
    window.scrollTo(0, 0);
  }, [location]);
};
