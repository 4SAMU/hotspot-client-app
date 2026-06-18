import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import { HeaderSectionContainer, HeaderTitle } from "./headerStyles";
import OfferBanner from "./offerBanner";
import CantReconnect from "./cantReconnect";

const HeaderSection = () => {
  const { routerIdentity, loading } = useRouterIdentity();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <HeaderSectionContainer>
      <HeaderTitle>
        <h1
          dangerouslySetInnerHTML={{
            __html: routerIdentity?.name ?? "Luxenn <span>HOTSPOT</span>",
          }}
        />

        <div className="tagline">Fast · Instant · Reliable</div>
      </HeaderTitle>
      <OfferBanner />
      <CantReconnect />
    </HeaderSectionContainer>
  );
};

export default HeaderSection;
