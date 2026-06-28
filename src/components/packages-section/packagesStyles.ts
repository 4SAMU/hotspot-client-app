import { alpha, Button, styled } from "@mui/material";

interface PackageCardProps {
  hasRibbon?: boolean;
  ribbonBgColor?: string;
  ribbonTextColor?: string;
}

export const PackagesSectionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  width: "100%",

  header: {
    fontSize: "15px",
    fontWeight: "bold",
    color: theme.colors.text1,
  },
}));

export const PackagesCardContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "10px",
  marginTop: "20px",
  width: "100%",
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
  boxSizing: "border-box", // keeps the actual width of elements
  transition: "0.25s all ease-in-out",
  color: theme.colors.text1,

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: `0 15px 35px ${alpha(theme.colors.primary, 0.25)}`,
    border: `1px solid ${theme.colors.primary}60`,
  },

  h3: {
    color: theme.colors.text1,
    fontSize: "14px",
    fontWeight: 1000,
    fontFamily: '"JetBrains Mono",monospace',
  },
  ul: {
    margin: "8px 0 0 0",
    paddingLeft: "10px",
  },

  li: {
    color: theme.colors.text1,
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
    marginTop: "10px",
    fontFamily: '"JetBrains Mono",monospace',
  },
  ".pkg_button": {
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "0",
    borderRadius: "0 0 8px 8px",
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
}));

export const PkgBuyButton = styled(Button)(({ theme }) => ({
  display: "flex",
  color: theme.colors.text1,
  background: `${theme.colors.primary}`,
  width: "100%",
  height: "35px",
  textTransform: "none",
  marginTop: "8px",
}));

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

    ".price": {
      marginTop: 14,
      fontSize: "15px",
      fontWeight: 1000,
      fontFamily: '"JetBrains Mono",monospace',
    },

    ".header span": {
      fontSize: 12,
      opacity: 0.9,
      marginTop: 6,
    },

    ".body": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      padding: "10px",
      color: theme.colors.text1,
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

      "&::marker": {
        color,
      },
    },

    ".pkg_button": {
      width: "80%",
      background: color,
      color: ribbonTextColor || "#fff",

      "&:hover": {
        background: alpha(color, 0.9),
      },
    },
  };
});
