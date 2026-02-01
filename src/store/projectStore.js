// src/store/projectStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProjectStore = create(
  persist(
    (set, get) => ({
  // ================================
  // SELECTED ITEMS
  // ================================
  selectedBundles: [],
  selectedServices: [],

  // ================================
  // CATEGORY STATE
  // ================================
  activeCategory: "all",
  setActiveCategory: (cat) => set({ activeCategory: cat }),

  // ================================
  // INTERNAL TOGGLE HELPERS
  // ================================
  _toggleItem: (listKey, item) => {
    const current = get()[listKey] ?? [];
    const exists = current.some((el) => el.id === item.id);

    set({
      [listKey]: exists
        ? current.filter((el) => el.id !== item.id)
        : [...current, item],
    });
  },

  toggleBundle: (bundle) => get()._toggleItem("selectedBundles", bundle),
  toggleService: (service) => get()._toggleItem("selectedServices", service),

  clearSelection: () =>
    set({
      selectedBundles: [],
      selectedServices: [],
    }),

  // ================================
  // SERVICES DATA FROM /data/services.js
  // ================================
  servicesData: {},

  setServicesData: (servicesObj) => set({ servicesData: servicesObj }),

  getFilteredServices: () => {
    const services = get().servicesData || {};
    const active = get().activeCategory;

    if (active === "all") {
      return Object.values(services).flat();
    }

    return services[active] || [];
  },

  // ================================
  // LAUNCH DISCOUNT
  // ================================
  launchDiscount: null, // { id, label, value }

  setLaunchDiscount: (discount) => set({ launchDiscount: discount }),

  clearLaunchDiscount: () => set({ launchDiscount: null }),

  // ================================
  // TOTAL PRICE (with discount support)
  // ================================
  getTotal: () => {
    const selectedBundles = get().selectedBundles ?? [];
    const selectedServices = get().selectedServices ?? [];
    const discount = get().launchDiscount;

    // Calculate discount multiplier (e.g., 20% = 0.8)
    const discountMultiplier = discount ? 1 - (discount.value / 100) : 1;

    // Apply discount to ALL services
    const servicesTotal = selectedServices.reduce(
      (sum, s) => sum + (s.priceStart || 0),
      0
    ) * discountMultiplier;

    // Apply discount to ONLY the most expensive bundle
    let bundlesTotal = 0;
    if (selectedBundles.length > 0) {
      const mostExpensiveBundle = selectedBundles.reduce((max, bundle) =>
        bundle.priceStart > max.priceStart ? bundle : max
      );

      bundlesTotal = selectedBundles.reduce((sum, bundle) => {
        const isMostExpensive = bundle.id === mostExpensiveBundle.id;
        const price = isMostExpensive
          ? bundle.priceStart * discountMultiplier
          : bundle.priceStart;
        return sum + price;
      }, 0);
    }

    return Math.round(bundlesTotal + servicesTotal);
  },

  // Get original total without discount
  getOriginalTotal: () => {
    const selectedBundles = get().selectedBundles ?? [];
    const selectedServices = get().selectedServices ?? [];

    const bundlesTotal = selectedBundles.reduce(
      (sum, b) => sum + (b.priceStart || 0),
      0
    );

    const servicesTotal = selectedServices.reduce(
      (sum, s) => sum + (s.priceStart || 0),
      0
    );

    return bundlesTotal + servicesTotal;
  },
    }),
    {
      name: "bfl-cart-storage", // localStorage key
      partialPersist: true,
      // Only persist cart-related data
      partialize: (state) => ({
        selectedBundles: state.selectedBundles,
        selectedServices: state.selectedServices,
        launchDiscount: state.launchDiscount,
      }),
    }
  )
);