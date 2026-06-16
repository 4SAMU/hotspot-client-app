import { FooterSection } from "./footerStyles";
import { useRouterIdentity } from "@/hooks/useRouterIdentity";

const Footer = () => {
  const { routerIdentity } = useRouterIdentity();
  return (
    <FooterSection>
      <div className="left-items">
        <p
          className="footer-router-name"
          dangerouslySetInnerHTML={{
            __html: routerIdentity?.name ?? "Luxenn<span>HOTSPOT</span>",
          }}
        />
        <p className="powered-by">
          Powered by <strong>Luxenn Tech</strong> ©{new Date().getFullYear()}
        </p>
      </div>
      <div className="right-items">
        <img src="/icons/phone.png" alt="Support Icon" width={20} height={20} />
        &nbsp;
        <p>{routerIdentity?.supportNumber}</p>
      </div>
    </FooterSection>
  );
};

export default Footer;
