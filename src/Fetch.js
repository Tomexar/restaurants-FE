import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not find data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        if (e.name === "AbortError") {
          console.log("aborted");
        } else {
          setError(e.message);
          setIsLoading(false);
        }
      });
    return () => abortController.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
