import { apiURL } from "./vars";
import { useCallback, useState } from "react";

export const useApi = (options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiURL);

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Request failed");
      }

      setData(responseData);
      return responseData;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, request };
};
