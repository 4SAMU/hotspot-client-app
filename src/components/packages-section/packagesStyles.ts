import { alpha, Box, styled } from "@mui/material";
import type { Theme } from "@mui/material/styles";

interface PackageCardProps {
  hasRibbon?: boolean;
  ribbonBgColor?: string;
  ribbonTextColor?: string;
}

// Shared typography used by grid card, list card, and "more deals" card.
// Change font/size once here instead of in three places.
const packageTypography = (theme: Theme, priceMarginTop?: string) => ({
  h3: {
    color: theme.colors.textColor,
    fontSize: "14px",
    fontWeight: 1000,
    fontFamily: '"JetBrains Mono",monospace',
  },
  ul: {
    margin: "8px 0 0 0",
    paddingLeft: "10px",
  },
  li: {
    color: theme.colors.textColor,
    fontSize: "9px",
    fontWeight: 400,
    marginBottom: "4px",
    fontFamily: '"JetBrains Mono",monospace',
    "&::marker": {
      color: theme.colors.primary,
      fontWeight: 700,
    },
  },
  ".price": {
    color: theme.colors.primary,
    fontSize: "15px",
    fontWeight: 1000,
    ...(priceMarginTop ? { marginTop: priceMarginTop } : {}),
    fontFamily: '"JetBrains Mono",monospace',
  },
});

const packageTypographyCompact = {
  "@media (max-width: 355px)": {
    h3: { fontSize: "12px" },
    li: { fontSize: "8px" },
  },
};

export const PackagesSectionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "25px",
  width: "100%",

  ".top-section": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".grid_switcher_and_explore_btn": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  header: {
    fontSize: "15px",
    fontWeight: "600",
    color: theme.colors.textColor,
  },
}));

export const PackagesCardContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "10px",
  marginTop: "10px",
  width: "100%",
  transition: "all 0.3s ease-in-out",

  "@media (max-width: 355px)": {
    gap: "8px",
  },

  "&.list": {
    display: "none",
  },
});

export const PackageCard = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "hasRibbon" &&
    prop !== "ribbonBgColor" &&
    prop !== "ribbonTextColor",
})<PackageCardProps>(({ theme, hasRibbon, ribbonBgColor }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: hasRibbon ? "20px 10px 40px 10px" : "10px 10px 20px 10px",
  background: `${theme.colors.primary}05`,
  cursor: "pointer",
  border: ribbonBgColor
    ? `1px solid ${ribbonBgColor}30`
    : `1px solid ${theme.colors.primary}30`,
  borderRadius: "8px",
  width: "100%",
  minHeight: "150px",
  boxSizing: "border-box",
  transition: "0.25s all ease-in-out",
  color: theme.colors.textColor,

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: `0 15px 35px ${alpha(theme.colors.primary, 0.25)}`,
    border: `1px solid ${theme.colors.primary}60`,
  },

  ...packageTypography(theme, "10px"),

  ".pkg_button": {
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "0",
    borderRadius: "0 0 8px 8px",
  },

  ...packageTypographyCompact,
  "@media (max-width: 355px)": {
    ...packageTypographyCompact["@media (max-width: 355px)"],
    ul: { margin: "6px 0 0 0", paddingLeft: "2px" },
  },
}));

export const PkgRibbon = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "hasRibbon" &&
    prop !== "ribbonBgColor" &&
    prop !== "ribbonTextColor",
})<PackageCardProps>(({ ribbonBgColor, ribbonTextColor = "#fff" }) => ({
  position: "absolute",
  top: "-1px",
  right: "-1px",
  padding: "2px 10px",
  borderRadius: "0 8px 0 8px",
  backgroundColor: ribbonBgColor,
  color: ribbonTextColor,
  fontSize: "13px",
  fontWeight: 600,
  "@media (max-width: 355px)": {
    fontSize: "10px",
    padding: "2px 5px",
  },
}));

export const PackagesCardContainerInListView = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
  width: "100%",
  transition: "all 0.3s ease-in-out",
  gap: "10px",

  "&.grid": {
    display: "none",
  },
});

