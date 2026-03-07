import { MetaProvider } from "@solidjs/meta";
import type { RouteSectionProps } from "@solidjs/router";
import { Suspense } from "solid-js";
import { Nav } from "./nav";

export function Root(props: RouteSectionProps) {
  return (
    <MetaProvider>
      <Suspense>
        <Nav />
        {props.children}
      </Suspense>
    </MetaProvider>
  );
}
