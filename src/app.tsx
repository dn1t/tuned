import { MetaProvider, Title as _Title } from '@solidjs/meta';
import { Router, type RouteSectionProps } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense, type JSX } from 'solid-js';
import { ThemeProvider } from './theme';

import '@radix-ui/colors/gray-dark.css';
import '@radix-ui/colors/gray.css';

import './fonts.css';
import './global.css';
import { Nav } from './components/layout/nav';

export function Title(props: JSX.HTMLAttributes<HTMLTitleElement>) {
  return (
    <_Title {...props}>
      {props.children ? `${props.children} - tuned` : 'tuned'}
    </_Title>
  );
}

function Root(props: RouteSectionProps) {
  return (
    <MetaProvider>
      <Title />
      <ThemeProvider>
        <Nav />
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
