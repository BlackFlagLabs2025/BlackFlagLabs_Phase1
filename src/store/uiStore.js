// src/store/uiStore.js
import { create } from "zustand";

export const useUIStore = create((set) => ({
  loading: true,
  showContactForm: false,
  formSubmitting: false,
  scrollY: 0,

  setLoading: (value) => set({ loading: value }),
  setShowContactForm: (value) => set({ showContactForm: value }),
  openContactForm: () => set({ showContactForm: true }),
  closeContactForm: () => set({ showContactForm: false }),
  setFormSubmitting: (value) => set({ formSubmitting: value }),
  setScrollY: (y) => set({ scrollY: y }),
}));