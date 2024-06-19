import { MetaProvider, Title as _Title } from '@solidjs/meta';
import { Router, type RouteSectionProps } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import {
  Suspense,
  createContext,
  createSignal,
  onMount,
  type JSX,
  type ParentProps,
} from 'solid-js';

import './global.css';

export function Title(props: JSX.HTMLAttributes<HTMLTitleElement>) {
  return (
    <_Title {...props}>
      {props.children ? `${props.children} - tuned` : 'tuned'}
    </_Title>
  );
}

export type ThemeType = 'system' | 'light' | 'dark';

const ThemeContext = createContext<ThemeType>('system');

function ThemeProvider(props: ParentProps) {
  const [theme, setTheme] = createSignal<ThemeType>('system');

  onMount(() => {
    const t = localStorage.getItem('theme');
    window
      .matchMedia('(prefers-color-scheme:dark)')
      .addEventListener('change', (m) => {
        if (t !== 'light' && t !== 'dark') setTheme(m ? 'dark' : 'light');
      });
  });

  return (
    <ThemeContext.Provider value={theme()}>
      <main>{props.children}</main>
    </ThemeContext.Provider>
  );
}

function Root(props: RouteSectionProps) {
  return (
    <MetaProvider>
      <Title />
      <ThemeProvider>
        <Suspense>{props.children}</Suspense>
      </ThemeProvider>
    </MetaProvider>
  );
}

export default function App() {
  return (
    <Router root={Root}>
      <FileRoutes />
    </Router>
  );
}
