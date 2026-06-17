import { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";

import {
  OfferBannerCard,
  OfferBannerContainer,
  OfferBannerSection,
} from "./headerStyles";

const items = [
  <OfferBannerCard key="1">Offer 1</OfferBannerCard>,
  <OfferBannerCard key="2">Offer 2</OfferBannerCard>,
  <OfferBannerCard key="3">Offer 3</OfferBannerCard>,
];

const OfferBanner = () => {
  const carouselRef = useRef<AliceCarousel | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle slide change event and update the active index
  const handleSlideChanged = (e: any) => {
    setActiveIndex(e.item % items.length);
  };

  // Function to go to a specific slide when a dot is clicked
  const goToSlide = (index: number) => {
    carouselRef.current?.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <OfferBannerSection>
      <p>Explore our amazing deals!</p>

      <OfferBannerContainer>
        <AliceCarousel
          ref={carouselRef}
          items={items}
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableButtonsControls
          disableDotsControls
          onSlideChanged={handleSlideChanged}
        />

        {/* Custom dots */}
        <div className="button-controller_container">
          {items.map((_, index) => (
            <div
              key={index}
              className={`button-controller ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </OfferBannerContainer>
    </OfferBannerSection>
  );
};

export default OfferBanner;
