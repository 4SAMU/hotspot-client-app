import "@/styles/globals.css";
import { RouterIdentityProvider } from "@/context/RouterIdentityContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "react-alice-carousel/lib/alice-carousel.css";

// Types for page and layout props
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider>
      <RouterIdentityProvider>
        {getLayout(<Component {...pageProps} />)}
      </RouterIdentityProvider>
    </ThemeProvider>
  );
}
