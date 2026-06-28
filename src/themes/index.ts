export interface ThemeConfig {
  colors: ThemeColors;

  buttons: ThemeButtons;

  packageCardColors: ThemePackageCardColors;
}

export interface ThemeColors {
  background: string;

  primary: string;
  secondary: string;

  text1: string;
  text2: string;

  success: string;
  warning: string;
  error: string;

  accent1: string;
  accent2: string;

  border1: string;
  border2: string;
}

export interface ThemeButtons {
  primary: ButtonColors;
  secondary: ButtonColors;
}

export interface ButtonColors {
  background: string;
  text: string;
}

export interface ThemePackageCardColors {
  ribbon: {
    background: string;
    text: string;
  };
}
