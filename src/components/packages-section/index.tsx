import { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

import {
  PackageCard,
  PackagesCardContainer,
  PackagesSectionContainer,
  PkgRibbon,
} from "./packagesStyles";

import { FilledButton, OutlinedButton } from "@/styles/common-styles";
import { useTheme } from "@/hooks/useTheme";

// Icons
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
    ribbon: {
      text: "New Offer",
      bgColor: "#ece90f",
      textColor: "#000",
    },
  },
  {
    title: "24 Hours",
    price: "KES 40",
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
    ribbon: {
      text: "Popular",
      bgColor: "#38ee0a",
      textColor: "#000",
    },
  },
];

const PackagesSection = () => {
  const { theme } = useTheme();

  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <PackagesSectionContainer>
      <Box className="top-section">
        <header>Our Deals 🔥</header>

        <ToggleButtonGroup
          exclusive
          value={view}
          onChange={(_, value) => value && setView(value)}
          size="small"
          sx={{
            "& .MuiToggleButton-root": {
              border: `1px solid ${theme.colors.text1}`,
              color: theme.colors.text1,
              px: 1.3,
              py: 0.5,
            },

            "& .Mui-selected": {
              background: theme.colors.primary,
              color: "#fff",
            },

            "& .Mui-selected:hover": {
              background: theme.colors.primary,
            },
          }}
        >
          <ToggleButton value="grid">
            <ViewGridIcon />
          </ToggleButton>

          <ToggleButton value="list">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <PackagesCardContainer className={view}>
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.title}
            hasRibbon={!!pkg.ribbon}
            ribbonBgColor={pkg.ribbon?.bgColor}
          >
            {pkg.ribbon && (
              <PkgRibbon
                ribbonBgColor={pkg.ribbon.bgColor}
                ribbonTextColor={pkg.ribbon.textColor}
              >
                {pkg.ribbon.text}
              </PkgRibbon>
            )}

            <h3>{pkg.title}</h3>

            <ul>
              {pkg.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <span className="price">{pkg.price}</span>

            <FilledButton className="pkg_button">Buy</FilledButton>
          </PackageCard>
        ))}
      </PackagesCardContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <OutlinedButton
          sx={{
            border: `1px solid ${theme.colors.primary}`,
            color: theme.colors.primary,
            height: "36px",
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
