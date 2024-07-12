import { Metadata } from "next";
import Image from "next/image";
import style from "../cardArticle.module.css";
import Link from "next/link";

export interface Article {
  id: number;
  title: string;
  content: string;
  publication_date: string;
}

export const metadata: Metadata = {
  title: "Terrain entrant",
  description: "A blog about ground and confusion.",
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function CardArticle({ full, article }: { full: boolean; article: Article }) {
  return (
    <article className={style.article}>
      <Image
        src="/tree.svg"
        alt="Description"
        width={50}
        height={50}
      ></Image>
      <h3>{article.title}</h3>

      {full ? (
        <p>
          {article.content}
          <br />
          <Link href={`/articles/${slugify(article.title)}`}>[...]</Link>
        </p>
      ) : (
        <p>
          {article.content.substring(0, 130)}
          <br />
          <Link href={`/articles/${slugify(article.title)}`}>[...]</Link>
        </p>
      )}

      <p>{article.publication_date.split("T")[0]}</p>
    </article>
  );
}
