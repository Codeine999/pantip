import { create } from 'zustand'


interface ThemeState {
  theme: 'light' | 'dark'
  toggle: () => void
}


export const themeStore = create<ThemeState>((set, get) => ({
  theme: 'light',
  toggle: () => {
    const current = get().theme
    const next = current === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
    set({ theme: next })
  },
}))