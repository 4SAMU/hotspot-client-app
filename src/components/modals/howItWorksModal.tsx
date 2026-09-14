/**
 * A swipeable bottom sheet modal for displaying
 * the "How It Works" information.
 */

import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, styled } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

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
      disableSwipeToOpen={true}
      disableBackdropTransition={false}
      ModalProps={{
        keepMounted: true,
      }}
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
        <DragHandle />

        {/* Header */}
        <ModalHeader>
          <ModalTitle>
            How it <span>works</span>
          </ModalTitle>

          <CloseButton onClick={onClose} aria-label="Close how it works">
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
                Choose how long you need internet — 2 hr, 6 hrs, a full day, or
                longer.
              </>
            }
          />

          <Step
            number="2"
            title="Tap Buy & enter your M-Pesa number"
            description={
              <>
                Type your Safaricom number. Make sure M-Pesa has enough balance.
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

          <SupportButton href="tel:0754811158">
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
/* Modal                              */
/* ---------------------------------- */

const ModalWrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: "480px",
  maxHeight: "92vh",
  overflowY: "auto",
  boxSizing: "border-box",

  margin: "0 auto",

  backgroundColor: "#161b21",
  color: "#e7e9ec",

  border: "1px solid #293139",
  borderBottom: "none",
  borderRadius: "22px 22px 0 0",

  padding: "24px 22px 28px",

  boxShadow: "0 -10px 40px rgba(0, 0, 0, 0.25)",
}));

/* ---------------------------------- */
/* Drag handle                        */
/* ---------------------------------- */

const DragHandle = styled(Box)(() => ({
  width: "36px",
  height: "4px",
  borderRadius: "10px",
  backgroundColor: "#343c45",
  margin: "0 auto 26px",
}));

/* ---------------------------------- */
/* Header                             */
/* ---------------------------------- */

const ModalHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  marginBottom: "18px",
}));

const ModalTitle = styled("h2")(() => ({
  margin: 0,
  fontSize: "17px",
  fontWeight: 700,
  letterSpacing: "-0.3px",
  color: "#e9edf1",

  "& span": {
    color: "#00d084",
  },
}));

const CloseButton = styled("button")(() => ({
  width: "44px",
  height: "44px",
  minWidth: "44px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "50%",
  border: "1px solid #07583f",
  backgroundColor: "#20282f",
  color: "#e3e7ea",

  cursor: "pointer",

  "& svg": {
    fontSize: "19px",
  },

  "&:hover": {
    backgroundColor: "#28333b",
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

const StepWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  position: "relative",
  paddingBottom: "20px",

  "&:last-child": {
    paddingBottom: "8px",
  },

  // Vertical connector line
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    top: "30px",
    left: "14px",
    width: "1px",
    height: "calc(100% - 30px)",
    backgroundColor: "#07583f",
  },
}));

const StepNumber = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,

  width: "28px",
  height: "28px",
  minWidth: "28px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "50%",
  border: "1px solid #006b4a",
  backgroundColor: "#142b29",

  color: "#00d084",
  fontSize: "12px",
  fontWeight: 600,
}));

const StepContent = styled(Box)(() => ({
  flex: 1,
  minWidth: 0,
  paddingTop: "1px",
}));

const StepTitle = styled("h3")(() => ({
  margin: "0 0 3px",
  fontSize: "14px",
  lineHeight: 1.5,
  fontWeight: 700,
  color: "#e5e9ed",
}));

const StepDescription = styled("p")(() => ({
  margin: 0,
  fontSize: "13px",
  lineHeight: 1.5,
  fontWeight: 400,
  color: "#d2d7dc",

  "& strong": {
    color: "#e5e9ed",
    fontWeight: 700,
  },
}));

/* ---------------------------------- */
/* Support Card                       */
/* ---------------------------------- */

const SupportCard = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",

  marginTop: "22px",
  padding: "14px 14px",

  borderRadius: "12px",
  border: "1px solid #12664e",
  backgroundColor: "#122b29",
}));

const SupportInfo = styled(Box)(() => ({
  minWidth: 0,
}));

const SupportTitle = styled("h3")(() => ({
  margin: "0 0 5px",
  fontSize: "14px",
  fontWeight: 700,
  color: "#e4e9eb",
}));

const SupportSubtitle = styled("p")(() => ({
  margin: 0,
  fontSize: "11px",
  color: "#d0d9d8",
}));

const SupportButton = styled("a")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",

  flexShrink: 0,

  padding: "9px 12px",
  borderRadius: "8px",
  border: "1px solid #12664e",

  backgroundColor: "#122b29",
  color: "#00d084",

  fontSize: "12px",
  fontWeight: 700,
  textDecoration: "none",

  "& svg": {
    fontSize: "16px",
  },

  "&:hover": {
    backgroundColor: "#1a3b35",
  },
}));
