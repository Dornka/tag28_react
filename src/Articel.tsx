import './App.css'

export default function Article() {
    return (
        <article>
            <h2>Artikelüberschrift</h2>
            <p>Einleitung des Artikels...</p>
                <ul className="test">
                <li>Listenelement 1</li>
                <li>Listenelement 2</li>
                <li>Listenelement 3</li>
                </ul>
            <a href="http://testwebseite.de/defaultsite">Link zu einer anderen Webseite</a>
            <blockquote>
                Zitat aus einem anderen Artikel oder Buch.
            </blockquote>
        </article>
    );
}