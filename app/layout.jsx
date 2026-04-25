// Server component — no "use client" needed.
// Imports load once, and Next.js handles bundling.
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Charan Kumar | Design & Developer",
  description:
    "Web Developer, UI/UX & Graphic Designer. 1.5+ years of experience. 25+ projects shipped.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0c",
};

import { LoadingProvider } from "@/components/LoadingContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Cormorant+Garamond:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
