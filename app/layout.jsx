import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Home/Navbar";
import ScreenSize from "./components/ScreenSize";
import Footer from "./components/Footer";

const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Yumy",
    template: "%s | Yumy",
  },
  description:
    "Connect, Share, and Explore Delicious Recipes with Yumy - The Ultimate Social Media Platform for Food Enthusiasts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body className={be_vietnam_pro.className}>
        <ScreenSize />
        {children}
      </body>
    </html>
  );
}
