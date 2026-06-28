import { alpha, Box, InputBase, styled } from "@mui/material";

export const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "12px",

  width: "100%",
  height: 40,

  overflow: "hidden",

  borderRadius: 6,

  // background: theme.colors.background,
  border: `1px solid ${alpha(theme.colors.accent2, 0.5)}`,

  transition: "all .25s ease",

  "&:focus-within": {
    borderColor: theme.colors.accent2,
    boxShadow: `0 0 0 3px ${alpha(theme.colors.accent2, 0.12)}`,
  },
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  width: 56,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.colors.accent2,
  color: theme.colors.text1,
  cursor: "pointer",

  "& svg": {
    fontSize: 22,
  },
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  flex: 1,

  "& .MuiInputBase-input": {
    padding: "16px 18px",

    fontSize: 15,
    fontFamily: '"JetBrains Mono", monospace',

    color: theme.colors.text1,

    "&::placeholder": {
      color: alpha(theme.colors.accent2, 0.45),
      opacity: 0.5,
    },
  },
}));
