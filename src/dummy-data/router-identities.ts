import { defaultTheme } from "@/themes/defaultTheme";
import { RouterIdentity } from "@/types/routerIdentity";

export const routerIdentities: Record<string, RouterIdentity> = {
  "classic-barber-shop": {
    identity: "classic-barber-shop",

    name: "Classic <span>Barber</span> Wifi",

    supportNumber: "+254700000000",

    theme: {
      ...defaultTheme,

      colors: {
        ...defaultTheme.colors,

        primary: "#392d2d",
        titleSpanColor: "#6c3e3c",
        background: "#f4f4f4",
        textColor: "#111820",
        buttonTextColor: "#f1e8e8",
        accent: "#6c3e3c",
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
        primary: "#233245",
        titleSpanColor: "#70441a",
        background: "#e6dcd0",
        textColor: "#050811",
        buttonTextColor: "#e6dcd0",
        accent: "#70441a",
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
        titleSpanColor: "#00c96e",
        background: "#0D1117",
        textColor: "#E6EDF3",
        buttonTextColor: "#E6EDF3",
        accent: "#0bd7f1",
      },
    },
  },

  "salon-deluxe": {
    identity: "salon-deluxe",

    name: "Salon Deluxe <span>Hotspot</span>",

    supportNumber: "+254700000000",

    theme: {
      ...defaultTheme,

      colors: {
        ...defaultTheme.colors,

        primary: "#111820",
        titleSpanColor: "#cf087c",
        background: "#f1e8e8",
        textColor: "#111820",
        buttonTextColor: "#f1e8e8",
        accent: "#cf087c",
      },
    },
  },
  konekti: {
    identity: "konekti",

    name: "konekti<span>HOTSPOT</span>",

    supportNumber: "+254713563798",

    theme: {
      ...defaultTheme,

      colors: {
        ...defaultTheme.colors,

        primary: "#0073e6",
        titleSpanColor: "#0073e6",
        background: "#0f1214",
        textColor: "#ffffff",
        buttonTextColor: "#ffffff",
        accent: "#ffffff",
      },
    },
  },
};
