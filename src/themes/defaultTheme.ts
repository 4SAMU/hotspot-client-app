import { ThemeConfig } from "@/themes";

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: "#00C96E",
    secondary: "#0D1117",

    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",

    background: "#0D1117",

    textPrimary: "#FFFFFF",
    textSecondary: "#8B949E",

    border: "#21262D",
    divider: "#30363D",
  },

  typography: {
    fontFamily: "Plus Jakarta Sans",

    headingWeight: 800,
    bodyWeight: 400,

    h1Size: 32,
    h2Size: 24,

    bodySize: 14,
    captionSize: 12,
  },

  surfaces: {
    card: "#161B22",
    section: "#0D1117",
    elevated: "#1F2937",
  },

  buttons: {
    borderRadius: 12,

    primaryBackground: "#00C96E",
    primaryText: "#FFFFFF",

    secondaryBackground: "#161B22",
    secondaryText: "#FFFFFF",

    height: 44,
  },

  packageCard: {
    borderRadius: 16,

    defaultBorderColor: "#21262D",

    defaultBackground: "#161B22",

    glowOpacity: 0.15,

    ribbonTextColor: "#FFFFFF",
  },

  banner: {
    borderRadius: 20,

    overlayOpacity: 0.6,

    buttonRadius: 12,

    contentMaxWidth: 500,
  },
};
