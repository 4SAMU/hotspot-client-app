import DefaultLayout from "@/components/layout";
import OfferBanner from "@/components/header-section/offerBanner";
import CantReconnect from "@/components/header-section/cantReconnect";
import PackagesSection from "@/components/packages-section";
import MoreDealsPackagesSection from "@/components/packages-section/moreDeals";
import AlreadyHaveCredentialsSection from "@/components/already-have-credentials";

const index = () => {
  return (
    <DefaultLayout>
      <OfferBanner />
      <CantReconnect />
      <PackagesSection />
      <AlreadyHaveCredentialsSection />
      <MoreDealsPackagesSection />
    </DefaultLayout>
  );
};

export default index;
