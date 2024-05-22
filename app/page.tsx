import Image from "next/image";
import style from "./home.module.css";
import { Metadata } from "next";
import CardArticle from "./components/CardArticle";
import articles from "./../public/articles.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://confus-terrain.fr"),
  title: "Home - Terrain confus",
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
