import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#2a4336",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Authentic Ayurvedic Massage in Rutherford, NSW | Aayur Touch",
  description:
    "Experience professional, certified Ayurvedic massage in Rutherford, NSW. Aayur Touch offers personalised whole body, relaxation, and headache treatments. Call or WhatsApp to book today!",
  keywords: [
    "Ayurvedic massage Rutherford",
    "Massage Rutherford NSW",
    "Ayurveda Maitland NSW",
    "Whole body massage Rutherford",
    "Relaxation massage Rutherford NSW",
    "Headache treatment massage Rutherford",
    "Shiroabhyanga Rutherford",
    "Ayurvedic practitioner Hunter Valley",
    "Aayur Touch Rutherford",
  ],
  authors: [{ name: "Aayur Touch" }],
  creator: "Aayur Touch",
  publisher: "Aayur Touch",
  icons: {
    icon: "/images/AAYUR-TOUCH-web sqr.webp",
    apple: "/images/AAYUR-TOUCH-web sqr.webp",
  },
  metadataBase: new URL("https://aayurtouch.com.au"),
  alternates: {
    canonical: "https://aayurtouch.com.au",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://aayurtouch.com.au",
    siteName: "Aayur Touch Ayurvedic Massage",
    title: "Authentic Ayurvedic Massage in Rutherford, NSW | Aayur Touch",
    description:
      "Personalised, certified Ayurvedic massage therapies designed to relax, rejuvenate, and restore your body and mind in Rutherford, NSW.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Aayur Touch Authentic Ayurvedic Massage Sanctuary in Rutherford NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Ayurvedic Massage in Rutherford, NSW | Aayur Touch",
    description:
      "Personalised, certified Ayurvedic massage therapies in Rutherford, NSW. Call or WhatsApp to book.",
    images: ["/images/hero.jpg"],
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Rutherford",
    "geo.position": "-32.7167;151.5333",
    ICBM: "-32.7167, 151.5333",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#243029] selection:bg-[#cca058]/20 selection:text-[#1b2d24]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
