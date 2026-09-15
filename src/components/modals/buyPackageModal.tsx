import React from "react";
import { SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalDragHandle, ModalWrapper } from "@/styles/common-styles";
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
          <ModalTitle>Pay With:</ModalTitle>

          <CloseButton
            onClick={onClose}
            aria-label="Close buy package"
            title="Close"
          >
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
      </ModalWrapper>
    </SwipeableDrawer>
  );
};

export default BuyPackageModal;
