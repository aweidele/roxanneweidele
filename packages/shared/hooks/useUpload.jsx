import { useState } from "react";
import { apiRequest } from "./useApi";

export const useUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);

  const uploadFile = async (file, token) => {
    setUploading(true);
    setUploadError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await apiRequest("upload", "POST", formData, token, true);
      setUploadResult(result);
      return result;
    } catch (error) {
      setUploadError(error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading, uploadError, uploadResult };
};
