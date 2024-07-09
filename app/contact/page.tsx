import React from 'react';
import styles from './contact.module.css'; 

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-nous</h1>
      <p className={styles.description}>
        Si vous avez des questions ou des commentaires, n&apos;h&eacute;sitez pas &agrave; nous contacter !
        Nous sommes &agrave; votre &eacute;coute et nous ferons de notre mieux pour r&eacute;pondre rapidement.
      </p>
      <form className={styles.form}>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
