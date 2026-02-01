/**
 * Analytics Stat Card Component
 *
 * Displays a single metric with value, change percentage, and icon
 * Dark cyberpunk theme matching Black Flag Labs aesthetic
 */

import { motion } from 'framer-motion';

export default function AnalyticsCard({ title, value, change, icon, inverse = false }) {
  // Determine if change is positive/negative
  const isPositive = inverse ? change < 0 : change > 0;
  const changeColor = isPositive ? 'text-emerald-400' : 'text-rose-400';
  const changeIcon = isPositive ? '↑' : '↓';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      {/* Glow border */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-rose-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card content */}
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
            {title}
          </h3>
          <span className="text-2xl">{icon}</span>
        </div>

        {/* Value */}
        <div className="mb-2">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400">
            {value}
          </span>
        </div>

        {/* Change indicator */}
        {change !== undefined && change !== 0 && (
          <div className={`flex items-center gap-1 text-sm font-medium ${changeColor}`}>
            <span>{changeIcon}</span>
            <span>{Math.abs(change)}%</span>
            <span className="text-slate-500 text-xs ml-1">vs last period</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
