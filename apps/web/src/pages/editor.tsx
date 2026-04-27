import { Editor as EditorInner } from "../components/editor/editor";

export default function Editor() {
  return <EditorInner />;
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
