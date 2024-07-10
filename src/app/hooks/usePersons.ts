"use client";

import { useEffect, useState } from "react";
import toListOptions from "../utils/list.options";
const usePersons = () => {
  const [data, setData] = useState<null | any | object[]>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | any>(null);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        !data &&
          fetch("/api/person")
            .then((resp) => resp.json())
            .then(({ data }) => {
              const list = toListOptions(data);
              if (list) setData(list);
              setLoading(false);
            })
            .catch(() => setError("Something went wrong. Try again later."))
            .finally(() => setLoading(false));
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);
  return [data, loading, error];
};
export default usePersons;
