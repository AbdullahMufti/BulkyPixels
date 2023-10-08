"use client";

import config from "@/config/config.json";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const { default_theme } = config.settings;

  return <div>{children}</div>;
};

export default Providers;
