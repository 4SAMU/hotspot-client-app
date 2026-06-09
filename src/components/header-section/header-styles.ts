import { styled } from "@mui/material";

export const HeaderTitle = styled("header")(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));
