import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NextAuthProviders from "./NextProviders";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M4JORS",
  description: "Generated by Majors Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <NextAuthProviders>{children}</NextAuthProviders>
      </body>
    </html>
  );
}
