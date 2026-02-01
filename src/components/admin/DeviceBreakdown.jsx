/**
 * Device Breakdown Component
 *
 * Displays device type distribution (mobile, desktop, tablet)
 * Donut chart style with percentages
 */

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function DeviceBreakdown({ devices }) {
  const { total, deviceData } = useMemo(() => {
    const mobile = devices?.mobile || 0;
    const desktop = devices?.desktop || 0;
    const tablet = devices?.tablet || 0;
    const totalCount = mobile + desktop + tablet;

    if (totalCount === 0) {
      return { total: 0, deviceData: [] };
    }

    return {
      total: totalCount,
      deviceData: [
        {
          name: 'Desktop',
          count: desktop,
          percentage: ((desktop / totalCount) * 100).toFixed(1),
          color: 'from-cyan-500 to-blue-500',
          icon: '🖥️',
        },
        {
          name: 'Mobile',
          count: mobile,
          percentage: ((mobile / totalCount) * 100).toFixed(1),
          color: 'from-rose-500 to-pink-500',
          icon: '📱',
        },
        {
          name: 'Tablet',
          count: tablet,
          percentage: ((tablet / totalCount) * 100).toFixed(1),
          color: 'from-purple-500 to-indigo-500',
          icon: '📲',
        },
      ].sort((a, b) => b.count - a.count),
    };
  }, [devices]);

  if (total === 0) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-200 mb-4">Device Breakdown</h3>
        <p className="text-slate-500 text-sm">No data available</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-rose-500/30 transition-all duration-300"
    >
      {/* Header */}
      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400 mb-6">
        Device Breakdown
      </h3>

      {/* Device stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deviceData.map((device, idx) => (
          <motion.div
            key={device.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Card */}
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-opacity-50 transition-all">
              {/* Icon */}
              <div className="text-3xl mb-2">{device.icon}</div>

              {/* Device name */}
              <div className="text-sm font-medium text-slate-400 mb-1">
                {device.name}
              </div>

              {/* Percentage */}
              <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${device.color} mb-2`}>
                {device.percentage}%
              </div>

              {/* Count */}
              <div className="text-xs text-slate-500">
                {device.count.toLocaleString()} visits
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${device.percentage}%` }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${device.color} rounded-full`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 pt-6 border-t border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Total Visits</span>
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400">
            {total.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
