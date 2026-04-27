import { Nav } from "../components/editor/nav";
import { Sidebar } from "../components/editor/sidebar";

export default function Editor() {
  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <div className="flex h-full">
        <Sidebar />
        <div />
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
