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
  display: "flex",
  flexDirection: "row",
  color: theme.colors.textPrimary,
  marginTop: "20px",
  width: "100%",

  gap: "20px",
  //enable horizontal scrolling on small screens
  overflowX: "auto",
}));

export const OfferBannerCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: `${theme.colors.primary}50`, // add 99 for 60% opacity
  color: theme.colors.textPrimary,
  borderRadius: "8px",
  height: "100px",
  maxWidth: "400px",
  minWidth: "400px",
  padding: "20px",
}));
