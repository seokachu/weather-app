import { CloudSun, Star } from 'lucide-react';

export const NAV_ITEMS = [
  { label: '날씨', path: '/main', icon: CloudSun },
  { label: '즐겨찾기', path: '/favorite', icon: Star },
] as const;
