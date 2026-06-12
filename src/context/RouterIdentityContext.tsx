import { createContext, ReactNode, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { useTheme } from "@/hooks/useTheme";
import { routerIdentities } from "@/dummy-data/router-identities";
import { RouterIdentity } from "@/types/routerIdentity";

interface RouterIdentityContextType {
  routerIdentity: RouterIdentity | null;

  loading: boolean;
}

export const RouterIdentityContext = createContext<RouterIdentityContextType>({
  routerIdentity: null,

  loading: true,
});

interface RouterIdentityProviderProps {
  children: ReactNode;
}

export const RouterIdentityProvider = ({
  children,
}: RouterIdentityProviderProps) => {
  const router = useRouter();

  const { setTheme } = useTheme();

  const [routerIdentity, setRouterIdentity] = useState<RouterIdentity | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const identity = router.query.router as string;

    if (!identity) {
      setLoading(false);

      return;
    }

    const routerConfig = routerIdentities[identity];

    if (routerConfig) {
      setRouterIdentity(routerConfig);

      setTheme(routerConfig.theme);
    }

    setLoading(false);
  }, [router.isReady, router.query.router, setTheme]);

  return (
    <RouterIdentityContext.Provider
      value={{
        routerIdentity,

        loading,
      }}
    >
      {children}
    </RouterIdentityContext.Provider>
  );
};
