const DEFAULT_PARAMS = { auto: "compress", cs: "tinysrgb", q: "70" };

const addOptimizationParams = (url, width) => {
  const optimized = new URL(url);
  Object.entries(DEFAULT_PARAMS).forEach(([key, value]) => {
    optimized.searchParams.set(key, value);
  });
  if (width) {
    optimized.searchParams.set("w", width.toString());
  }
  return optimized.toString();
};

export const buildResponsiveSrcSet = (url, widths = [320, 640, 960]) => {
  if (!url || !widths.length) return "";
  try {
    return widths
      .filter(Boolean)
      .map((width) => `${addOptimizationParams(url, width)} ${width}w`)
      .join(", ");
  } catch (error) {
    return `${url} ${widths[widths.length - 1]}w`;
  }
};

export const buildOptimizedUrl = (url, width) => {
  if (!url) return "";
  try {
    return addOptimizationParams(url, width);
  } catch (error) {
    return url;
  }
};
