'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CITIES, type City, type CityKey } from '@/data/site';

const STORAGE_KEY = 'hoppao.city';
const PROMPT_KEY = 'hoppao.cityPromptSeen';

type Ctx = {
  cityKey: CityKey;
  city: City;
  setCity: (key: CityKey) => void;
  /** true bila pengunjung belum pernah memilih kota */
  showPrompt: boolean;
  dismissPrompt: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
};

const CityContext = createContext<Ctx | null>(null);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [cityKey, setCityKey] = useState<CityKey>('jogja'); // default Jogja
  const [showPrompt, setShowPrompt] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'jogja' || saved === 'surabaya') setCityKey(saved);
      if (!window.localStorage.getItem(PROMPT_KEY)) {
        const t = window.setTimeout(() => setShowPrompt(true), 900);
        return () => window.clearTimeout(t);
      }
    } catch {
      /* localStorage tidak tersedia, tetap pakai default Jogja */
    }
  }, []);

  const setCity = useCallback((key: CityKey) => {
    setCityKey(key);
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {}
  }, []);

  const dismissPrompt = useCallback(() => {
    setShowPrompt(false);
    try {
      window.localStorage.setItem(PROMPT_KEY, '1');
    } catch {}
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      cityKey,
      city: CITIES[cityKey],
      setCity,
      showPrompt,
      dismissPrompt,
      drawerOpen,
      setDrawerOpen,
    }),
    [cityKey, setCity, showPrompt, dismissPrompt, drawerOpen],
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCity() {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error('useCity harus dipakai di dalam CityProvider');
  return ctx;
}
