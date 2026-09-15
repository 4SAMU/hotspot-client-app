import DefaultLayout from "@/components/layout";
import OfferBanner from "@/components/header-section/offerBanner";
import CantReconnect from "@/components/header-section/cantReconnect";
import PackagesSection from "@/components/packages-section";
import MoreDealsPackagesSection from "@/components/packages-section/moreDeals";
import AlreadyHaveCredentialsSection from "@/components/already-have-credentials";
import ReviewSection from "@/components/review-section";
import { useState } from "react";

const index = () => {
  const [isBuyPackageOpen, setIsBuyPackageOpen] = useState(false);

  // Buy Package Modal handlers
  const handleOpenBuyPackage = () => {
    setIsBuyPackageOpen(true);
  };

  const handleCloseBuyPackage = () => {
    setIsBuyPackageOpen(false);
  };
  return (
    <DefaultLayout
      isBuyPackageOpen={isBuyPackageOpen}
      handleCloseBuyPackage={handleCloseBuyPackage}
      handleOpenBuyPackage={handleOpenBuyPackage}
    >
      <CantReconnect />
      <OfferBanner />
      <PackagesSection onBuyPackageClick={handleOpenBuyPackage} />
      <AlreadyHaveCredentialsSection />
      <MoreDealsPackagesSection />
      <ReviewSection />
    </DefaultLayout>
  );
};

export default index;
