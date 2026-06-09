import { Box, styled } from "@mui/material";

export const MainWrapper = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto", // center the container horizontally
  minHeight: "100vh",
  position: "relative",
  maxWidth: "450px",
  border: "1px solid #e0e0e0",

  main: {
    minHeight: "calc(100vh - 160px)", // Adjust for header and footer height
  },
}));
