import { styled } from "@mui/material";

export const ReviewSectionContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "40px",
  borderRadius: "10px",
  //   border: `0.5px solid ${theme.colors.primary}25`,
  background: `${theme.colors.primary}25`,
  padding: "20px",
  boxSizing: "border-box",

  header: {
    fontSize: "13px",
    fontWeight: "bold",
    color: theme.colors.textColor,
    fontFamily: '"JetBrains Mono", monospace',
  },
  p: {
    fontSize: "12px",
    fontWeight: "400",
    color: theme.colors.textColor,
    marginTop: "10px",
    fontFamily: '"DM Sans", sans-serif',
  },
  input: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "10px",
    border: `1px solid ${theme.colors.primary}50`,
    background: `${theme.colors.primary}05`,
    color: theme.colors.textColor,
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: "12px",

    ":focus": {
      outline: `1px solid ${theme.colors.primary}80`,
    },
  },
  textarea: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "10px 10px 0 0",
    border: `1px solid ${theme.colors.primary}50`,
    background: `${theme.colors.primary}05`,
    color: theme.colors.textColor,
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: "12px",
    resize: "none",

    ":focus": {
      outline: `1px solid ${theme.colors.primary}80`,
    },
  },

  ".submit-button": {
    borderRadius: "0 0 10px 10px",
  },

  "@media (max-width: 370px)": {
    padding: "15px 10px",
  },
}));
