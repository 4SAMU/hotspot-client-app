import { useRouterIdentity } from "@/hooks/useRouterIdentity";
import { CantReconnectContainer } from "./headerStyles";
import Link from "next/link";

const CantReconnect = () => {
  const { routerIdentity, loading } = useRouterIdentity();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <CantReconnectContainer>
      <ul>
        <li>
          Can't reconnect? Visit{" "}
          <strong>
            <Link className="my-account-link" href="/support">
              My Account
            </Link>
          </strong>{" "}
          to sign up or log in and reconnect your active package.
        </li>
        <li>
          Need help? Call support:{" "}
          <Link className="support-link" href="tel:+254712345678">
            {routerIdentity?.supportNumber}
          </Link>
        </li>
      </ul>
    </CantReconnectContainer>
  );
};

export default CantReconnect;
