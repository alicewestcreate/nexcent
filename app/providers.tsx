"use client";
import React, { PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { ThemeProvider } from "@emotion/react";
import { customTheme as theme } from "@/app/theme";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Providers;
