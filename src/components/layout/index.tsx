import React from "react";
import { MainWrapper } from "./layout-styles";
import Footer from "../footer";
import HeaderSection from "../header-section";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <MainWrapper>
      <HeaderSection />
      <main>{children}</main>
      <Footer />
    </MainWrapper>
  );
};

export default DefaultLayout;
