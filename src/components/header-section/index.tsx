import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import {
  HeaderContainer,
  HeaderTitle,
  TagsButton,
  TagsContainer,
} from "./headerStyles";
import { Box } from "@mui/material";

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
      </HeaderContainer>
      <TagsContainer>
        <TagsButton>How it Works</TagsButton>
        <TagsButton>My Account</TagsButton>
      </TagsContainer>
    </>
  );
};

export default HeaderSection;
