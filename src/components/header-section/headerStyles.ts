import { styled } from "@mui/material";

export const HeaderSectionContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

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
  marginTop: "20px",
  color: theme.colors.textSecondary,
  width: "100%",
}));

export const OfferBannerContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  marginTop: "8px",
  width: "100%",

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
  backgroundColor: `${theme.colors.primary}50`, // add 99 for 60% opacity
  color: theme.colors.textPrimary,
  borderRadius: "8px",
  height: "120px",
  maxWidth: "400px",
  minWidth: "400px",
  padding: "20px",
}));
