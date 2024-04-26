import Link from "next/link";
import style from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={style.body}>
        <header>
          <nav className={style.nav}>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">A propos</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={style.main}>{children}</main>
        <footer className={style.footer}>
          <p>© 2024 - Terrain confus</p>
        </footer>
      </body>
    </html>
  );
}
