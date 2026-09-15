import React, { useState } from "react";
import { MainWrapper } from "./layoutStyles";
import Footer from "../footer";
import HeaderSection from "../header-section";
import HowItWorksModal from "../modals/howItWorksModal";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

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
    </MainWrapper>
  );
};

export default DefaultLayout;
