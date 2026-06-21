import { Box } from "@mui/material";
import {
  PackageCard,
  PackagesCardContainer,
  PackagesSectionContainer,
  PkgBuyButton,
} from "./packagesStyles";

const PackagesSection = () => {
  return (
    <PackagesSectionContainer>
      <header>Our Deals 🔥</header>
      <PackagesCardContainer>
        <PackageCard>
          <Box className="title">14 Hours Plan</Box>
          <Box className="price">KES 30</Box>
          <p>Enjoy 14hrs unlimited access</p>
          <PkgBuyButton>Buy</PkgBuyButton>
        </PackageCard>
      </PackagesCardContainer>
    </PackagesSectionContainer>
  );
};

export default PackagesSection;
