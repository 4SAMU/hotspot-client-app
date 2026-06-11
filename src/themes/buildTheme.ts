import { createTheme } from "@mui/material/styles";

import { ThemeConfig } from "@/themes";

export const buildTheme = (config: ThemeConfig) =>
  createTheme({
    ...config,
  });
