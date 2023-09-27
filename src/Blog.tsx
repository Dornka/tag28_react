import './app.css';
import Header from "./Header.tsx";
import Article from "./Articel.tsx";
import CommentSection from "./CommentSection.tsx";

export default function Blog() {


    return (
        <div>
            <Header/>

            <main>
                <Article />
                <CommentSection />
            </main>

            <footer>
                <p>&copy; 2023 Mein Blog. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
}