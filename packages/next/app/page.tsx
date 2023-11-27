// If you do not use force-dynamic, fetch requests will be memoized.
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <RequestAPIComponent />
      <RequestAPIComponent />
      <RequestAPIComponent />
      <RequestAPIComponent />
      <RequestAPIComponent />
      <RequestAPIComponent />
      <RequestAPIComponent />
      <RequestAPIComponent />
    </main>
  );
}

async function RequestAPIComponent() {
  const res = await fetch("http://localhost:8787/");
  const data = await res.json();
  return <div>{data.text}</div>;
}
