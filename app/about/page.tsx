import React from "react";
import styles from "../about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de notre site</h1>
      <p className={styles.description}>
        Bienvenue &agrave; notre site consacr&eacute; aux terrains confus ! Nous sommes passionn&eacute;s par
        l&apos;exploration et la compr&eacute;hension des environnements uniques et compliqu&eacute;s. Notre objectif
        est de fournir des informations, des conseils et des ressources pour vous aider &agrave; naviguer dans ces
        terrains fascinants et parfois d&eacute;router.
      </p>
      <p className={styles.description}>
        Que vous soyez un amateur de plein air, un g&eacute;ographe ou simplement curieux, vous trouverez sur notre site
        des articles, des &eacute;tudes de cas et des guides pour vous accompagner dans votre d&eacute;couverte des
        terrains complexes. Nous esp&eacute;rons que vous trouverez notre contenu utile et inspirant.
      </p>
    </div>
  );
};

export default About;
