import React from "react";
import { MainWrapper } from "./layoutStyles";
import Footer from "../footer";
import HeaderSection from "../header-section";
// import NavigatorSection from "../navigator";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <MainWrapper>
      <HeaderSection />
      <main>{children}</main>
      {/* <NavigatorSection /> */}
      <Footer />
    </MainWrapper>
  );
};

export default DefaultLayout;
