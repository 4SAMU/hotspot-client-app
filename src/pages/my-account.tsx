import React from "react";
import DefaultLayout from "@/components/layout";
import { Box } from "@mui/material";
import { useTheme } from "@/hooks/useTheme";
import {
  FilledButton,
  OutlinedButton,
  RowDisplay,
} from "@/styles/common-styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

const MyAccountMainPage = () => {
  const { theme } = useTheme();
  return (
    <DefaultLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: theme.colors.textColor,
          padding: "20px",
          gap: "10px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",

          h1: {
            fontSize: "22px",
            fontWeight: "800",
            fontFamily: "JetBrains Mono, monospace",
            span: {
              color: theme.colors.primary,
            },
          },
          p: {
            fontSize: "13px",
            fontWeight: "400",
            color: theme.colors.textColor,
            fontFamily: "DM Sans, sans-serif",
            lineHeight: "22px",
            marginTop: "10px",
          },
        }}
      >
        <AccountCircleIcon
          sx={{
            width: "100px",
            height: "100px",
            color: theme.colors.primary,
          }}
        />
        <h1>
          Your Account,
          <span>More Control</span>
        </h1>
        <p>
          Having an account lets you reconnect faster, view your active session
          and credentials, and recover access when needed even on your secondary
          devices.
        </p>
        <RowDisplay sx={{ gap: "10px", marginTop: "20px" }}>
          <FilledButton
            sx={{
              padding: "20px 20px",
              borderRadius: "20px",
              fontWeight: "400",
              fontSize: "12px",
            }}
          >
            Create Account
          </FilledButton>
          <OutlinedButton
            sx={{
              padding: "20px 20px",
              borderRadius: "20px",
              fontWeight: "400",
              fontSize: "12px",
            }}
          >
            <LoginIcon />
            Log In
          </OutlinedButton>
        </RowDisplay>
      </Box>
    </DefaultLayout>
  );
};

export default MyAccountMainPage;
