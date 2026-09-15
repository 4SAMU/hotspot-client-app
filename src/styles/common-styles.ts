import { Box, Button, styled } from "@mui/material";

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

// Modal Wrapper
export const ModalWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "450px",
  maxHeight: "92vh",
  boxSizing: "border-box",
  margin: "0 auto",

  backgroundColor: theme.colors.background,
  color: theme.colors.textColor,

  border: `1px solid ${theme.colors.primary}50`,

  borderBottom: "none",
  borderRadius: "22px 22px 0 0",

  padding: "24px 22px 28px",

  boxShadow: "0 -10px 40px rgba(0, 0, 0, 0.25)",

  // Scroll but hide scrollbar
  overflowY: "auto",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

// Modal Drag handle
export const ModalDragHandle = styled(Box)(({ theme }) => ({
  width: "36px",
  height: "4px",
  borderRadius: "10px",
  backgroundColor: theme.colors.textColor + "50",
  margin: "0 auto 26px",
}));
