import './App.css'
type ArticleEntryProps = {
    title: string,
    content: string,
    myCallback: (info: string) => void
}
export default function Article(props: ArticleEntryProps) {

    props.myCallback("Test-Callback " + props.title)
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </article>
    );
}