import { styled } from "@mui/material";

export const FooterSection = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.colors.border}`,
  padding: "10px 20px 20px 20px", //top right bottom left
  fontSize: "13px",

  span: {
    color: theme.colors.primary,
  },

  ".left-items": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.colors.textPrimary,
    ".powered-by": {
      color: theme.colors.textPrimary,
      fontSize: "11px",
    },
  },

  ".right-items": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.colors.primary}`,
    padding: "5px 10px",
    borderRadius: "8px",
    color: theme.colors.primary,
    cursor: "pointer",
    img: {
      filter: theme.colors.textPrimary === "#FFFFFF" ? "invert(100%)" : "none",
    },
  },
}));
