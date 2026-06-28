import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import {
  HeaderContainer,
  HeaderTitle,
  TagsButton,
  TagsContainer,
} from "./headerStyles";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Icon } from "@mui/material";

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
        <TagsButton>
          <TipsAndUpdatesOutlinedIcon />
          How it Works
        </TagsButton>
        <TagsButton>
          <PersonIcon />
          My Account
        </TagsButton>
      </TagsContainer>
    </>
  );
};

export default HeaderSection;
