import { Inter } from "next/font/google";
import { UI } from "./_components/_ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Virtual Epoch - Web App Development - UI & UX",
  description:
    "We specialize in front end web development. Utilizing HTML, CSS, JavaScript, React.js, Next.js, and Three.js we create intriguing user interfaces and experiences.",
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
