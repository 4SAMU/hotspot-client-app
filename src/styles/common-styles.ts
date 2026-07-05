import { Button, styled } from "@mui/material";

export const OutlinedButton = styled(Button)(({ theme }) => ({
  display: "flex",
  textTransform: "none",
  height: "30px",
  background: `${theme.colors.background}`,
  border: `1px solid ${theme.colors.accent2}`,
  color: theme.colors.accent2,
  fontSize: "10.5px",
  fontFamily: '"JetBrains Mono", monospace',
  transition: "0.3s all ease-in-out",
  gap: "5px",

  "& svg": {
    fontSize: 22,
  },

  ":hover": {
    fontSize: "10.8px",
  },
}));

export const FilledButton = styled(Button)(({ theme }) => ({
  height: "30px",
  textTransform: "none",
  background: theme.colors.primary,
  color: theme.colors.text1,
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  fontFamily: '"JetBrains Mono",monospace',
  fontSize: "13px",

  "&:hover": {
    background: `${theme.colors.primary}CC`,
    color: theme.colors.text1,
  },

  "&:active": {
    background: `${theme.colors.primary}CC`,
    color: theme.colors.text1,
  },
  "& svg": {
    fontSize: 22,
  },
}));
