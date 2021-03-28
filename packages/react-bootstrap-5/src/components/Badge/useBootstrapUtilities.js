import React from "react";

export default (props = {}) => {
  const {
    bgPrimary,
    bgSecondary,
    bgInfo,
    bgWarning,
    bgSuccess,
    bgDanger,
    bgDark,
    bgLight,
    textPrimary,
    textSecondary,
    textInfo,
    textWarning,
    textSuccess,
    textDanger,
    textDark,
    textLight,
  } = props;
  const bg = React.useMemo(() => {
    const hasBg =
      bgPrimary ||
      bgSecondary ||
      bgInfo ||
      bgWarning ||
      bgSuccess ||
      bgDanger ||
      bgDark ||
      bgLight;
    return hasBg
      ? `bg-${
          (bgPrimary && "primary") ||
          (bgSecondary && "secondary") ||
          (bgInfo && "secondary") ||
          (bgWarning && "warning") ||
          (bgSuccess && "success") ||
          (bgDanger && "danger") ||
          (bgDark && "dark") ||
          (bgLight && "light")
        }`
      : "";
  }, [
    bgPrimary,
    bgSecondary,
    bgInfo,
    bgWarning,
    bgSuccess,
    bgDanger,
    bgDark,
    bgLight,
  ]);
  const text = React.useMemo(() => {
    const hasBg =
      textPrimary ||
      textSecondary ||
      textInfo ||
      textWarning ||
      textSuccess ||
      textDanger ||
      textDark ||
      textLight;
    return hasBg
      ? `text-${
          (textPrimary && "primary") ||
          (textSecondary && "secondary") ||
          (textInfo && "secondary") ||
          (textWarning && "warning") ||
          (textSuccess && "success") ||
          (textDanger && "danger") ||
          (textDark && "dark") ||
          (textLight && "light")
        }`
      : "";
  }, [
    textPrimary,
    textSecondary,
    textInfo,
    textWarning,
    textSuccess,
    textDanger,
    textDark,
    textLight,
  ]);

  return `${bg} ${text}`;
};
