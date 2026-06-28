import { FooterSection, FooterTextContents } from "./footerStyles";
import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";

const Footer = () => {
  const { routerIdentity } = useRouterIdentity();
  return (
    <FooterSection>
      <FooterTextContents>
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
          <PermPhoneMsgOutlinedIcon />
          &nbsp;
          <p>{routerIdentity?.supportNumber}</p>
        </div>
      </FooterTextContents>
    </FooterSection>
  );
};

export default Footer;
