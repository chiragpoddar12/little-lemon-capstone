import { Link } from "react-router-dom";

function SpecialCard(props){
    return (
        <article className={"specialCard"}>
            <img src={props.picture}/>
            <section className={"specialCardLower"}>
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

export default SpecialCard;