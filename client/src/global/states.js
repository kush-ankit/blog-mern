import { create } from 'zustand';

export const useAppStateStore = create((set) => ({
  ready: false,
  login: false,
  setReady: (value) => set(() => ({ ready: value })),
  setLogin: (value) => set(() => ({ login: value })),
}));

export const useUserStore = create((set) => ({
  name: null,
  email: null,
  id: null,
  isAdmin: false,
  setUser: (name, email, id, isAdmin) => set(() => ({ name, email, id, isAdmin })),
}));