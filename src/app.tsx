import { MetaProvider, Title as _Title } from '@solidjs/meta';
import { Router, type RouteSectionProps } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense, type JSX } from 'solid-js';

import './global.css';

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
      <Suspense>{props.children}</Suspense>
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
