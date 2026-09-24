import React, { useState } from "react";
import { MainWrapper } from "./layoutStyles";
import Footer from "../footer";
import HeaderSection from "../header-section";
import HowItWorksModal from "../modals/howItWorksModal";
import BuyPackageModal from "../modals/buyPackageModal";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  // How It Works Modal handlers
  const handleOpenHowItWorks = () => {
    setIsHowItWorksOpen(true);
  };

  const handleCloseHowItWorks = () => {
    setIsHowItWorksOpen(false);
  };

  return (
    <MainWrapper>
      <HeaderSection onHowItWorks={handleOpenHowItWorks} />
      <main>{children}</main>
      <Footer />

      {/* Modal lives in the main layout */}
      <HowItWorksModal
        open={isHowItWorksOpen}
        onClose={handleCloseHowItWorks}
        onOpen={handleOpenHowItWorks}
      />

      {/* Buy Package Modal, props provided by usePayment context */}
      <BuyPackageModal />
    </MainWrapper>
  );
};

export default DefaultLayout;
