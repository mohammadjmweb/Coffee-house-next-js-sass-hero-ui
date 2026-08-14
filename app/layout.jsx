import "./globals.scss";
import { Providers } from "./providers";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Coffee House",
  description: "Fresh coffee, delicious flavors and good moments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />

          {children}

          <Footer />

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}