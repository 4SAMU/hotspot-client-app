import React from "react";
import { AccountContainer, AccountModalProps } from "./createAccount";
import { Modal } from "@mui/material";
import { FilledButton, TextButton } from "@/styles/common-styles";

interface LoginToAccountProps extends AccountModalProps {
  handleCreateAccountClick: () => void;
}

const LoginToAccount: React.FC<LoginToAccountProps> = ({
  open,
  onClose,
  handleCreateAccountClick,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-account-title"
      aria-describedby="create-account-description"
    >
      <AccountContainer>
        <h2 id="create-account-title">Login To Your Account</h2>
        <p
          id="create-account-description"
          style={{
            fontStyle: "italic",
          }}
        >
          Don't have an account?
          <TextButton
            className="login"
            onClick={() => {
              handleCreateAccountClick();
              onClose();
            }}
          >
            Create Account
          </TextButton>
        </p>
        <br />
        <label htmlFor="Phone Number">Phone Number</label>
        <input type="text" id="Phone Number" name="Phone Number" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <FilledButton
          sx={{ borderRadius: "8px", height: "40px", marginTop: "20px" }}
          type="submit"
        >
          Login
        </FilledButton>
      </AccountContainer>
    </Modal>
  );
};

export default LoginToAccount;
