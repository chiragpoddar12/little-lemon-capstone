import greek_salad from "../imgs/greek-salad.jpg";
import { Link } from "react-router-dom";
function HomeHeader() {
    return(
        <header>
            <article className={"jumbotron"}>
                <section className={"textSection-header"}>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>

                    <p class={"description"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat. Cras sit amet dui pellentesque, eleifend mi quis, luctus nunc. </p>
                    <Link to={"/book-table"}>
                        <button className={"yellowButton"}>Book Table</button>
                    </Link>
                </section>
                <section className={"imgSection-header"}>
                    <img src={greek_salad} alt={"Jumbotron-image"}/>
                </section>
            </article>
        </header>
    );
}

export default HomeHeader;