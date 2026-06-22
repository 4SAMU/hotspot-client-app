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
          <h3>14 Hours</h3>
          <p>Enjoy 14hrs unlimited access</p>
          <span className="price">KES 30</span>
          <PkgBuyButton>Buy</PkgBuyButton>
        </PackageCard>
      </PackagesCardContainer>
    </PackagesSectionContainer>
  );
};

export default PackagesSection;
