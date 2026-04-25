import type { ReactNode } from "react";
import "../styles.css";
import { Nav } from "../components/layout/nav";

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      <link rel="preload" href="/fonts.css" as="style" />
      <link rel="stylesheet" href="/fonts.css" />
      <Nav />
      {children}
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
