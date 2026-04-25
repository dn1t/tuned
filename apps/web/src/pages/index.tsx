export default async function HomePage() {
  return <div className="font-bold text-2xl">Hello, world!</div>;
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
