export interface ThemeConfig {
  colors: ThemeColors;

  buttons: ThemeButtons;

  packageCardColors: ThemePackageCardColors;
}

export interface ThemeColors {
  background: string;

  primary: string;
  secondary: string;

  titleSpanColor: string; //title span accent color
  textColor: string;
  buttonTextColor: string;

  success: string;
  warning: string;
  error: string;

  accent: string;

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
