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
  ":disabled": {
    background: `${theme.colors.primary}50`,
    color: theme.colors.buttonTextColor,
    cursor: "not-allowed",
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

  p: {
    fontSize: "13px",
    fontFamily: '"JetBrains Mono", monospace',
    color: theme.colors.textColor,
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
export const PaymentModeRadioButton = styled("label", {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  height: "35px",
  minWidth: "100px",
  width: "120px",

  padding: "10px 16px",

  borderRadius: "6px",
  border: `1px solid ${selected ? theme.colors.primary : theme.colors.primary + "80"}`,

  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    borderColor: theme.colors.primary,
  },

  // Hide the actual radio input
  "& input": {
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
  },

  // Custom radio button
  "& .radio": {
    width: "18px",
    height: "18px",
    minWidth: "18px",
    borderRadius: "50%",

    border: `1px solid ${
      selected ? theme.colors.primary : theme.colors.primary + "80"
    }`,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&::after": {
      content: '""',

      width: "8px",
      height: "8px",
      borderRadius: "50%",

      backgroundColor: theme.colors.primary,

      transform: selected ? "scale(1)" : "scale(0)",

      transition: "transform 0.15s ease-in-out",
    },
  },

  "& img": {
    width: "60%",
    // height: "100%",
    objectFit: "contain",
    display: "block",
  },
}));

export const PaymentInput = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  width: "100%",
  height: "42px",
  marginTop: "10px",
  overflow: "hidden",
  backgroundColor: theme.colors.background,
  border: `1px solid ${theme.colors.primary}80`,

  borderRadius: "8px",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",

  "&:focus-within": {
    border: `1px solid ${theme.colors.primary}`,
    boxShadow: `0 0 0 2px ${theme.colors.primary}22`,
  },

  ".country_code": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",

    flexShrink: 0,
    width: "82px",
    height: "100%",
    padding: "0 10px",

    color: theme.colors.textColor,
    borderRight: `1px solid ${theme.colors.primary}80`,

    fontSize: "13px",
    fontFamily: '"JetBrains Mono", monospace',
    whiteSpace: "nowrap",

    img: {
      width: "18px",
      height: "18px",
      flexShrink: 0,
      objectFit: "contain",
      margin: 0,
    },
  },

  input: {
    flex: 1,
    minWidth: 0,
    width: "100%",
    height: "100%",

    padding: "0 12px",

    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: theme.colors.textColor,
    fontSize: "14px",
    fontFamily: '"JetBrains Mono", monospace',

    "&::placeholder": {
      color: theme.colors.textColor + "80",
      opacity: 0.7,
    },

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
}));
