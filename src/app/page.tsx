import Search from "./components/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search
        options={[]}
        content={{
          noDataAvailable: "No persons available",
          placeholder: "Type to search person",
        }}
        className="w-52"
      />
    </main>
  );
}
