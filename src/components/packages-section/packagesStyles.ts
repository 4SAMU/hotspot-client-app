import { Button, styled } from "@mui/material";

export const PackagesSectionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  width: "100%",

  header: {
    fontSize: "15px",
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },
}));

export const PackagesCardContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "10px",
  marginTop: "20px",
  width: "100%",
});

export const PackageCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  border: `1px solid ${theme.colors.primary}`,
  borderRadius: "8px",
  width: "100%",
  minHeight: "100px",
  boxSizing: "border-box", // keeps the actual width of elements

  h3: {
    color: theme.colors.textPrimary,
    fontSize: "14px",
    fontWeight: 1000,
  },
  p: {
    color: theme.colors.textPrimary,
    fontSize: "9px",
    fontWeight: 400,
    marginTop: "5px",
    fontFamily: theme.customTypography.fontFamilyParagraph,
  },
  ".price": {
    color: theme.colors.primary,
    fontSize: "13px",
    fontWeight: 800,
    marginTop: "5px",
    fontFamily: theme.customTypography.fontFamilyTitle,
  },
}));

export const PkgBuyButton = styled(Button)(({ theme }) => ({
  display: "flex",
  border: `1px solid ${theme.colors.primary}`,
  color: theme.colors.textPrimary,
  background: theme.colors.primary,
  width: "100%",
  height: "35px",
  textTransform: "none",
  marginTop: "8px",
}));
