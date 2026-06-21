import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import { HeaderTitle } from "./headerStyles";

const HeaderSection = () => {
  const { routerIdentity, loading } = useRouterIdentity();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <HeaderTitle>
      <h1
        dangerouslySetInnerHTML={{
          __html: routerIdentity?.name ?? "Luxenn <span>HOTSPOT</span>",
        }}
      />

      <div className="tagline">Fast · Instant · Reliable</div>
    </HeaderTitle>
  );
};

export default HeaderSection;
