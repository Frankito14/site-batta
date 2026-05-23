import type { Metadata } from "next";
import { ModalProvider } from "@context/ModalContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Transportes Batta - Fletes y Mudanzas en Buenos Aires",
  description: "Transportes Batta - Fletes, mudanzas y logística en Buenos Aires. Más de 10 años de experiencia. Servicio de embalaje, carga y descarga con operarios profesionales.",
  keywords: "fletes Buenos Aires, mudanzas Buenos Aires, logística, transporte de carga, servicio de embalaje, mudanza profesional",
  authors: [{ name: "Transportes Batta" }],
  openGraph: {
    type: "website",
    title: "Transportes Batta - Fletes y Mudanzas en Buenos Aires",
    description: "Servicio profesional de fletes y mudanzas con más de 10 años de experiencia. Embalaje, carga y descarga en Buenos Aires.",
    siteName: "Transportes Batta",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportes Batta - Fletes y Mudanzas",
    description: "Fletes y mudanzas profesionales en Buenos Aires con más de 10 años de experiencia.",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <head>
        <link rel="icon" href="./images/icon.ico" type="image/x-icon" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Transportes Batta",
              "image": "https://transportesbatta.com.ar/img/banner.webp",
              "description": "Servicio profesional de fletes y mudanzas en Buenos Aires",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Buenos Aires",
                "addressLocality": "Buenos Aires",
                "addressRegion": "CABA",
                "addressCountry": "AR"
              },
              "telephone": "+54-11-5054-5987",
              "url": "https://transportesbatta.ar",
              "priceRange": "$$",
              "areaServed": "Buenos Aires",
              "sameAs": [
                "https://www.instagram.com/logisticabatta/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Servicio de Mudanzas y Fletes",
              "description": "Servicio profesional de mudanzas, fletes y logística con embalaje",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Transportes Batta"
              },
              "areaServed": "Buenos Aires"
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground smooth-scroll">
        <ModalProvider>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </ModalProvider>
      </body>
    </html>

  );
}

