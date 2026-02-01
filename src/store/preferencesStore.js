import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePreferencesStore = create(
  persist(
    (set, get) => ({
      // LIGHT por defecto
      theme: "light",
      language: "en",

      setTheme: (theme) => {
        const next = theme === "dark" ? "dark" : "light";
        set({ theme: next });
      },

      // toggle simple light/dark
      toggleTheme: () => {
        const current = get().theme;
        set({ theme: current === "dark" ? "light" : "dark" });
      },

      setLanguage: (language) => {
        const next = language === "es" ? "es" : "en";
        set({ language: next });
      },
    }),
    {
      name: "bfs-preferences",
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
    }
  )
);