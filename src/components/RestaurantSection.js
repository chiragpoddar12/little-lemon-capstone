import restaurant1 from "./../imgs/restaurant1.jpg"
import restaurant2 from "./../imgs/restaurant2.jpg"
function RestaurantSection(){
    return (
        <article className={"restaurantArticle"}>
            <section className={"restaurantArticle-text"}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat. Cras sit amet dui pellentesque, eleifend mi quis, luctus nunc.</p>
            </section>
            <section className={"restaurantArticle-imgs"}>
                <img className={"restaurantImg articleImg1"} src={restaurant2}/>
                <img className={"restaurantImg articleImg2"} src={restaurant1}/>
            </section>
        </article>
    );
}

export default RestaurantSection;