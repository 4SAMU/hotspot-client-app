import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import { HeaderContainer, HeaderTitle, TagsContainer } from "./headerStyles";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { OutlinedButton } from "@/styles/common-styles";

const HeaderSection = () => {
  const { routerIdentity, loading } = useRouterIdentity();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>
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
        <OutlinedButton>
          <TipsAndUpdatesOutlinedIcon />
          How it Works
        </OutlinedButton>
        <OutlinedButton>
          <PersonIcon />
          My Account
        </OutlinedButton>
      </TagsContainer>
    </>
  );
};

export default HeaderSection;
