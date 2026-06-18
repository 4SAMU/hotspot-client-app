import { CantReconnectContainer } from "./headerStyles";
import Link from "next/link";

const CantReconnect = () => {
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
            254 712 345 678
          </Link>
        </li>
      </ul>
    </CantReconnectContainer>
  );
};

export default CantReconnect;
