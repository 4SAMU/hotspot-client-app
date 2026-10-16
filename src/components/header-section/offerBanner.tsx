import { useMemo, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Box } from "@mui/material";

import {
  OfferBannerCard,
  OfferBannerContainer,
  OfferBannerSection,
} from "./headerStyles";
import { FilledButton } from "@/styles/common-styles";
import { PackageProps, usePayment } from "@/context/PaymentModalContext";

const offers: PackageProps[] = [
  {
    title: "3 Days Unlimited",
    price: 100,
    features: ["Get 3 Days Unlimited connection at only Kes.100"],
    image: "https://picsum.photos/seed/moon/600/400",
  },
  {
    title: "7 Days Unlimited",
    price: 199,
    features: ["Get 7 Days Unlimited connection at only Kes.199"],
    image: "https://picsum.photos/seed/hotel/600/400",
  },
  {
    title: "30 Days Unlimited",
    price: 550,
    features: ["Get 30 Days Unlimited connection at only Kes.550"],
    image: "https://picsum.photos/seed/car/600/400",
  },
];

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  onPrev: () => void;
  onNext: () => void;
}

const OfferCard = ({
  title,
  description,
  image,
  price,
  onPrev,
  onNext,
}: OfferCardProps) => {
  const { openPaymentModal } = usePayment();

  return (
    <OfferBannerCard>
      <Box className="left-side-items">
        <h3 className="title">{title}</h3>

        <p className="description">{description}</p>

        <FilledButton
          sx={{ position: "relative", marginTop: "10px", zIndex: 3 }}
          onClick={() =>
            openPaymentModal({
              title,
              price,
              features: [description],
              image,
            })
          }
        >
          Buy Now
        </FilledButton>
      </Box>

      <Box className="image-section">
        <img src={image} alt={title} />
      </Box>
      <div className="controllers left_button" onClick={onPrev} />
      <div className="controllers right_button" onClick={onNext} />
    </OfferBannerCard>
  );
};

const OfferBanner = () => {
  const carouselRef = useRef<AliceCarousel | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    carouselRef.current?.slideTo(index);
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    carouselRef.current?.slidePrev();
  };

  const goToNext = () => {
    carouselRef.current?.slideNext();
  };

  const items = useMemo(
    () =>
      offers.map((offer, index) => (
        <OfferCard
          key={index}
          title={offer.title}
          description={offer.features?.[0] ?? ""}
          image={offer.image ?? ""}
          price={offer.price}
          onPrev={() => goToPrevious()}
          onNext={() => goToNext()}
        />
      )),
    [],
  );

  const handleSlideChanged = (e: any) => {
    setActiveIndex(e.item % offers.length);
  };

  return (
    <OfferBannerSection>
      <h4>Today's Offers!</h4>

      <OfferBannerContainer>
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={{
            0: { items: 1 },
            768: { items: 1 },
            1024: { items: 1 },
          }}
          autoPlay
          autoPlayInterval={5000}
          infinite
          disableButtonsControls
          disableDotsControls
          onSlideChanged={handleSlideChanged}
        />

        <div className="button-controller_container">
          {offers.map((_, index) => (
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
