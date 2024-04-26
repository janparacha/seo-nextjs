import { Metadata } from "next";
import Image from "next/image";

export interface Article {
  title: string;
  content: string;
  publication_date: string;
}

export const metadata: Metadata = {
  title: "Terrain entrant",
  description: "A blog about ground and confusion.",
};

export default function CardArticle({ article }: { article: Article }) {
  return (
    <article>
      <Image
        src="/tree.svg"
        alt="Description"
        width={50}
        height={50}
      ></Image>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <p>{article.publication_date}</p>
    </article>
  );
}
