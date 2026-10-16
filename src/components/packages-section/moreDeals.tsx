import { FilledButton } from "@/styles/common-styles";
import {
  MoreDealsPackageCard,
  PackagesCardContainer,
  PackagesSectionContainer,
} from "./packagesStyles";
import { useTheme } from "@/hooks/useTheme";
import { PackageProps, usePayment } from "@/context/PaymentModalContext";

const packages: PackageProps[] = [
  {
    title: "3 Days",
    price: 100,
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
    price: 199,
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
    price: 550,
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
  const { theme } = useTheme();
  const { openPaymentModal } = usePayment();

  return (
    <PackagesSectionContainer
      id="explore-more-deals"
      sx={{
        borderTop: "1px solid",
        borderColor: theme.colors.textColor + "40",
        paddingTop: "20px",
      }}
    >
      <h4>Stay connected for Long 🔥</h4>

      <PackagesCardContainer>
        {packages.map((pkg) => (
          <MoreDealsPackageCard
            key={pkg.title}
            ribbonBgColor={pkg.ribbon?.bgColor}
            ribbonTextColor={pkg.ribbon?.textColor}
          >
            <div className="header">
              <h3>{pkg.title}</h3>
              <div className="price">Ksh.{pkg.price}</div>
              <span>{pkg.ribbon?.text}</span>
            </div>

            <div className="body">
              <ul>
                {pkg.features?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <FilledButton
                className="pkg_button"
                onClick={() =>
                  openPaymentModal({
                    title: pkg.title,
                    price: pkg.price,
                    features: pkg.features ?? [],
                  })
                }
              >
                Buy Now
              </FilledButton>
            </div>
          </MoreDealsPackageCard>
        ))}
      </PackagesCardContainer>
    </PackagesSectionContainer>
  );
};

export default MoreDealsPackagesSection;
