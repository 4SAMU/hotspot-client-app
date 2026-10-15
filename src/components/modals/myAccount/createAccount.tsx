import { useTheme } from "@/hooks/useTheme";
import { FilledButton, TextButton } from "@/styles/common-styles";
import { Modal, styled } from "@mui/material";
import React from "react";

export interface AccountModalProps {
  open: boolean;
  onClose: () => void;
}

interface CreateAccountModalProps extends AccountModalProps {
  handleLoginClick: () => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({
  open,
  onClose,
  handleLoginClick,
}) => {
  const { theme } = useTheme();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-account-title"
      aria-describedby="create-account-description"
    >
      <AccountContainer>
        <h2 id="create-account-title">Create An Account</h2>
        <p id="create-account-description">
          Already have an account?{" "}
          <TextButton
            className="login"
            onClick={() => {
              handleLoginClick();
              onClose();
            }}
          >
            Login
          </TextButton>
        </p>
        <br />
        <label htmlFor="Phone Number">Phone Number</label>
        <input type="text" id="Phone Number" name="Phone Number" required />

        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" />

        {/* Add your registration form here */}
        <FilledButton
          sx={{ mt: "20px", borderRadius: "8px", height: "40px" }}
          type="submit"
        >
          Create Account
        </FilledButton>

        <p
          style={{
            marginTop: "10px",
            fontSize: "12px",
            color: ` ${theme.colors.textColor}99`,
          }}
        >
          <strong>NOTE</strong>: Your number must have at least one completed
          payment to register.
        </p>
      </AccountContainer>
    </Modal>
  );
};

export default CreateAccountModal;

export const AccountContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: theme.colors.textColor,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(400px, calc(100% - 40px))",
  boxSizing: "border-box",
  padding: "24px",
  borderRadius: "16px",
  backgroundColor: theme.colors.background,
  outline: "none",
  border: `1px solid ${theme.colors.primary}20`,
  boxShadow: `0 4px 16px ${theme.colors.primary}20`,

  h2: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },

  p: {
    fontSize: "13px",
    fontStyle: "italic",
  },
  ".login": {
    padding: "0 10px 0 0 !important",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    fontStyle: "italic",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    margin: "10px 0 5px 0",
    color: `${theme.colors.textColor}99`,
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: `1px solid ${theme.colors.textColor}99`,
    backgroundColor: "transparent",
    color: theme.colors.textColor,
    fontSize: "14px",
  },
}));
