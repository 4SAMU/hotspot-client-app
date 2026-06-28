import { Box, styled } from "@mui/material";

export const MainWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto", // center the container horizontally
  minHeight: "100vh",
  maxWidth: "450px",
  // border: "1px solid #e0e0e099",
  background: theme.colors.background,

  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "calc(100vh - 180px)", // Adjust for header and footer height
    width: "100%",
    padding: "10px 20px",
  },
}));
