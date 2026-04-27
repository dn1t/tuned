import { Nav } from "../components/editor/nav";

export default function Editor() {
  return (
    <>
      <Nav />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
