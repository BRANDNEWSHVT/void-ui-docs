import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { docsRouteTitleMap } from '@/docs/navigation';

const DEFAULT_TITLE = 'Void UI Docs';

const staticRouteTitles: Record<string, string> = {
  '/': 'Void UI – Another React Component Library',
  '/docs': docsRouteTitleMap['/docs'] ?? 'Void UI Docs',
  '/docs/quick-start': docsRouteTitleMap['/docs/quick-start'] ?? DEFAULT_TITLE,
};

const routeTitleMap: Record<string, string> = {
  ...docsRouteTitleMap,
  ...staticRouteTitles,
};

function normalizePath(pathname: string) {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function DocumentTitleManager() {
  const location = useLocation();

  useEffect(() => {
    const normalized = normalizePath(location.pathname);
    const title = routeTitleMap[normalized] ?? DEFAULT_TITLE;
    document.title = title;
  }, [location.pathname]);

  return null;
}
