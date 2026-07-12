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

export interface Package {
  title: string;
  price: string;
  features?: string[];
  ribbon?: {
    text?: string;
    bgColor: string;
    textColor: string;
  };
}

const packages: Package[] = [
  {
    title: "14 Hours",
    price: "KES 30",
    features: ["Enjoy 14hrs of unlimited access"],
    ribbon: { text: "New Offer", bgColor: "#ece90f", textColor: "#000" },
  },
  {
    title: "24 Hours",
    price: "KES 40",
    features: [
      "Enjoy 24hrs of unlimited access",
      "Connect up to 2 devices simultaneously",
    ],
    ribbon: { text: "🔥 Hot Deal", bgColor: "#fa2424", textColor: "#fff" },
  },
  {
    title: "2 Hours",
    price: "KES 10",
    features: ["Enjoy 2hrs of unlimited access with a 30mins bonus"],
  },
  {
    title: "10 Hours",
    price: "KES 25",
    features: ["Enjoy 10hrs of unlimited access"],
  },
  {
    title: "8 Hours",
    price: "KES 20",
    features: ["Enjoy 8hrs of unlimited access"],
    ribbon: { text: "Popular", bgColor: "#38ee0a", textColor: "#000" },
  },
];

// --- Shared sub-pieces, reused by both grid and list card layouts ---

const PackageFeatures = ({ pkg }: { pkg: Package }) => (
  <>
    <h3>{pkg.title}</h3>
    <ul>
      {pkg.features?.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </>
);

const PackagePriceAction = ({ pkg }: { pkg: Package }) => (
  <>
    <span className="price">{pkg.price}</span>
    <FilledButton className="pkg_button">Buy</FilledButton>
  </>
);

const GridPackageCard = ({ pkg }: { pkg: Package }) => (
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
    <PackagePriceAction pkg={pkg} />
  </PackageCard>
);

const ListPackageCard = ({ pkg }: { pkg: Package }) => (
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
      <PackagePriceAction pkg={pkg} />
    </ColumnDisplay>
  </PkgCardInListView>
);

const PackagesSection = () => {
  const { theme } = useTheme();
  const [view, setView] = useState<"grid" | "list">("grid");

  const scrollToExploreMore = () => {
    const element = document.getElementById("explore-more-deals");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <PackagesSectionContainer>
      <Box
        className="top-section"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <header>Our Wifi Deals 🔥</header>

        <ToggleContainer>
          <ToggleIndicator
            sx={{
              transform: view === "grid" ? "translateX(0)" : "translateX(100%)",
            }}
          />
          <ToggleOption
            active={view === "grid"}
            onClick={() => setView("grid")}
          >
            <ViewGridIcon />
          </ToggleOption>
          <ToggleOption
            active={view === "list"}
            onClick={() => setView("list")}
          >
            <ViewListIcon />
          </ToggleOption>
        </ToggleContainer>
      </Box>

      <PackagesCardContainer className={view}>
        {packages.map((pkg) => (
          <GridPackageCard key={pkg.title} pkg={pkg} />
        ))}
      </PackagesCardContainer>

      <PackagesCardContainerInListView className={view}>
        {packages.map((pkg) => (
          <ListPackageCard key={pkg.title} pkg={pkg} />
        ))}
      </PackagesCardContainerInListView>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
