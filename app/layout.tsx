import type { Viewport } from "next";
import { ReactNode } from "react";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#032685",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
