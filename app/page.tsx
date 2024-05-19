import Image from "next/image";
import style from "./home.module.css";
import { Metadata } from "next";
import CardArticle from "./components/CardArticle";
import articles from "./../public/articles.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://confus-terrain.fr"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  title: {
    template: "terrain-confus",
    default: "Terrain confus",
  },
  description: "Un blog à propos du terrain confus.",
  generator: "Jan and Nicolas",
  applicationName: "blog terrain confus",
  referrer: "origin-when-cross-origin",
  keywords: ["terrain", "confus", "terrains", "confusion", "ground"],
  authors: [{ name: "Jan" }, { name: "Nicolas", url: "https://confus-terrain.fr" }],
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
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
export default function Home() {
  return (
    <section>
      <div className={style.h1Container}>
        <h1 className={style.h1}>Terrain confus</h1>
        <Image
          priority
          src="/tree.svg"
          height={32}
          width={32}
          alt="Brouteur de terrain confus"
        />
      </div>
      <p className={style.description}>A blog about ground and confusion.</p>

      <h2 className={style.h2}>Articles</h2>
      <div className={style.articleContainer}>
        {articles
          .filter((article) => {
            const date = new Date(article.publication_date);
            return date < new Date();
          })
          .sort((a, b) => new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime())
          .slice(0, 4)
          .map((article) => (
            <CardArticle
              key={article.id}
              article={article}
              full={false}
            />
          ))}
      </div>
    </section>
  );
}
