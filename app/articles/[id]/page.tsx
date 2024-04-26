import { Metadata } from "next";
import articles from "./../../../public/articles.json"

export const metadata: Metadata = {
  title: "Terrain uno",
  description: "A blog about ground and confusion.",
};

export default function Article({ params }: { params: { id: string } }) {
  
  const article =  articles.find(article => article.id.toString() === params.id)
  return article ? 
 (
    <main>
      <div>
        <h1>Articles numero {article.id}</h1>
      </div>
    </main>
  ) : <p> Erreur 404</p>
}
