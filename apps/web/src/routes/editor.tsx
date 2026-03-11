import { createSignal } from "solid-js";
import { Nav } from "~/components/editor/nav";

function getDate() {
  const now = new Date();
  return `${now.getFullYear().toString().slice(2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
}

export default function Editor() {
  const [title, setTitle] = createSignal(`이상형 월드컵 ${getDate()}`);

  return (
    <>
      <Nav titleSignal={[title, setTitle]} />
      <div>Editor</div>
    </>
  );
}
