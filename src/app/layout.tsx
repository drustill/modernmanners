import type { Metadata } from "next";
import { Bitter, Inter, Libre_Baskerville, Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Manners of Tulsa",
  description: "Modern etiquette ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bitter.className}>{children}</body>
    </html>
  );
}
