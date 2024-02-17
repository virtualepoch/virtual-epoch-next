import { Inter } from "next/font/google";
import { UI } from "./_components/_ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Virtual Epoch - Custom Web App Development - UI & UX",
  description:
    "We specialize in front end web development. Utilizing HTML, CSS, JavaScript, React.js, Next.js, and Three.js we create intriguing user interfaces and experiences.",
  generator: "Next.js",
  applicationName: "Virtual Epoch",
  referrer: "origin-when-cross-origin",
  keywords: [
    "web development",
    "web apps",
    "html",
    "css",
    "javascript",
    "react.js",
    "next.js",
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
    siteName: "Virtual Epoch - Custom Web Apps",
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
    },
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UI />

        {children}
      </body>
    </html>
  );
}
