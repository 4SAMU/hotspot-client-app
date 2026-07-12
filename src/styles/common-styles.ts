import { Button, styled } from "@mui/material";

export const OutlinedButton = styled(Button)(({ theme }) => ({
  display: "flex",
  textTransform: "none",
  height: "30px",
  background: `${theme.colors.background}`,
  border: `1px solid ${theme.colors.accent}`,
  color: theme.colors.accent,
  fontSize: "10.5px",
  fontFamily: '"JetBrains Mono", monospace',
  fontWeight: "500",
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
  color: theme.colors.buttonTextColor,
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  fontFamily: '"JetBrains Mono",monospace',
  fontSize: "13px",
  fontWeight: "600",

  "&:hover": {
    background: `${theme.colors.primary}CC`,
    color: theme.colors.textColor,
  },

  "&:active": {
    background: `${theme.colors.primary}CC`,
    color: theme.colors.textColor,
  },
  "& svg": {
    fontSize: 22,
  },
}));

export const RowDisplay = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const ColumnDisplay = styled("div")({
  display: "flex",
  flexDirection: "column",
});
