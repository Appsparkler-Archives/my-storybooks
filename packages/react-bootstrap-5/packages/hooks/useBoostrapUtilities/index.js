import React from 'react';

export default (props = {}) => {
  const {
    // background colors
    bgPrimary,
    bgSecondary,
    bgInfo,
    bgSuccess,
    bgWarning,
    bgDanger,
    bgDark,
    bgLight,
    // text-colors
    textPrimary,
    textSecondary,
    textInfo,
    textSuccess,
    textWarning,
    textDanger,
    textDark,
    textLight,
  } = props;

  const bg = React.useMemo(() => {
    const hasBg =
      bgPrimary ||
      bgSecondary ||
      bgInfo ||
      bgSuccess ||
      bgWarning ||
      bgDanger ||
      bgDark ||
      bgLight;
    return hasBg
      ? `bg-${
          (bgPrimary && 'primary') ||
          (bgSecondary && 'secondary') ||
          (bgInfo && 'info') ||
          (bgSuccess && 'success') ||
          (bgWarning && 'warning') ||
          (bgDanger && 'danger') ||
          (bgDark && 'dark') ||
          (bgLight && 'light')
        }`
      : '';
  }, [
    bgPrimary,
    bgSecondary,
    bgInfo,
    bgSuccess,
    bgWarning,
    bgDanger,
    bgDark,
    bgLight,
  ]);

  const text = React.useMemo(() => {
    const hasText =
      textPrimary ||
      textSecondary ||
      textInfo ||
      textSuccess ||
      textWarning ||
      textDanger ||
      textDark ||
      textLight;
    return hasText
      ? `text-${
          (textPrimary && 'primary') ||
          (textSecondary && 'secondary') ||
          (textInfo && 'info') ||
          (textSuccess && 'success') ||
          (textWarning && 'warning') ||
          (textDanger && 'danger') ||
          (textDark && 'dark') ||
          (textLight && 'light')
        }`
      : '';
  }, [
    textPrimary,
    textSecondary,
    textInfo,
    textSuccess,
    textWarning,
    textDanger,
    textDark,
    textLight,
  ]);

  return ` ${bg} ${text} `;
};
