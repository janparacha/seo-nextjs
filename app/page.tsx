import Image from "next/image";
import style from "./home.module.css";
import CardArticle from "./components/CardArticle";
import articles from "./../public/articles.json";

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
      <div className={style.backgroundImage}>
        <Image
            priority
            src="/terrain-confus-maison.webp"
            height={427}
            width={640}
            alt="Maison sur un terrain confus"
          />
      </div>
      <h2>Les articles du blog &quot;Terrains Confus&quot; : Une exploration des zones d&apos;incertitude de la vie</h2>
      <p>
        Le blog &quot;Terrains Confus&quot; propose une série d&apos;articles captivants qui plongent dans les aspects
        les plus complexes et les plus troublants de l&apos;existence humaine. En s&apos;aventurant dans ces zones
        d&apos;incertitude, les auteurs nous invitent à découvrir des vérités cachées sur nous-mêmes et sur le monde qui
        nous entoure.
      </p>

      <p>
        Chaque article explore un thème distinct, utilisant un ton narratif engageant et des exemples concrets pour
        illustrer des concepts profonds. Les sujets abordés sont vastes et variés, allant de la navigation dans les
        méandres de l&apos;esprit à la recherche de l&apos;illumination spirituelle, en passant par la gestion des
        relations humaines complexes et la surmonter des défis de la vie moderne.
      </p>

      <h3>Thèmes clés explorés dans les articles du blog:</h3>

      <ul>
        <li>Comprendre la confusion et l&apos;incertitude</li>
        <li>Découvrir des vérités cachées</li>
        <li>Naviguer dans les défis de la vie</li>
        <li>Trouver la lumière dans l&apos;obscurité</li>
        <li>Se développer personnellement</li>
      </ul>

      <p>
        Que vous soyez aux prises avec des questions existentielles ou que vous cherchiez simplement à mieux comprendre
        le monde qui vous entoure, le blog &quot;Terrains Confus&quot; est une ressource précieuse. Avec ses articles
        perspicaces et stimulants, il vous accompagnera dans votre exploration des zones les plus incertaines de la vie.
      </p>

      <h3>Ressources supplémentaires du site Web &quot;Terrains Confus&quot;:</h3>

      <ul>
        <li>Un forum communautaire</li>
        <li>Des ateliers et des événements en ligne</li>
        <li>Des ressources supplémentaires</li>
      </ul>

      <p>
        Si vous êtes prêt à vous aventurer dans les terrains confus et à découvrir les vérités cachées qui s&apos;y
        trouvent, je vous invite à explorer le blog &quot;Terrains Confus&quot; dès aujourd&apos;hui. Vous pourriez être
        surpris de ce que vous découvrez.
      </p>

      <a href="http://confus-terrain.fr/articles">Visitez le blog</a>

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
