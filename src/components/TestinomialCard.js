function TestinomialCard(props){
    return (
        <article className={"testinomialCard"}>
                <h4>{props.name}</h4>
                <p>{props.comment}</p>
        </article>
    );
}

export default TestinomialCard;