import Link from "next/link";
import type { Metadata } from "next";
import style from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://confus-terrain.fr"),
  title: {
    default: "Terrain confus - Le blog sur les terrains confus et l'immobilier",
    template: " Terrain confus - %s",
  },
  description:
    "Un blog à propos du terrain confus. Venez en apprendre plus sur l'immobilier et les terrains confus. Vous serez surpris par ce que l'immobilier peut vous offrir",
  generator: "Next.js",
  applicationName: "Le blog des terrains confus",
  referrer: "origin-when-cross-origin",
  keywords: ["terrain", "confus", "terrains", "confusion", "ground", "immobilier", "velo"],
  authors: [
    { name: "Jan", url: "https://confus-terrain.fr" },
    { name: "Nicolas", url: "https://confus-terrain.fr" },
  ],
  creator: "Jan and Nicolas",
  publisher: "Jan and Nicolas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "confus-terrain.js",
    description: "Le blog des terrains confus",
    url: "https://confus-terrain.fr",
    siteName: "terrain-confus.fr",
    images: [
      {
        url: "https://storage.gra.cloud.ovh.net/v1/AUTH_e0b83750570d4ff1986fe199b41300e4/kimono/a2a6e279ddaec4753d3d6b8a990618633106469e/700x1000?width=700&height=1000", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrain Confus",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@mussbla",
    creatorId: "1467726470533754880",
    images: [
      "https://storage.gra.cloud.ovh.net/v1/AUTH_e0b83750570d4ff1986fe199b41300e4/kimono/a2a6e279ddaec4753d3d6b8a990618633106469e/700x1000?width=700&height=1000",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={style.body}>
        <header>
          <nav className={style.nav}>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">A propos</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={style.main}>{children}</main>
        <footer className={style.footer}>
          <p>© 2024 - Terrain confus</p>
        </footer>
      </body>
    </html>
  );
}
