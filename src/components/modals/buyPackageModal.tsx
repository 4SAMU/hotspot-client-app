import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  FilledButton,
  ModalDragHandle,
  ModalWrapper,
  PaymentInput,
  PaymentModeRadioButton,
  RowDisplay,
} from "@/styles/common-styles";

import { CloseButton, ModalHeader, ModalTitle } from "./howItWorksModal";

interface BuyPackageModalProps {
  onClose: () => void;
  onOpen: () => void;
  open: boolean;
}

const BuyPackageModal: React.FC<BuyPackageModalProps> = ({
  onClose,
  onOpen,
  open,
}) => {
  const [paymentMode, setPaymentMode] = useState<"mpesa" | "airtel" | null>(
    null,
  );
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      disableSwipeToOpen
      disableScrollLock
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
          <CloseButton
            onClick={onClose}
            aria-label="Close buy package"
            title="Close"
          >
            <CloseIcon />
          </CloseButton>

          <ModalTitle>Pay With:</ModalTitle>
        </ModalHeader>

        <RowDisplay sx={{ gap: "10px", marginBottom: "20px" }}>
          <PaymentModeRadioButton selected={paymentMode === "mpesa"}>
            <input
              type="radio"
              name="paymentMode"
              value="mpesa"
              checked={paymentMode === "mpesa"}
              onChange={() => setPaymentMode("mpesa")}
              required
            />

            <span className="radio" />

            <img src="/assets/mpesa_logo.svg" alt="M-Pesa" height={32} />
          </PaymentModeRadioButton>

          <PaymentModeRadioButton selected={paymentMode === "airtel"}>
            <input
              type="radio"
              name="paymentMode"
              value="airtel"
              checked={paymentMode === "airtel"}
              onChange={() => setPaymentMode("airtel")}
              required
            />

            <span className="radio" />

            <img src="/assets/airtel_ke.svg" alt="Airtel Money" height={32} />
          </PaymentModeRadioButton>
        </RowDisplay>
        <p>
          {paymentMode === "mpesa"
            ? "Enter your M-Pesa number below:"
            : paymentMode === "airtel"
              ? "Enter your Airtel Money number below:"
              : "Please select a mode of payment above to proceed."}
        </p>
        <PaymentInput sx={{ marginBottom: "10px" }}>
          <div className="country_code">
            <img
              src="https://flagcdn.com/16x12/ke.png"
              srcSet="https://flagcdn.com/32x24/ke.png 2x,
    https://flagcdn.com/48x36/ke.png 3x"
              width="16"
              height="12"
              alt="Kenya"
            />
            +254
          </div>
          <input
            type="text"
            placeholder="7XXXXXXXX"
            maxLength={9}
            pattern="[0-9]*"
            required
          />
        </PaymentInput>

        <p>
          <strong>NOTE:</strong> Please Ensure number is correct.
        </p>
        <FilledButton
          sx={{
            marginTop: "10px",
            width: "100%",
            height: "38px",
            borderRadius: "8px",
          }}
          disabled={!paymentMode}
        >
          Pay Kes 10
        </FilledButton>

        {/*status texts here*/}
      </ModalWrapper>
    </SwipeableDrawer>
  );
};

export default BuyPackageModal;
