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
    color: theme.colors.textPrimary,
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
  justifyContent: "center",
  padding: hasRibbon ? "20px 10px 10px" : "10px",
  background: ribbonBgColor
    ? `${ribbonBgColor}15`
    : `${theme.colors.primary}20`,

  border: ribbonBgColor
    ? `1px solid ${ribbonBgColor}30`
    : `1px solid ${theme.colors.primary}30`,
  borderRadius: "8px",
  width: "100%",
  minHeight: "150px",
  boxSizing: "border-box", // keeps the actual width of elements
  transition: "0.25s all ease-in-out",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
  },

  h3: {
    color: theme.colors.textPrimary,
    fontSize: "14px",
    fontWeight: 1000,
    fontFamily: theme.customTypography.fontFamilyTitle,
  },
  ul: {
    margin: "8px 0 0 0",
    paddingLeft: "10px",
  },

  li: {
    color: theme.colors.textPrimary,
    fontSize: "9px",
    fontWeight: 400,
    fontFamily: theme.customTypography.fontFamilyTitle,
    marginBottom: "4px",

    "&::marker": {
      color: theme.colors.primary,
      fontWeight: 700,
    },
  },
  ".price": {
    color: theme.colors.primary,
    fontSize: "14px",
    fontWeight: 1000,
    marginTop: "10px",
    fontFamily: theme.customTypography.fontFamilyTitle,
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
  color: theme.colors.textPrimary,
  background: theme.colors.primary,
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

      borderRadius: "0 0 120px 120px",
      boxShadow: `0 6px 15px ${alpha(color, 0.45)}`,
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
      fontSize: "15px",
      fontWeight: 700,
      fontFamily: theme.customTypography.fontFamilyTitle,
    },

    ".price": {
      marginTop: 14,
      fontSize: "14px",
      fontWeight: 900,
      fontFamily: theme.customTypography.fontFamilyTitle,
    },

    ".header span": {
      fontSize: 13,
      opacity: 0.9,
      marginTop: 6,
    },

    ".body": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      padding: "10px",
      color: theme.colors.textPrimary,

      // body gets a light shade of ribbon color
      background: alpha(color, 0.06),
    },

    ul: {
      flex: 1,
      margin: 0,
      paddingLeft: 14,
      fontFamily: theme.customTypography.fontFamilyTitle,
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
