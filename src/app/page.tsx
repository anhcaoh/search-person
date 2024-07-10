"use client";

import { useMemo, useState } from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import {
  SEARCH_LOADING,
  SEARCH_NO_DATA_AVAILABLE,
  SEARCH_PLACEHOLDER,
  SEARCH_TITLE,
} from "./constants";
import usePerson, { IPerson } from "./hooks/usePerson";
import toListOptions, { IListOption } from "./utils/list.options";
import toAddressString from "./utils/string.address";

export default function Home() {
  const { people, loading, error } = usePerson();
  const [person, setPerson] = useState<null | IPerson>();
  const peopleOptions = useMemo(() => {
    if (people?.length) {
      return toListOptions(people);
    }
    return [];
  }, [people]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Heading text={SEARCH_TITLE} />
        <Search
          options={peopleOptions}
          onChange={(_, value) => {
            setPerson(value);
          }}
          content={{
            noDataAvailable: loading
              ? SEARCH_LOADING
              : error
              ? (error as string)
              : SEARCH_NO_DATA_AVAILABLE,

            placeholder: SEARCH_PLACEHOLDER,
          }}
          className="w-72"
        />
        <div className="mt-5 whitespace-pre-line place-content-center">
          {(person as IListOption)?.label}
          {person?.address && toAddressString(person.address)}
        </div>
      </div>
    </main>
  );
}
