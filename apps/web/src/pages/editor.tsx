export default function Editor() {
  return <div>Editor</div>;
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
