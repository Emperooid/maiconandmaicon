import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maicon and Maicon",
  description: "Career repositioning and professional branding for competent professionals who do honest work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
