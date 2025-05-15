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

export const uniqid = (prefix = "") => prefix + Date.now().toString(36) + Math.random().toString(36).substring(2, 8);

export const sortGallery = (galleryData) => {
  const gallery = galleryData.artwork.map((item) => {
    const files = galleryData.media
      .filter((media) => media.id === item.media || media.media === item.media)
      .reduce((acc, { size_key, ...rest }) => {
        acc[size_key] = rest;
        return acc;
      }, {});
    return { ...item, files, new: false };
  });

  return {
    gallery,
  };
};
