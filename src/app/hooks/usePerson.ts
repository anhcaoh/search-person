"use client";

import { useEffect, useState } from "react";
import { SEARCH_ERROR_MESSAGE } from "../constants";

export interface IPerson {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const usePerson = () => {
  const [people, setPeople] = useState<null | IPerson[]>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error | string>(null);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        !people &&
          fetch("/api/person")
            .then((resp) => resp.json())
            .then(({ data }) => {
              if (data) setPeople(data);
              setLoading(false);
            })
            .catch(() => setError(SEARCH_ERROR_MESSAGE))
            .finally(() => setLoading(false));
      } catch (error: unknown) {
        setError(error as Error);
        setLoading(false);
      }
    })();
  }, []);
  return { people, loading, error };
};
export default usePerson;
