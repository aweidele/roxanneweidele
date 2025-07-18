import { apiURL } from "@shared";
import { useCallback, useState } from "react";

export const apiRequest = async (url = "", method = "GET", payload = null, token = null, isFormData = false) => {
  const headers = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) headers.Authorization = `Bearer ${token}`;

  const options = {
    method,
    headers,
  };

  if (payload && method !== "GET") options.body = isFormData ? payload : JSON.stringify(payload);
  console.log(options);
  const endpoint = apiURL + url;
  console.log(endpoint);

  const response = await fetch(endpoint, options);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Request failed");
  }
  return responseData;
};

export const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async (url = "", method = "GET", payload = null, token = null) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiRequest(url, method, payload, token);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, request };
};
