/**
 * A swipeable bottom sheet modal for displaying
 * the "How It Works" information.
 */

import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, styled } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { ModalDragHandle, ModalWrapper } from "@/styles/common-styles";

interface HowItWorksModalProps {
  onClose: () => void;
  onOpen: () => void;
  open: boolean;
}

const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  onClose,
  onOpen,
  open,
}) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      disableSwipeToOpen
      disableScrollLock // Prevent parent body scroll lock when modal is open
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
            borderRadius: "22px 22px 0 0",
          },
        },
      }}
    >
      <ModalWrapper>
        {/* Drag handle */}
        <ModalDragHandle />

        {/* Header */}
        <ModalHeader>
          <ModalTitle>
            How it <span>works</span>
          </ModalTitle>

          <CloseButton
            onClick={onClose}
            aria-label="Close how it works"
            title="Close"
          >
            <CloseIcon />
          </CloseButton>
        </ModalHeader>

        {/* Steps */}
        <StepsContainer>
          <Step
            number="1"
            title="Pick a package"
            description={
              <>
                Choose how long you need internet — 2 hr, 8 hrs, a full day, or
                longer.
              </>
            }
          />

          <Step
            number="2"
            title="Tap Buy & enter your M-Pesa number"
            description={
              <>
                Type your <strong>Safaricom</strong> or <strong>Airtel</strong>{" "}
                number. Make sure M-Pesa/Airtel Money has enough balance.
              </>
            }
          />

          <Step
            number="3"
            title="Approve the STK Push"
            description={
              <>
                A pop-up appears on your phone from M-Pesa. Enter your PIN to
                confirm.
              </>
            }
          />

          <Step
            number="4"
            title="You're online!"
            description={
              <>
                Within seconds of payment you're automatically connected. No
                extra steps needed.
              </>
            }
          />

          <Step
            number="5"
            title="Got an SMS with credentials?"
            description={
              <>
                Scroll down to <strong>Already have Credentials</strong>, enter
                them, or open the SMS link directly for auto-connect.
              </>
            }
          />

          <Step
            number="6"
            title="Having trouble?"
            description={
              <>
                Paid but not connected? Call support immediately and we'll sort
                it fast.
              </>
            }
          />
        </StepsContainer>

        {/* Support */}
        <SupportCard>
          <SupportInfo>
            <SupportTitle>Luxenn Support</SupportTitle>

            <SupportSubtitle>Available daily · Fast response</SupportSubtitle>
          </SupportInfo>

          <SupportButton
            href="tel:0754811158"
            aria-label="Call support"
            title="Call support"
          >
            <PhoneOutlinedIcon />
            0754811158
          </SupportButton>
        </SupportCard>
      </ModalWrapper>
    </SwipeableDrawer>
  );
};

export default HowItWorksModal;

/* ---------------------------------- */
/* Header                             */
/* ---------------------------------- */

export const ModalHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "15px",
}));

export const ModalTitle = styled("h2")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 700,
  letterSpacing: "-0.3px",
  color: theme.colors.textColor,

  "& span": {
    color: theme.colors.primary,
  },
}));

export const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  width: "40px",
  height: "40px",
  minWidth: "40px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "50%",
  border: `1px solid ${theme.colors.textColor}50`,
  backgroundColor: theme.colors.accent + "10",
  color: theme.colors.primary,

  cursor: "pointer",

  "& svg": {
    fontSize: "19px",
  },

  "&:hover": {
    backgroundColor: theme.colors.primary + "20",
  },
}));

/* ---------------------------------- */
/* Steps                              */
/* ---------------------------------- */

const StepsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0px",
}));

interface StepProps {
  number: string;
  title: string;
  description: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <StepWrapper>
      <StepNumber>{number}</StepNumber>

      <StepContent>
        <StepTitle>{title}</StepTitle>
        <StepDescription>{description}</StepDescription>
      </StepContent>
    </StepWrapper>
  );
};

const StepWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  position: "relative",
  paddingBottom: "10px",

  "&:last-child": {
    paddingBottom: "5px",
  },

  // Vertical connector line
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    top: "30px",
    left: "12px",
    width: "1px",
    height: "calc(100% - 30px)",
    backgroundColor: theme.colors.primary + "50",
  },
}));

const StepNumber = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,

  width: "24px",
  height: "24px",
  minWidth: "24px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "50%",
  border: `1px solid ${theme.colors.primary}`,

  color: theme.colors.primary,
  fontSize: "12px",
  fontWeight: 600,
}));

const StepContent = styled(Box)(() => ({
  flex: 1,
  minWidth: 0,
}));

const StepTitle = styled("h3")(({ theme }) => ({
  margin: "0 0 3px",
  fontSize: "13px",
  fontWeight: 700,
  color: theme.colors.textColor,
  fontFamily: '"JetBrains Mono", Monospace',
}));

const StepDescription = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: "12px",
  lineHeight: "1.4",
  fontFamily: "Dm Sans, sans-serif",
  fontWeight: 400,
  color: theme.colors.textColor,

  strong: {
    color: theme.colors.primary,
    fontWeight: 800,
  },
}));

/* ---------------------------------- */
/* Support Card                       */
/* ---------------------------------- */

const SupportCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",

  marginTop: "22px",
  padding: "14px 14px",

  borderRadius: "12px",
  border: `1px solid ${theme.colors.primary}50`,
  backgroundColor: theme.colors.primary + "20",
}));

const SupportInfo = styled(Box)(() => ({
  minWidth: 0,
}));

const SupportTitle = styled("h3")(({ theme }) => ({
  margin: "0 0 5px",
  fontSize: "13px",
  fontWeight: 700,
  color: theme.colors.textColor,
  fontFamily: '"JetBrains Mono", Monospace',
}));

const SupportSubtitle = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: "11px",
  color: theme.colors.textColor,
  fontFamily: '"JetBrains Mono", Monospace',
}));

const SupportButton = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",

  flexShrink: 0,

  padding: "9px 12px",
  borderRadius: "8px",
  border: `1px solid ${theme.colors.primary}`,

  backgroundColor: theme.colors.primary + "20",
  color: theme.colors.primary,

  fontSize: "12px",
  fontWeight: 700,
  textDecoration: "none",

  "& svg": {
    fontSize: "16px",
  },

  "&:hover": {
    backgroundColor: theme.colors.primary + "30",
  },
}));
