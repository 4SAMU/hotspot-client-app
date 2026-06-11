import { styled } from "@mui/material";

export const HeaderTitle = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "40px 0",

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
