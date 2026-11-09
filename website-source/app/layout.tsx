import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reddate — Intelligence for the place you live",
  description: "Explore Reddate’s approach to understanding your home: comfort, energy, safety awareness and daily rhythms. Starting at home. Thinking in spaces.",
  icons: {
    icon: "/images/app-icon.png",
    shortcut: "/images/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" dir="ltr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
