import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import { HeaderTitle } from "./headerStyles";

const HeaderSection = () => {
  const { routerIdentity, loading } = useRouterIdentity();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <HeaderTitle>
      <h1>
        {routerIdentity ? (
          <>
            {routerIdentity.name} <span>WIFI</span>
          </>
        ) : (
          <>
            Luxenn<span>HOTSPOT</span>
          </>
        )}
      </h1>

      <div className="tagline">Fast · Instant · Reliable</div>
    </HeaderTitle>
  );
};

export default HeaderSection;
