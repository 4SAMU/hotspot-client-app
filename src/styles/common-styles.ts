import { Box, Button, keyframes, styled } from "@mui/material";

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

interface PaymentModeRadioButtonProps {
  airtel?: boolean;
  mpesa?: boolean;
  selected: boolean;
}

export const PaymentModeRadioButton = styled("label", {
  shouldForwardProp: (prop) =>
    prop !== "selected" && prop !== "airtel" && prop !== "mpesa",
})<PaymentModeRadioButtonProps>(({ airtel, mpesa, selected }) => {
  const providerColor = mpesa ? "#24a549" : airtel ? "#ed1b24" : "#00A859";

  return {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    height: "35px",
    minWidth: "100px",
    width: "120px",
    backgroundColor: selected ? providerColor + "20" : "transparent",
    padding: "10px 16px",
    borderRadius: "6px",
    border: `1px solid ${providerColor}`,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",

    "& input": {
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
    },

    "& .radio": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "18px",
      height: "18px",
      minWidth: "18px",
      borderRadius: "50%",
      border: `1px solid ${providerColor}`,

      "&::after": {
        content: '""',
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: providerColor,
        transform: selected ? "scale(1)" : "scale(0)",
        transition: "transform 0.15s ease-in-out",
      },
    },

    "& img": {
      width: "60%",
      objectFit: "contain",
      display: "block",
    },
  };
});

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

interface StatusBoxProps {
  status?: "success" | "error" | "info";
}

//Status box
export const StatusBox = styled(Box)<StatusBoxProps>(({ theme, status }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
  padding: "10px",

  borderRadius: "8px",
  backgroundColor:
    status === "success"
      ? theme.colors.success + "50"
      : status === "error"
        ? theme.colors.error + "50"
        : theme.colors.info + "50",

  ".status_text": {
    fontWeight: "600",
    fontFamily: '"JetBrains Mono", monospace',
    color:
      status === "success"
        ? theme.colors.success
        : status === "error"
          ? theme.colors.error
          : theme.colors.info,
    left: "0px",
    width: "100%",
    fontSize: "12px",
  },
}));

//dots animation
// Define keyframe animation for loading dots
export const dotsAnimation = keyframes`
  0% {
    content: '.';
  }
  33% {
    content: '..';
  }
  66% {
    content: '...';
  }
  100% {
    content: '.';
  }
`;

export const Dots = styled("span")<StatusBoxProps>(({ theme, status }) => ({
  fontFamily: "monospace",
  fontSize: "15px",
  fontWeight: "bold",
  "&::after": {
    content: '"."',
    animation: `${dotsAnimation} 1.5s steps(3, end) infinite`,
    color:
      status === "success"
        ? theme.colors.success
        : status === "error"
          ? theme.colors.error
          : theme.colors.info,
  },
}));

//spiner loader
export const Spinner = styled("div")(({ theme }) => ({
  display: "flex",
  marginLeft: "8px",
  width: "22px",
  height: "22px",
  border: `2px solid ${theme.colors.buttonTextColor}50`,
  borderTop: `2px solid ${theme.colors.buttonTextColor}`,
  borderRadius: "50%",
  animation: "spin 1s linear infinite",

  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));
