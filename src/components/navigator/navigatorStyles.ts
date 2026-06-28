import { colors, styled } from "@mui/material";

export const NavigatorContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  gap: "20px",

  background: `${theme.colors.primary}15`,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",

  border: `1px solid ${theme.colors.primary}20`,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",

  borderRadius: "16px",

  minHeight: "40px",
  minWidth: "150px",
  maxWidth: "80%",

  left: "50%",
  transform: "translateX(-50%)",
  bottom: "50px",

  ".icons": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    padding: "2px",
    borderRadius: "5px",
    transition: "0.3 all ease-in-out",
    color: theme.colors.text1,
  },
  ".icons:hover": {
    background: "red",
  },
  ".icon_badge": {
    position: "absolute",
    height: "5px",
    width: "5px",
    borderRadius: "50%",
    backgroundColor: "red",
    top: "2px",
    right: "2px",
  },
}));
