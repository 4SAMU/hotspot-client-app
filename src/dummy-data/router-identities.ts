import { defaultTheme } from "@/themes/defaultTheme";
import { RouterIdentity } from "@/types/routerIdentity";

export const routerIdentities: Record<string, RouterIdentity> = {
  "classic-barber-shop": {
    identity: "classic-barber-shop",

    name: "Classic <span>Barber</span> Shop",

    supportNumber: "+254700000000",

    theme: {
      ...defaultTheme,

      colors: {
        ...defaultTheme.colors,

        primary: "#FF531E",
        success: "#FF531E",
        background: "#FFF7F0",
        text1: "#000",
        text2: "#f1e8e8",
        accent2: "#16803c",
      },
    },
  },

  "cuh-hotel": {
    identity: "cuh-hotel",

    name: "Cuh Hotel <span>WIFI</span>",

    supportNumber: "+254711111111",

    theme: {
      ...defaultTheme,

      colors: {
        ...defaultTheme.colors,

        primary: "#8de619",

        success: "#46eb25",
        background: "#0D1117",
        text1: "#fff",
        text2: "#050505",
        accent2: "#14ecc8",
      },
    },
  },

  "luxenn-hotspot": {
    identity: "luxenn-hotspot",

    name: "Luxenn<span>HOTSPOT</span>",

    supportNumber: "+254729424101",

    theme: {
      ...defaultTheme,

      colors: {
        ...defaultTheme.colors,
        primary: "#00c96e",
        background: "#0D1117",
        text1: "#E6EDF3",
        text2: "#030303",
        accent2: "#0bd7f1",
        border1: "#333435",
      },
    },
  },
};
