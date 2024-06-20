import {
  createContext,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  useContext,
  type Accessor,
  type ParentProps,
  type Setter,
} from 'solid-js';

export type ThemeType = 'light' | 'dark';
export type LocalThemeType = ThemeType | 'system';

const ThemeContext =
  createContext<[theme: Accessor<ThemeType>, setTheme: Setter<ThemeType>]>();

function getLocalTheme(): LocalThemeType {
  const t = localStorage.getItem('theme');

  return t === 'light' ? 'light' : t === 'dark' ? 'dark' : 'system';
}

export function ThemeProvider(props: ParentProps) {
  const [theme, setTheme] = createSignal<ThemeType>('light');
  const [mediaQuery, setMediaQuery] = createSignal<MediaQueryList>();

  function setSystemTheme({ matches: m }: { matches: boolean }) {
    if (getLocalTheme() === 'system') setTheme(m ? 'dark' : 'light');
  }

  onMount(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme:dark)');
    mediaQuery.addEventListener('change', setSystemTheme);
    setSystemTheme(mediaQuery);
    setMediaQuery(mediaQuery);
  });

  createEffect(() => {
    const { classList } = document.body;
    const t = theme();

    if (t === 'light' && !classList.contains('light')) {
      if (classList.contains('dark')) classList.remove('dark');
      classList.add('light');
    } else if (t === 'dark' && !classList.contains('dark')) {
      if (classList.contains('light')) classList.remove('light');
      classList.add('dark');
    }
  });

  onCleanup(() => {
    mediaQuery()?.removeEventListener('change', setSystemTheme);
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>{props.children}</main>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext)!;
}
