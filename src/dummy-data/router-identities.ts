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

        primary: "#FF6B00",

        success: "#FF6B00",
        background: "#FFF7F0",
        textPrimary: "#0D1117",
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

        primary: "#2563EB",

        success: "#2563EB",
        background: "#0D1117",
        textPrimary: "#FFFFFF",
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
      },
    },
  },
};
