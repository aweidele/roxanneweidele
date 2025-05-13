import { apiURL } from "./vars";
import { useCallback, useState } from "react";

export const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async (url = "", method = "GET", payload = null, token = null) => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (token) headers.Authorization = `Bearer ${token}`;

      const options = {
        method,
        headers,
      };

      if (payload) options.body = JSON.stringify(payload);

      const response = await fetch(apiURL + url, options);
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
