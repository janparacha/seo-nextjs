import { Metadata } from "next";
import articles from "./../../public/articles.json";
import CardArticle from "../components/CardArticle";
import style from "../articles.module.css";

export const metadata: Metadata = {
  title: "Articles",
  description: "A blog about ground and confusion.",
};

export default function Articles() {
  return (
    <main>
      <div>
        <h1>Articles </h1>
        <div className={style.articles}>
          {articles
            .filter((article) => {
              const date = new Date(article.publication_date);
              return date < new Date();
            })
            .sort((a, b) => new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime())
            .map((article) => (
              <CardArticle
                key={article.id}
                article={article}
                full={true}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
