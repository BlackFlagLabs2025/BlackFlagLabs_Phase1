/**
 * Country Distribution Chart Component
 *
 * Displays geographic traffic distribution
 * Simple bar chart with country codes and view counts
 */

import { motion } from 'framer-motion';

// Country code to flag emoji mapping
const countryFlags = {
  US: '🇺🇸',
  GB: '🇬🇧',
  CA: '🇨🇦',
  AU: '🇦🇺',
  DE: '🇩🇪',
  FR: '🇫🇷',
  NL: '🇳🇱',
  SE: '🇸🇪',
  JP: '🇯🇵',
  CN: '🇨🇳',
  IN: '🇮🇳',
  BR: '🇧🇷',
  MX: '🇲🇽',
  ES: '🇪🇸',
  IT: '🇮🇹',
};

export default function CountryChart({ countries }) {
  if (!countries || countries.length === 0) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-200 mb-4">Traffic by Country</h3>
        <p className="text-slate-500 text-sm">No data available</p>
      </div>
    );
  }

  // Find max views for scaling bars
  const maxViews = Math.max(...countries.map(c => c.views || 0));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-rose-500/30 transition-all duration-300"
    >
      {/* Header */}
      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-cyan-400 mb-6">
        Traffic by Country
      </h3>

      {/* Chart */}
      <div className="space-y-4">
        {countries.map((country, idx) => {
          const percentage = maxViews > 0 ? (country.views / maxViews) * 100 : 0;
          const flag = countryFlags[country.country] || '🌍';

          return (
            <motion.div
              key={country.country}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {/* Country label */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{flag}</span>
                  <span className="text-sm font-medium text-slate-300">
                    {country.country || 'Unknown'}
                  </span>
                </div>
                <span className="text-sm font-semibold text-cyan-400">
                  {country.views?.toLocaleString() || 0}
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: idx * 0.05 + 0.2, duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 to-cyan-500 rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
