import './app.css';
import Header from "./Header.tsx";
import Article from "./Article.tsx";
import CommentSection from "./CommentSection.tsx";

export default function Blog() {

    const articleEntries = [
        { id: 1, title: 'Eintrag 1', content: 'Inhalt des Eintrags 1' },
        { id: 2, title: 'Eintrag 2', content: 'Inhalt des Eintrags 2' },
        { id: 3, title: 'Eintrag 3', content: 'Inhalt des Eintrags 3' }
    ];


    return (
        <div>
            <Header/>

            <main>
                {articleEntries.map((article) => <Article
                    key={article.id}
                    title={article.title}
                    content={article.content}/>)
                }
                <CommentSection />
            </main>

            <footer>
                <p>&copy; 2023 Mein Blog. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
}