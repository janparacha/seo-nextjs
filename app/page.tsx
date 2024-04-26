import Image from "next/image";
import style from "./home.module.css";
import { Metadata } from "next";
import CardArticle from "./components/CardArticle";
import articles from "./../public/articles.json";

export const metadata: Metadata = {
  title: "Terrain confus",
  description: "Un blog à propos du terrain confus.",
};
export default function Home() {
  return (
    <section>
      <div className={style.h1Container}>
        <h1 className={style.h1}>Terrain confus</h1>
        <Image
          priority
          src="/favicon.svg"
          height={32}
          width={32}
          alt="Brouteur de terrain confus"
        />
      </div>
      <p className={style.description}>A blog about ground and confusion.</p>
      <div className={style.image}>
        <Image
          src="/terrain-confus.png"
          alt="Terrain confus"
          width={500}
          height={200}
          className={style.logo}
        />
      </div>
      <h2 className={style.h2}>Articles</h2>
      <div className={style.articleContainer}>
        {articles
          .filter((article) => {
            const date = new Date(article.publication_date);
            return date < new Date();
          })
          .slice(0, 4)
          .map((article) => (
            <CardArticle
              key={article.id}
              article={article}
            />
          ))}
      </div>
    </section>
  );
}
