/**
 * Timeline Chart Component
 *
 * Line chart showing traffic over time (last 7/30/90 days)
 * Simple SVG-based chart with gradient fill
 */

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function TimelineChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-200 mb-4">Traffic Timeline</h3>
        <p className="text-slate-500 text-sm">No data available</p>
      </div>
    );
  }

  // Chart dimensions
  const width = 1000;
  const height = 300;
  const padding = 40;

  // Generate SVG path from data
  const { path, maxValue, points } = useMemo(() => {
    const values = data.map(d => d.pageviews || 0);
    const maxVal = Math.max(...values, 1);

    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const pts = data.map((d, i) => {
      const x = padding + (i / (data.length - 1)) * chartWidth;
      const y = padding + chartHeight - (d.pageviews / maxVal) * chartHeight;
      return { x, y, value: d.pageviews, date: d.date };
    });

    const pathString = pts
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
      .join(' ');

    return { path: pathString, maxValue: maxVal, points: pts };
  }, [data]);

  // Area fill path (same as line but with bottom corners)
  const areaPath = useMemo(() => {
    if (points.length === 0) return '';

    const lastPoint = points[points.length - 1];
    const firstPoint = points[0];

    return `${path} L ${lastPoint.x} ${height - padding} L ${firstPoint.x} ${height - padding} Z`;
  }, [path, points, height, padding]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400">
          Traffic Timeline
        </h3>
        <div className="text-sm text-slate-400">
          Peak: <span className="text-cyan-400 font-semibold">{maxValue.toLocaleString()}</span> views
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          style={{ minHeight: '200px' }}
        >
          {/* Grid lines */}
          <g opacity="0.1">
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
              const y = padding + (height - padding * 2) * (1 - ratio);
              return (
                <line
                  key={i}
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-slate-600"
                />
              );
            })}
          </g>

          {/* Gradient definition */}
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            d={areaPath}
            fill="url(#chartGradient)"
          />

          {/* Line path */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
            d={path}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Line gradient */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>

          {/* Data points */}
          {points.map((point, i) => (
            <g key={i}>
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.02, duration: 0.4 }}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#0f172a"
                stroke="#06b6d4"
                strokeWidth="2"
                className="hover:r-6 transition-all cursor-pointer"
              >
                <title>{`${point.date}: ${point.value} views`}</title>
              </motion.circle>
            </g>
          ))}

          {/* Y-axis labels */}
          <g className="text-slate-500 text-xs">
            {[0, 0.5, 1].map((ratio, i) => {
              const y = padding + (height - padding * 2) * (1 - ratio);
              const value = Math.round(maxValue * ratio);
              return (
                <text
                  key={i}
                  x={padding - 10}
                  y={y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize="12"
                  fill="currentColor"
                >
                  {value}
                </text>
              );
            })}
          </g>

          {/* X-axis labels (first, middle, last date) */}
          <g className="text-slate-500 text-xs">
            {[0, Math.floor(points.length / 2), points.length - 1].map((idx) => {
              const point = points[idx];
              if (!point) return null;

              return (
                <text
                  key={idx}
                  x={point.x}
                  y={height - padding + 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill="currentColor"
                >
                  {new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </text>
              );
            })}
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
