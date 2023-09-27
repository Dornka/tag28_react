import './App.css'
type ArticleEntryProps = {
    title: string,
    content: string,
}
export default function Article(props: ArticleEntryProps) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </article>
    );
}