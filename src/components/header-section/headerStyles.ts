import { styled } from "@mui/material";

export const HeaderTitle = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "40px 0 20px 0", //top right bottom left

  h1: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },

  span: {
    color: theme.colors.primary,
  },
  ".tagline": {
    fontSize: "10px",
    color: theme.colors.textPrimary,
    textTransform: "uppercase",
    marginTop: "8px",
  },
}));

export const OfferBannerSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: theme.colors.textSecondary,
  width: "100%",
  fontFamily: theme.customTypography.fontFamilyBase,
}));

export const OfferBannerContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  marginTop: "8px",
  width: "100%",

  ".alice-carousel": {
    width: "100%",
  },

  ".alice-carousel__stage-item": {
    width: "100% !important",
  },

  ".button-controller_container": {
    display: "flex",
    flexDirection: "row",
    gap: "6px",
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  ".button-controller": {
    width: "4px",
    height: "8px",
    backgroundColor: theme.colors.textSecondary,
    opacity: 0.4,
    cursor: "pointer",
    transition: "all 0.25s ease",

    // 🔷 true parallelogram shape
    transform: "skewX(-25deg)",
  },

  ".button-controller.active": {
    backgroundColor: theme.colors.primary,
    opacity: 1,
    transform: "skewX(-25deg) scale(1.2)",
  },
}));

export const OfferBannerCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: `${theme.colors.primary}50`,
  color: theme.colors.textPrimary,
  borderRadius: "8px",
  minHeight: "120px",

  width: "100%",
  maxWidth: "100%",

  padding: "20px",
  boxSizing: "border-box",

  "@media (max-width: 600px)": {
    padding: "16px",
  },
}));

export const CantReconnectContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.colors.textPrimary,
  border: `1px solid ${theme.colors.border2}`,
  width: "100%",
  borderRadius: "10px",
  padding: "10px",
  fontSize: "11px",
  marginTop: "20px",
  backgroundColor: `${theme.colors.border2}10`, // add 99 for 60% opacity
  fontFamily: theme.customTypography.fontFamilyParagraph,

  ul: {
    margin: 0,
    paddingLeft: "20px",
    listStylePosition: "outside",
  },

  li: {
    paddingLeft: "2px",
  },

  ".my-account-link": {
    color: theme.colors.border2,
    textDecoration: "underline dashed",
    fontWeight: "bold",
    fontSize: "12px",
  },

  ".support-link": {
    color: theme.colors.textPrimary,
  },
}));