export const PkgCardInListView = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "10px",
  background: `${theme.colors.primary}10`,
  cursor: "pointer",
  border: `1px solid ${theme.colors.primary}30`,
  borderRadius: "6px",
  gap: "10px",
  width: "100%",
  transition: "all 0.3s ease-in-out",
  paddingLeft: "60px",

  ...packageTypography(theme),

  "@media (max-width: 355px)": {
    gap: "8px",
  },
}));

export const PkgRibbonInListView = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "hasRibbon" &&
    prop !== "ribbonBgColor" &&
    prop !== "ribbonTextColor",
})<PackageCardProps>(
  ({ theme, hasRibbon, ribbonBgColor, ribbonTextColor = "#fff" }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "6px 6px 0 0",
    width: "50px",
    height: "100%",
    background: hasRibbon
      ? ribbonBgColor
      : `${alpha(theme.colors.textColor, 0.1)}`,
    color: ribbonTextColor,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    padding: "12px 8px",
    textAlign: "center",
    fontSize: "9px",
    fontWeight: 700,
    lineHeight: 1.2,

    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      borderBottom: `18px solid ${alpha(theme.colors.background, 1)}`,
    },
  }),
);

export const MoreDealsPackageCard = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ribbonBgColor" && prop !== "ribbonTextColor",
})<PackageCardProps>(({ theme, ribbonBgColor, ribbonTextColor }) => {
  const color = ribbonBgColor || theme.colors.primary;

  return {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "10px",
    cursor: "pointer",
    border: `1px solid ${alpha(color, 0.35)}`,
    background: alpha(color, 0.08),
    transition: ".25s",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: `0 15px 35px ${alpha(color, 0.25)}`,
    },

    ".header": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      background: color,
      color: ribbonTextColor || "#fff",
      borderRadius: "0 0 40px 40px",
    },
    ".header::after": {
      content: '""',
      position: "absolute",
      bottom: -20,
      left: "50%",
      transform: "translateX(-50%)",
      width: "80%",
      height: 40,
      background: color,
      opacity: 0.15,
      filter: "blur(16px)",
    },
    ".header h3": {
      margin: 0,
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: '"JetBrains Mono",monospace',
    },
    ".header span": {
      fontSize: 12,
      opacity: 0.9,
      marginTop: 6,
    },
    ".price": {
      marginTop: 14,
      fontSize: "15px",
      fontWeight: 1000,
      fontFamily: '"JetBrains Mono",monospace',
    },

    ".body": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      padding: "10px",
      color: theme.colors.textColor,
    },

    ul: {
      flex: 1,
      margin: 0,
      paddingLeft: 14,
      fontFamily: '"JetBrains Mono",monospace',
    },
    li: {
      marginBottom: 5,
      fontSize: 10,
      "&::marker": { color },
    },

    ".pkg_button": {
      marginTop: "8px",
      width: "100%",
      background: color,
      color: ribbonTextColor || "#fff",
      "&:hover": { background: alpha(color, 0.9) },
    },

    "@media (max-width: 375px)": {
      li: { fontSize: "8px" },
      ".header h3": { fontSize: "11px" },
      ".price": { fontSize: "12px" },
      ".pkg_button": { fontSize: "11px" },
    },
  };
});

export const ToggleContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "88px",
  height: "40px",
  padding: "2px",
  borderRadius: "999px",
  border: `1px solid ${theme.colors.primary}50`,
  background: "transparent",
}));

export const ToggleIndicator = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "4px",
  left: "3px",
  width: "40px",
  height: "30px",
  borderRadius: "999px",
  background: theme.colors.primary,
  transition: "transform 0.3s ease-in-out",
}));

interface ToggleOptionProps {
  active: boolean;
}

export const ToggleOption = styled(Box)<ToggleOptionProps>(
  ({ theme, active }) => ({
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 2,
    transition: "color 0.3s ease",

    "& svg": {
      fontSize: "20px",
      color: active ? theme.colors.buttonTextColor : theme.colors.primary,
      transition: "color 0.3s ease",
    },

    "&:hover": { opacity: 0.85 },
  }),
);
