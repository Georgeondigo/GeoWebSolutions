import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/ui/Layout";

export const metadata: Metadata = {
  title: "GeoWeb Solutions",
  description: "GeoWeb Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
