import { Inter } from "next/font/google";

import { UI } from "./_components/_ui";
import { Footer } from "./_components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { FooterNavLinks } from "./_components/FooterNavLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Custom Web Apps & Web Animations - UI & UX - Virtual Epoch",
  description:
    "We specialize in custom front end web development. We utilize CSS and JavaScript to create intriguing user interfaces and animations that will dazzle your audience.",
  generator: "Next.js",
  applicationName: "Virtual Epoch",
  referrer: "origin-when-cross-origin",
  keywords: [
    "web apps",
    "web animations",
    "custom web apps",
    "custom web animations",
    "websites",
    "custom websites",
    "website design",
    "website animations",
    "custom website design",
    "website development",
    "custom website development",
    "web development",
    "custom web development",
    "html",
    "css",
    "css animations",
    "javascript",
    "nextjs",
    "next.js",
    "reactjs",
    "react.js",
    "ui",
    "ui design",
    "user interface design",
    "user interface development",
    "ux",
    "ux design",
    "user experience",
    "user experience design",
    "user experience development",
  ],
  authors: { name: "Craig Kaufman", url: "https://www.virtualepoch.com" },

  creator: "Craig Kaufman",
  publishers: { name: "Craig Kaufman" },

  metadataBase: new URL("https://www.virtualepoch.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Virtual Epoch",
    description:
      "Utilizing the latest web technologies, we create intriguing user interfaces and experiences.",
    url: "/",
    siteName: "Virtual Epoch - Custom Web Apps & Animations",
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
    },
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UI />

        {children}

        <FooterNavLinks />

        <Footer />
      </body>

      <GoogleTagManager gtmId="G-DGPM2TZ40W" />
    </html>
  );
}
