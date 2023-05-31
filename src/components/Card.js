import { Link } from "react-router-dom";

function Card(props){
    return (
        <article className={"card"}>
            <img src={props.picture}/>
            <section className={"cardLower"}>
                <h1>{props.title}</h1>
                <h2>{props.price}</h2>
                <p>{props.description}</p>
                <Link to={"/menu"}>
                    <button className={"yellowButton"}>Order Online</button>
                </Link>
            </section>
        </article>
    );
}

export default Card;