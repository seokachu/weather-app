import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import { TOAST_MESSAGES } from '@/shared/constants/toastmessages';
import type { FavoriteLocation } from '@/entities/favorite/types';

const STORAGE_KEY = 'weather-favorites';

const getInitialFavorites = (): FavoriteLocation[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const initialData = saved ? JSON.parse(saved) : [];
  return initialData;
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteLocation[]>(getInitialFavorites);

  const isFavorite = useCallback(
    (fullAddress: string) => favorites.some((favorite) => favorite.fullAddress === fullAddress),
    [favorites]
  );

  const saveToStorage = useCallback((newList: FavoriteLocation[]) => {
    setFavorites(newList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  }, []);

  const addFavorite = useCallback(
    (location: Omit<FavoriteLocation, 'name'>) => {
      if (isFavorite(location.fullAddress)) return;

      if (favorites.length >= 6) {
        toast.error(TOAST_MESSAGES.FAVORITE.LIMIT);
        return;
      }

      const shortName = location.fullAddress.split(' ').slice(-1)[0];
      const newFavorite: FavoriteLocation = {
        ...location,
        name: shortName,
      };

      const newList = [...favorites, newFavorite];
      saveToStorage(newList);
    },
    [favorites, isFavorite, saveToStorage]
  );

  const removeFavorite = useCallback(
    (id: string) => {
      const newList = favorites.filter((favorite) => favorite.id !== id);
      saveToStorage(newList);
    },
    [favorites, saveToStorage]
  );

  const updateNickname = useCallback(
    (id: string, newName: string) => {
      const newList = favorites.map((favorite) => (favorite.id === id ? { ...favorite, name: newName } : favorite));
      saveToStorage(newList);
    },
    [favorites, saveToStorage]
  );

  return {
    favorites,
    addFavorite,
    removeFavorite,
    updateNickname,
    isFavorite,
  };
};
