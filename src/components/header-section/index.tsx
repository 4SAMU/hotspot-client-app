import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import { HeaderContainer, HeaderTitle, TagsContainer } from "./headerStyles";

import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { OutlinedButton } from "@/styles/common-styles";
import { useRouter } from "next/router";

interface HeaderSectionProps {
  onHowItWorks: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ onHowItWorks }) => {
  const { routerIdentity, loading } = useRouterIdentity();
  const router = useRouter();

  if (loading) {
    return <>Loading...</>;
  }

  const isHomePage = router.pathname === "/";

  return (
    <>
      <HeaderContainer>
        <HeaderTitle
          onClick={() => router.push(`/?router=${routerIdentity?.identity}`)}
        >
          <h1
            dangerouslySetInnerHTML={{
              __html: routerIdentity?.name ?? "Luxenn <span>HOTSPOT</span>",
            }}
          />

          <div className="tagline">Fast · Instant · Reliable</div>
        </HeaderTitle>

        <div className="my-account-icon">
          <PersonIcon />
          <span className="icon-badge" />
        </div>
      </HeaderContainer>

      <TagsContainer>
        {isHomePage ? (
          <>
            <OutlinedButton onClick={onHowItWorks}>
              <TipsAndUpdatesOutlinedIcon />
              How it Works
            </OutlinedButton>

            <OutlinedButton
              className={router.pathname === "/my-account" ? "active" : ""}
              onClick={() => {
                router.push(`/my-account/?router=${routerIdentity?.identity}`);
              }}
            >
              <PersonIcon />
              My Account
            </OutlinedButton>
          </>
        ) : (
          <OutlinedButton
            onClick={() => router.push(`/?router=${routerIdentity?.identity}`)}
          >
            <ArrowBackIcon />
            Back
          </OutlinedButton>
        )}
      </TagsContainer>
    </>
  );
};

export default HeaderSection;
