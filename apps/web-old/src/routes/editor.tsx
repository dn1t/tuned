import { createStore } from "solid-js/store";
import { Nav } from "~/components/editor/nav";
import { Sidebar } from "~/components/editor/sidebar";

function getDate() {
  const now = new Date();
  return `${now.getFullYear().toString().slice(2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
}

export interface CupInfo {
  title: string;
  items: Item[];
}

export interface Item {}

export default function Editor() {
  const [info, setInfo] = createStore<CupInfo>({
    title: `이상형 월드컵 ${getDate()}`,
    items: [],
  });

  return (
    <>
      <Nav info={[info, setInfo]} />
      {info.title}
      <div class="flex">
        <Sidebar info={[info, setInfo]} />
        <main>
          <div>Editor</div>
        </main>
      </div>
    </>
  );
}
