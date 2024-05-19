import { Metadata } from "next";
import articles from "./../../../public/articles.json";

export const metadata: Metadata = {
  title: "Terrain confus",
  description: "A blog sur les terrain confus.",
  keywords: ["terrain", "confus", "blog"],
  openGraph: {
    title: "Terrain confus",
    description: "Le meilleur blog sur les terrains confus",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Jan", "Nicolas"],
  },
  twitter: {
    handle: "@terrainconfus",
    site: "@terrainconfus",
    cardType: "summary_large_image",
  },
};

export default function Article({ params }: { params: { id: string } }) {
  const article = articles.find((article) => article.id.toString() === params.id);
  return article ? (
    <main>
      <div>
        <h1>Article numero {article.id}</h1>
        <p>{article.content}</p>
      </div>
    </main>
  ) : (
    <p> Erreur 404</p>
  );
}
