import "@mui/material/styles";
import { ThemeConfig } from "@/themes";

declare module "@mui/material/styles" {
  interface Theme extends ThemeConfig {}

  interface ThemeOptions extends Partial<ThemeConfig> {}
}
