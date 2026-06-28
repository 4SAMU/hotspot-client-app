import InputComponent from "../input-components";
import { ConnectButton, CredentialsSection } from "./already-styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const AlreadyHaveCredentialsSection = () => {
  return (
    <CredentialsSection>
      <header>Already Have Credentials?</header>
      <InputComponent icon={<PermIdentityIcon />} placeholder="username" />
      <InputComponent icon={<VisibilityIcon />} placeholder="password" />
      <ConnectButton>
        Connect <KeyboardDoubleArrowRightIcon />
      </ConnectButton>
      <p>Use the username & password received after payment through sms</p>
    </CredentialsSection>
  );
};

export default AlreadyHaveCredentialsSection;
