import "@mui/material";
import { ThemeConfig } from "@/themes";

declare module "@mui/material" {
  interface Theme extends ThemeConfig {}

  interface ThemeOptions extends Partial<ThemeConfig> {}
}
