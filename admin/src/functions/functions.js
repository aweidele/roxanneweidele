export const isNumeric = (str) => /^\d+$/.test(str);

export const getIsAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const [, payloadBase64] = token.split(".");
    const payload = JSON.parse(atob(payloadBase64));

    const now = Math.floor(Date.now() / 1000);

    if (payload.exp <= now) {
      localStorage.removeItem("token");
      return false;
    }

    return payload.exp && payload.exp > now;
  } catch (e) {
    return false;
  }
};
