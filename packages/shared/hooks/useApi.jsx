import { apiURL } from "@shared";
import { useCallback, useState } from "react";

export const apiRequest = async (url = "", method = "GET", payload = null, token = null, isFormData = false) => {
  console.log(payload);
  console.log(method);
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
  const endpoint = apiURL + url;
  console.log(options);
  console.log(endpoint);

  const response = await fetch(endpoint, options);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    console.log("ERROR?");
    console.error(errorBody);
    const error = new Error(errorBody.message || "API request failed");
    error.status = response.status;
    error.body = errorBody;
    throw error;
  }

  console.log("Here?", response);
  const responseData = await response.json();
  console.log("Here?", responseData);
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
      console.error(err);
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, request };
};
