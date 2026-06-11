import { styled } from "@mui/material/styles";

export const HeaderTitle = styled("header")(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: theme.colors.textPrimary,

  span: {
    color: theme.colors.primary,
  },
}));
