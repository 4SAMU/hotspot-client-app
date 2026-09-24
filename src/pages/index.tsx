import DefaultLayout from "@/components/layout";
import OfferBanner from "@/components/header-section/offerBanner";
import CantReconnect from "@/components/header-section/cantReconnect";
import PackagesSection from "@/components/packages-section";
import MoreDealsPackagesSection from "@/components/packages-section/moreDeals";
import AlreadyHaveCredentialsSection from "@/components/already-have-credentials";
import ReviewSection from "@/components/review-section";

const index = () => {
  return (
    <DefaultLayout>
      <CantReconnect />
      <OfferBanner />
      <PackagesSection />
      <AlreadyHaveCredentialsSection />
      <MoreDealsPackagesSection />
      <ReviewSection />
    </DefaultLayout>
  );
};

export default index;
