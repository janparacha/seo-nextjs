import articles from "./../../../public/articles.json";
import type { Metadata } from "next";

function slugify(title: string) {
  return title
    .toLowerCase() 
    .replace(/[^a-z0-9\s-]/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-'); 
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.id;
  const article = articles.find((article) => slugify(article.title) === title);

  return {
    title: article?.title,
    keywords: article?.meta?.keywords,
    description: article?.meta?.description,
    authors: article?.authors,
    applicationName: "confus-terrain.fr",
    referrer: "no-referrer",
    viewport: "width=device-width, initial-scale=1",
    creator: "Jan and Nicolas",
    publisher: "confus-terrain.fr",
    robots: "index, follow",
    twitter: {
      site: "@confus-terrain",
      creator: "@mussbla",
      description: article?.content,
      title: article?.title,
      images:
        "https://storage.gra.cloud.ovh.net/v1/AUTH_e0b83750570d4ff1986fe199b41300e4/kimono/a2a6e279ddaec4753d3d6b8a990618633106469e/700x1000?width=700&height=1000",
      card: "summary_large_image",
    },
    openGraph: {
      title: article?.title,
      description: article?.content,
      type: "article",
      publishedTime: article?.publication_date,
      authors: article?.openGraphAuthors,
      url: `https://confus-terrain.fr/articles/${id}`,
      siteName: "confus-terrain.fr",
      images: [
        {
          url: "https://storage.gra.cloud.ovh.net/v1/AUTH_e0b83750570d4ff1986fe199b41300e4/kimono/a2a6e279ddaec4753d3d6b8a990618633106469e/700x1000?width=700&height=1000", // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default function Article({ params }: { params: { id: string } }) {
  const article = articles.find((article) => slugify(article.title) === params.id);
  return article ? (
    <main>
      <div>
        <h1>{article.title}</h1>
        <span>{article.publication_date.split("T")[0]}</span>
        <p>{article.content}</p>
      </div>
    </main>
  ) : (
    <p> Erreur 404</p>
  );
}
