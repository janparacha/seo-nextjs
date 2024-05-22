import articles from "./../../../public/articles.json";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const article = articles.find((article) => article.id.toString() === id);

  return {
    title: article?.title,
    keywords: article?.meta?.keywords,
    description: article?.meta?.description,
    authors: article?.authors,
    openGraph: {
      title: article?.title,
      description: article?.content,
      type: "article",
      publishedTime: article?.publication_date,
    },
  };
}

export default function Article({ params }: { params: { id: string } }) {
  const article = articles.find((article) => article.id.toString() === params.id);
  return article ? (
    <main>
      <div>
        <h1>{article.title}</h1>
        <span>{article.publication_date}</span>
        <p>{article.content}</p>
      </div>
    </main>
  ) : (
    <p> Erreur 404</p>
  );
}
