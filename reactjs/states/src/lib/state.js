import { create } from "zustand";

export const useStore = create((set) => ({
  color: "orange",
  setColor: (color) => set({ color }),
}));
