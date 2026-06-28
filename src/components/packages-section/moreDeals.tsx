import {
  MoreDealsPackageCard,
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
    title: "3 Days",
    price: "KES 120",
    features: [
      "Enjoy 3 days of unlimited access",
      "Connect Upto 2 devices simultaneously",
    ],
    ribbon: {
      text: "Basic",
      bgColor: "#ece90f",
      textColor: "#000",
    },
  },
  {
    title: "1 Week",
    price: "KES 199",
    features: [
      "Enjoy 7 days of unlimited access",
      "Connect Upto 2 devices simultaneously",
    ],
    ribbon: {
      text: "Best Deal",
      bgColor: "#e0a912",
      textColor: "#000",
    },
  },
  {
    title: "1 Month",
    price: "KES 599",
    features: [
      "Enjoy 1 Month of unlimited access",
      "Connect Upto 2 devices simultaneously",
    ],
    ribbon: {
      text: "Premium",
      bgColor: "#300ef5",
      textColor: "#fff",
    },
  },
];

const MoreDealsPackagesSection = () => {
  return (
    <PackagesSectionContainer>
      <header>Explore More Deals 🔥</header>

      <PackagesCardContainer>
        {packages.map((pkg) => (
          <MoreDealsPackageCard
            key={pkg.title}
            ribbonBgColor={pkg.ribbon?.bgColor}
            ribbonTextColor={pkg.ribbon?.textColor}
          >
            <div className="header">
              <h3>{pkg.title}</h3>
              <div className="price">{pkg.price}</div>
              <span>{pkg.ribbon?.text}</span>
            </div>

            <div className="body">
              <ul>
                {pkg.features?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <PkgBuyButton className="pkg_button">Buy Now</PkgBuyButton>
            </div>
          </MoreDealsPackageCard>
        ))}
      </PackagesCardContainer>
    </PackagesSectionContainer>
  );
};

export default MoreDealsPackagesSection;
