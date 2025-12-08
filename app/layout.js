import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Home from "./page";
import AboutUs from "./about/page";
import Services from "./services/page";
import ContactPage from "./contact/page";

export const metadata = {
  title: "Hindustan Motor Garage | Car AC, Accident Repair & Body Shop – Sidhpur",
  description:
    "Expert car AC repair, accident body repair, dent removal, painting, wiring, and door alignment services near Kakoshi Chokdi, Sidhpur. Get the best repairing service by skilled technicians.",
  keywords: [
    "Car AC repair Sidhpur",
    "Accident car repair",
    "Car dent removal",
    "Car body paint restoration",
    "Door alignment repair",
    "Hindustan Motor Garage",
    "Car mechanic Sidhpur",
    "Car service near me",
  ],
  
  authors: [{ name: "Hindustan Motor Garage" }],
  creator: "Hindustan Motor Garage",
  publisher: "Hindustan Motor Garage",

  // ✔ Primary domain
  metadataBase: new URL("https://www.hindustanmotorgarage.in"),

  // ✔ Canonical correctly pointing to main domain
  alternates: {
    canonical: "https://www.hindustanmotorgarage.in",
  },
  icons: {
    icon: "/images/favicon.svg", // ✅ favicon / logo placed in public/favicon.svg
  },
  openGraph: {
    title: "Hindustan Motor Garage – Best Car Repair in Sidhpur",
    description:
      "Top-rated car repair services: AC repair, accident work, dent removal, painting, wiring & much more.",
    url: "https://www.hindustanmotorgarage.in",
    siteName: "Hindustan Motor Garage",
    images: [
      {
        url: "/images/contact.png", // ✔ unified OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hindustan Motor Garage – Car Repair Experts",
    description:
      "Professional AC repair, denting, painting, and accident repair services.",
    images: ["/images/og-image.jpg"], // ✔ same image
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="xeZMkexJB5qYQWwWu7IWkCCY819fQhi5IljUOAgdhwc" />
         <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" />

        {/* Preload Important Images */}
        <link rel="preload" as="image" href="/images/about1.jpg" />
        <link rel="preload" as="image" href="/images/about2.jpg" />
        <link rel="preload" as="image" href="/images/contact.png" />

        {/* Structured SEO – JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Hindustan Motor Garage",
              image: "https://www.hindustanmotor.in/images/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Near Autonation Car Care, Opp. Anand Hotel, Near Kakoshi Chokdi",
                addressLocality: "Sidhpur",
                postalCode: "384151",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              telephone: "+918238119705",
              url: "https://www.hindustanmotor.in",
              description:
                "Expert car AC, accident repair, dent removal, painting, wiring & more.",
              openingHours: "Mo-Sa 08:00-20:00",
              priceRange: "₹₹",
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        {children}
        <AboutUs />
        <Services />
        <ContactPage />
        <Footer />
      </body>
    </html>
  );
}
