export interface ThemeConfig {
  colors: ThemeColors;

  customTypography: ThemeCustomTypography;

  surfaces: ThemeSurfaces;

  buttons: ThemeButtons;

  packageCard: ThemePackageCard;

  banner: ThemeBanner;
}

export interface ThemeColors {
  primary: string;
  secondary: string;

  success: string;
  warning: string;
  error: string;

  background: string;

  textPrimary: string;
  textSecondary: string;

  border: string;
  border2: string;
  divider: string;
}

export interface ThemeCustomTypography {
  fontFamilyBase: string;
  fontFamilyTitle: string;
  fontFamilyParagraph: string;

  headingWeight: number;
  bodyWeight: number;

  h1Size: number;
  h2Size: number;

  bodySize: number;
  captionSize: number;
}

export interface ThemeSurfaces {
  card: string;
  section: string;
  elevated: string;
}

export interface ThemeButtons {
  borderRadius: number;

  primaryBackground: string;
  primaryText: string;

  secondaryBackground: string;
  secondaryText: string;

  height: number;
}

export interface ThemePackageCard {
  borderRadius: number;

  defaultBorderColor: string;

  defaultBackground: string;

  glowOpacity: number;

  ribbonTextColor: string;
}

export interface ThemeBanner {
  borderRadius: number;

  overlayOpacity: number;

  buttonRadius: number;

  contentMaxWidth: number;
}
