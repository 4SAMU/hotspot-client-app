import { useState } from "react";
import { Box } from "@mui/material";

import {
  PackageCard,
  PackagesCardContainer,
  PackagesCardContainerInListView,
  PackagesSectionContainer,
  PkgCardInListView,
  PkgRibbon,
  PkgRibbonInListView,
  ToggleContainer,
  ToggleIndicator,
  ToggleOption,
} from "./packagesStyles";

import {
  ColumnDisplay,
  FilledButton,
  OutlinedButton,
} from "@/styles/common-styles";
import { useTheme } from "@/hooks/useTheme";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewGridIcon from "@mui/icons-material/Apps";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { PackageProps, usePayment } from "@/context/PaymentModalContext";

const packages: PackageProps[] = [
  {
    title: "14 Hours",
    price: 30,
    features: ["Enjoy 14hrs of unlimited access"],
    ribbon: {
      text: "New Offer",
      bgColor: "#ece90f",
      textColor: "#000",
    },
  },
  {
    title: "24 Hours",
    price: 40,
    features: [
      "Enjoy 24hrs of unlimited access",
      "Connect up to 2 devices simultaneously",
    ],
    ribbon: {
      text: "🔥 Hot Deal",
      bgColor: "#fa2424",
      textColor: "#fff",
    },
  },
  {
    title: "2 Hours",
    price: 10,
    features: ["Enjoy 2hrs of unlimited access with a 30mins bonus"],
  },
  {
    title: "10 Hours",
    price: 25,
    features: ["Enjoy 10hrs of unlimited access"],
  },
  {
    title: "8 Hours",
    price: 20,
    features: ["Enjoy 8hrs of unlimited access"],
    ribbon: {
      text: "Popular",
      bgColor: "#38ee0a",
      textColor: "#000",
    },
  },
];

// -----------------------------------------------------------------------------
// Shared card pieces
// -----------------------------------------------------------------------------

interface PackageFeaturesProps {
  pkg: PackageProps;
}

const PackageFeatures = ({ pkg }: PackageFeaturesProps) => (
  <>
    <h3>{pkg.title}</h3>

    {pkg.features && (
      <ul>
        {pkg.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    )}
  </>
);

interface PackagePriceActionProps {
  pkg: PackageProps;
  onBuy?: () => void;
}

const PackagePriceAction = ({ pkg, onBuy }: PackagePriceActionProps) => (
  <>
    <span className="price">Ksh.{pkg.price}</span>

    <FilledButton className="pkg_button" onClick={onBuy}>
      Buy
    </FilledButton>
  </>
);

// -----------------------------------------------------------------------------
// Grid card
// -----------------------------------------------------------------------------

interface GridPackageCardProps {
  pkg: PackageProps;
  onBuy?: (pkg: PackageProps) => void;
}

const GridPackageCard = ({ pkg, onBuy }: GridPackageCardProps) => (
  <PackageCard hasRibbon={!!pkg.ribbon} ribbonBgColor={pkg.ribbon?.bgColor}>
    {pkg.ribbon && (
      <PkgRibbon
        ribbonBgColor={pkg.ribbon.bgColor}
        ribbonTextColor={pkg.ribbon.textColor}
      >
        {pkg.ribbon.text}
      </PkgRibbon>
    )}

    <PackageFeatures pkg={pkg} />

    <PackagePriceAction pkg={pkg} onBuy={() => onBuy?.(pkg)} />
  </PackageCard>
);

// -----------------------------------------------------------------------------
// List card
// -----------------------------------------------------------------------------

interface ListPackageCardProps {
  pkg: PackageProps;
  onBuy?: (pkg: PackageProps) => void;
}

const ListPackageCard = ({ pkg, onBuy }: ListPackageCardProps) => (
  <PkgCardInListView>
    <PkgRibbonInListView
      ribbonBgColor={pkg.ribbon?.bgColor}
      hasRibbon={!!pkg.ribbon}
      ribbonTextColor={pkg.ribbon?.textColor}
    >
      {pkg.ribbon?.text || pkg.title}
    </PkgRibbonInListView>

    <ColumnDisplay>
      <PackageFeatures pkg={pkg} />
    </ColumnDisplay>

    <ColumnDisplay>
      <PackagePriceAction pkg={pkg} onBuy={() => onBuy?.(pkg)} />
    </ColumnDisplay>
  </PkgCardInListView>
);

// -----------------------------------------------------------------------------
// Main section
// -----------------------------------------------------------------------------

const PackagesSection = () => {
  const { theme } = useTheme();
  const { openPaymentModal } = usePayment();

  const [view, setView] = useState<"grid" | "list">("grid");

  const scrollToExploreMore = () => {
    const element = document.getElementById("explore-more-deals");

    if (!element) return;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 90,
      behavior: "smooth",
    });
  };

  return (
    <PackagesSectionContainer>
      {/* Header */}
      <Box
        className="top-section"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Our Wifi Deals 🔥</h4>

        <ToggleContainer>
          <ToggleIndicator
            sx={{
              transform: view === "grid" ? "translateX(0)" : "translateX(100%)",
            }}
          />

          <ToggleOption
            $active={view === "grid"}
            onClick={() => setView("grid")}
          >
            <ViewGridIcon />
          </ToggleOption>

          <ToggleOption
            $active={view === "list"}
            onClick={() => setView("list")}
          >
            <ViewListIcon />
          </ToggleOption>
        </ToggleContainer>
      </Box>

      {/* Grid */}
      <PackagesCardContainer className={view}>
        {packages.map((pkg) => (
          <GridPackageCard
            key={pkg.title}
            pkg={pkg}
            onBuy={() => openPaymentModal(pkg)}
          />
        ))}
      </PackagesCardContainer>

      {/* List */}
      <PackagesCardContainerInListView className={view}>
        {packages.map((pkg) => (
          <ListPackageCard
            key={pkg.title}
            pkg={pkg}
            onBuy={() => openPaymentModal(pkg)}
          />
        ))}
      </PackagesCardContainerInListView>

      {/* Explore more */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <OutlinedButton
          onClick={scrollToExploreMore}
          sx={{
            border: `1px solid ${theme.colors.primary}`,
            color: theme.colors.primary,
            height: 36,
          }}
        >
          Explore More
          <KeyboardArrowRightIcon />
        </OutlinedButton>
      </Box>
    </PackagesSectionContainer>
  );
};

export default PackagesSection;
