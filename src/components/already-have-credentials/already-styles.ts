import { alpha, Button, styled } from "@mui/material";

export const CredentialsSection = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100px",
  marginTop: "25px",
  borderRadius: "12px",
  background: `${theme.colors.accent}20`,
  border: `0.5px solid ${theme.colors.accent}25`,
  padding: "20px",
  boxSizing: "border-box",
  boxShadow: `
  0 1px 2px ${alpha(theme.colors.accent, 0.08)},
  0 8px 24px ${alpha(theme.colors.accent, 0.12)}
`,

  header: {
    fontFamily: '"JetBrains Mono", Monospace',
    fontSize: "12px",
    fontWeight: "500",
    color: theme.colors.accent,
    // textTransform: "Uppercase",
    textDecoration: "underline",
    textUnderlineOffset: "5px",
    textDecorationThickness: "1px",
  },
  p: {
    fontSize: "10px",
    fontWeight: "500",
    fontStyle: "italic",
    color: theme.colors.textColor,
    marginTop: "5px",
  },

  "@media (max-width: 370px)": {
    padding: "15px 10px",
  },
}));

export const ConnectButton = styled(Button)(({ theme }) => ({
  display: "flex",
  textTransform: "none",
  background: `${theme.colors.accent}50`,
  color: theme.colors.textColor,
  transition: "0.3s all ease-in-out",
  margin: "10px 0",
  fontWeight: "600",
  "& svg": {
    fontSize: 22,
  },

  ":active": {
    background: theme.colors.accent,
  },
  ":hover": {
    background: theme.colors.accent,
  },
}));
