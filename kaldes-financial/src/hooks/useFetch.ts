import { useEffect, useState } from "react";

const useFetch = (uri: string) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(uri);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  });

  return { loading, error, data };
};

export default useFetch;
