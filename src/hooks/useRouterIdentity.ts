import { useContext } from "react";

import { RouterIdentityContext } from "@/context/RouterIdentityContext";

export const useRouterIdentity = () => {
  return useContext(RouterIdentityContext);
};
