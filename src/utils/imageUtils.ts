export const getImagePath = (path: string) => {
  // If it's an absolute URL, return as is
  if (path.startsWith('http')) {
    return path;
  }

  // For local images, handle both development and production environments
  const baseUrl = import.meta.env.VITE_IMAGE_BASE_URL || '';
  return `${baseUrl}${path}`;
};
