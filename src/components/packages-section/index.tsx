import {
  PackageCard,
  PackagesCardContainer,
  PackagesSectionContainer,
  PkgBuyButton,
  PkgRibbon,
} from "./packagesStyles";

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
  return (
    <PackagesSectionContainer>
      <header>Our Deals 🔥</header>

      <PackagesCardContainer>
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

            <PkgBuyButton>Buy</PkgBuyButton>
          </PackageCard>
        ))}
      </PackagesCardContainer>
    </PackagesSectionContainer>
  );
};

export default PackagesSection;
