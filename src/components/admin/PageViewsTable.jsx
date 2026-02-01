/**
 * Page Views Table Component
 *
 * Displays top pages by visit count
 * Dark cyberpunk theme
 */

import { motion } from 'framer-motion';

export default function PageViewsTable({ pages }) {
  if (!pages || pages.length === 0) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-200 mb-4">Top Pages</h3>
        <p className="text-slate-500 text-sm">No data available</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
    >
      {/* Header */}
      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400 mb-6">
        Top Pages
      </h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider pb-3">
                Page
              </th>
              <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider pb-3">
                Views
              </th>
              <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider pb-3">
                Unique
              </th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, idx) => (
              <motion.tr
                key={page.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
              >
                <td className="py-3 text-sm text-slate-300">
                  <span className="font-mono">{page.path || '/'}</span>
                </td>
                <td className="py-3 text-right text-sm font-semibold text-cyan-400">
                  {page.views?.toLocaleString() || 0}
                </td>
                <td className="py-3 text-right text-sm text-slate-400">
                  {page.uniqueVisitors?.toLocaleString() || 0}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
