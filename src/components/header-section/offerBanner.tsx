import {
  OfferBannerCard,
  OfferBannerContainer,
  OfferBannerSection,
} from "./headerStyles";

const OfferBanner = () => {
  return (
    <OfferBannerSection>
      <p>Explore our amazing deals!</p>
      <OfferBannerContainer>
        <OfferBannerCard>Offer 1</OfferBannerCard>
        <OfferBannerCard>Offer 2</OfferBannerCard>
      </OfferBannerContainer>
    </OfferBannerSection>
  );
};

export default OfferBanner;
