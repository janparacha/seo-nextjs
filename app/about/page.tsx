import React from 'react';
import styles from './about.module.css'; 

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de notre site</h1>
      <p className={styles.description}>
        Bienvenue sur notre site consacré aux terrains confus ! Nous sommes passionnés par l'exploration
        et la compréhension des environnements uniques et compliqués. Notre objectif est de fournir des
        informations, des conseils et des ressources pour vous aider à naviguer dans ces terrains
        fascinants et parfois déroutants.
      </p>
      <p className={styles.description}>
        Que vous soyez un amateur de plein air, un géographe ou simplement curieux, vous trouverez sur notre
        site des articles, des études de cas et des guides pour vous accompagner dans votre découverte des
        terrains complexes. Nous espérons que vous trouverez notre contenu utile et inspirant.
      </p>
    </div>
  );
};

export default About;
