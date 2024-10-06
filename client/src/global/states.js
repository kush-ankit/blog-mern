import { create } from 'zustand';

export const useAppStateStore = create((set) => ({
  ready: false,
  login: false,
  setReady: (value) => set(() => ({ ready: value })),
  setLogin: (value) => set(() => ({ login: value })),
}));

export const useUserStore = create((set) => ({
  userName: null,
  email: null,
  id: null,
  name: null,
  createdAt: null,
  bio: null,
  isAdmin: false,
  setUser: (userName, email, id, createdAt, bio, name, isAdmin) => set(() => ({ userName, email, id, name, createdAt, bio, isAdmin })),
}));
