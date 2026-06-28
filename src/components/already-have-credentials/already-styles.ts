import { alpha, Button, styled } from "@mui/material";

export const CredentialsSection = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100px",
  marginTop: "25px",
  borderRadius: "12px",
  background: `${theme.colors.accent2}20`,
  border: `0.5px solid ${theme.colors.accent2}25`,
  padding: "20px",
  boxSizing: "border-box",
  boxShadow: `
  0 1px 2px ${alpha(theme.colors.accent2, 0.08)},
  0 8px 24px ${alpha(theme.colors.accent2, 0.12)}
`,

  header: {
    fontFamily: '"JetBrains Mono", Monospace',
    fontSize: "12px",
    fontWeight: "500",
    color: theme.colors.accent2,
    // textTransform: "Uppercase",
    textDecoration: "underline",
    textUnderlineOffset: "5px",
    textDecorationThickness: "1px",
  },
  p: {
    fontSize: "10px",
    fontWeight: "500",
    fontStyle: "italic",
    color: theme.colors.text1,
    marginTop: "5px",
  },

  "@media (max-width: 370px)": {
    padding: "15px 10px",
  },
}));

export const ConnectButton = styled(Button)(({ theme }) => ({
  display: "flex",
  textTransform: "none",
  background: `${theme.colors.accent2}50`,
  color: theme.colors.text1,
  transition: "0.3s all ease-in-out",
  margin: "10px 0",
  fontWeight: "600",
  "& svg": {
    fontSize: 22,
  },

  ":active": {
    background: theme.colors.accent2,
  },
  ":hover": {
    background: theme.colors.accent2,
  },
}));
