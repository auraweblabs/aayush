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
  title: "Authentic Ayurvedic Massage in Cameron Park, NSW | Aayur Touch",
  description:
    "Experience professional, certified Ayurvedic massage at 19 Turnock Drive, Cameron Park NSW. Aayur Touch offers personalised whole body, relaxation, and headache treatments. Call or WhatsApp to book today!",
  keywords: [
    "Ayurvedic massage Cameron Park",
    "Massage Cameron Park NSW",
    "Ayurveda Lake Macquarie NSW",
    "Whole body massage Cameron Park",
    "Relaxation massage Cameron Park NSW",
    "Headache treatment massage Cameron Park",
    "Massage Edgeworth NSW",
    "Massage Wallsend NSW",
    "Ayurvedic practitioner Newcastle NSW",
    "Aayur Touch Cameron Park",
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
    title: "Authentic Ayurvedic Massage in Cameron Park, NSW | Aayur Touch",
    description:
      "Personalised, certified Ayurvedic massage therapies at 19 Turnock Drive, Cameron Park NSW. Relax, rejuvenate, and restore your body and mind.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Aayur Touch Authentic Ayurvedic Massage Sanctuary in Cameron Park NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Ayurvedic Massage in Cameron Park, NSW | Aayur Touch",
    description:
      "Personalised, certified Ayurvedic massage therapies in Cameron Park, NSW. Call or WhatsApp to book.",
    images: ["/images/hero.jpg"],
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Cameron Park",
    "geo.position": "-32.8986;151.6214",
    ICBM: "-32.8986, 151.6214",
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
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18521890464"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18521890464');`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WM738DT5');`,
          }}
        />
        {/* End Google Tag Manager */}
        <LocalBusinessSchema />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#243029] selection:bg-[#cca058]/20 selection:text-[#1b2d24]"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WM738DT5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
