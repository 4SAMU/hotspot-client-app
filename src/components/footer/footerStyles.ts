import { styled } from "@mui/material";

export const FooterSection = styled("footer")(({}) => ({
  display: "flex",
  flexDirection: "column",
}));

export const FooterTextContents = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.colors.primary}99`,
  padding: "20px", //top right bottom left
  fontSize: "13px",

  span: {
    color: theme.colors.primary,
  },

  ".left-items": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.colors.text1,
    ".powered-by": {
      color: theme.colors.text1,
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

    "& svg": {
      fontSize: 22,
    },
  },
}));
