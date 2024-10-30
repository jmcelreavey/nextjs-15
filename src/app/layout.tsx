import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js 15 Starter",
  description:
    "Starter template for Next.js 15 with React 19 RC, TypeScript, Tailwind CSS and Shadcn.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body>{children}</body>
    </html>
  );
}
