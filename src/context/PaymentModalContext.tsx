import React, { createContext, useContext, useState } from "react";

export interface PackageProps {
  title: string;
  price: string;
  features?: string[];
  ribbon?: {
    text?: string;
    bgColor: string;
    textColor: string;
  };
}

interface PaymentContextType {
  selectedPackage: PackageProps | null;
  openPaymentModal: (pkg: PackageProps) => void;
  closePaymentModal: () => void;
  isPaymentModalOpen: boolean;
}

// Create the PaymentContext with default values
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Custom hook to use the PaymentContext
export const usePayment = () => {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error("usePayment must be used inside PaymentProvider");
  }

  return context;
};

// PaymentProvider component to wrap the application and provide payment context
export const PaymentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPackage, setSelectedPackage] = useState<PackageProps | null>(
    null,
  );

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const openPaymentModal = (pkg: PackageProps) => {
    setSelectedPackage(pkg);
    setIsPaymentModalOpen(true);
    // console.log("Selected package:", pkg);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <PaymentContext.Provider
      value={{
        selectedPackage,
        openPaymentModal,
        closePaymentModal,
        isPaymentModalOpen,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
