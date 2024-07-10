"use client";

import Search from "./components/Search";
import usePersons from "./hooks/usePersons";

export default function Home() {
  const [data, loading, error] = usePersons();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search
        options={data ?? []}
        content={{
          noDataAvailable: loading
            ? "Loading..."
            : error
            ? error
            : "No persons available",

          placeholder: "Type to search person",
        }}
        className="w-52"
      />
    </main>
  );
}
