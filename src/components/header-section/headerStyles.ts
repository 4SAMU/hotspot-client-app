import { Button, styled } from "@mui/material";

export const HeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",

  ".my-account-icon": {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    border: `1px solid ${theme.colors.text1}`,
    borderRadius: "50%",
    cursor: "pointer",
    transition: "0.3s all ease-in-out",

    "& svg": {
      fontSize: "20px",
      color: theme.colors.text1,
      transition: "0.3s all ease-in-out",
    },

    ":hover": {
      background: `${theme.colors.primary}10`,
      border: `1px solid ${theme.colors.primary}`,

      "& svg": {
        color: theme.colors.primary,
      },
    },
    ":active": {
      background: `${theme.colors.primary}10`,
      border: `1px solid ${theme.colors.primary}`,

      "& svg": {
        color: theme.colors.primary,
      },
    },
  },
  ".icon-badge": {
    position: "absolute",
    width: "6px",
    height: "6px",
    top: "-4px",
    right: "-4px",
    borderRadius: "50%",
    background: "red",
  },

  "@media (max-width: 370px)": {
    padding: "15px 10px",
  },
}));

export const TagsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "10px 10px 0 20px",
  gap: "10px",
  borderBottom: `1px solid ${theme.colors.accent2}50`,
  padding: "0 0 10px 0",
  "@media (max-width: 370px)": {
    margin: "10px",
  },
}));

export const TagsButton = styled(Button)(({ theme }) => ({
  display: "flex",
  textTransform: "none",
  background: `${theme.colors.background}`,
  border: `1px solid ${theme.colors.accent2}`,
  color: theme.colors.accent2,
  fontSize: "10.5px",
  fontFamily: '"JetBrains Mono", monospace',
  transition: "0.3s all ease-in-out",
  gap: "5px",

  ":active": {
    background: theme.colors.accent2,
  },
  ":hover": {
    background: theme.colors.accent2,
    border: "1px solid transparent",
    color: theme.colors.text1,
  },
  "& svg": {
    fontSize: 22,
  },
}));

export const HeaderTitle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.colors.text1,
  },

  span: {
    color: theme.colors.primary,
  },
  ".tagline": {
    fontSize: "10px",
    color: theme.colors.text1,
    textTransform: "uppercase",
    marginTop: "8px",
  },
}));

export const OfferBannerSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: theme.colors.text1,
  width: "100%",
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
    backgroundColor: theme.colors.text1,
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
  color: theme.colors.text1,
  borderRadius: "8px",
  minHeight: "120px",

  width: "100%",
  maxWidth: "100%",

  padding: "16px",
  boxSizing: "border-box",
}));

export const CantReconnectContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.colors.text1,
  border: `1px solid ${theme.colors.accent2}50`,
  width: "100%",
  borderRadius: "10px",
  padding: "10px",
  fontSize: "11px",
  marginTop: "20px",
  background: `${theme.colors.accent2}20`, // add 99 for 60% opacity

  ul: {
    margin: 0,
    paddingLeft: "20px",
    listStylePosition: "outside",
  },

  li: {
    paddingLeft: "2px",
  },

  ".my-account-link": {
    color: theme.colors.accent2,
    textDecoration: "underline dashed",
    fontWeight: "bold",
    fontSize: "12px",
  },

  ".support-link": {
    color: theme.colors.text1,
  },

  "@media (max-width: 355px)": {
    ul: {
      paddingLeft: "15px",
    },
  },
}));
