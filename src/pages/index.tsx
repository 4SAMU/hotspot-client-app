import DefaultLayout from "@/components/layout";
import OfferBanner from "@/components/header-section/offerBanner";
import CantReconnect from "@/components/header-section/cantReconnect";
import PackagesSection from "@/components/packages-section";

const index = () => {
  return (
    <DefaultLayout>
      <OfferBanner />
      <CantReconnect />
      <PackagesSection />
    </DefaultLayout>
  );
};

export default index;
