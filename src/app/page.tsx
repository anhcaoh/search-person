"use client";

import { useMemo, useState } from "react";
import Search from "./components/Search";
import usePerson from "./hooks/usePerson";
import toListOptions from "./utils/list.options";

export default function Home() {
  const { people, loading, error } = usePerson();
  const [person, setPerson] = useState();
  const peopleOptions = useMemo(() => {
    if (people?.length) {
      return toListOptions(people);
    }
    return [];
  }, [people]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search
        options={peopleOptions}
        onChange={(_, value) => {
          setPerson(value);
        }}
        content={{
          noDataAvailable: loading
            ? "Loading..."
            : error
            ? (error as string)
            : "No persons available",

          placeholder: "Type to search person",
        }}
        className="w-72"
      />
      {JSON.stringify(person)}
    </main>
  );
}
