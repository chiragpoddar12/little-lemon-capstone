import SpecialCard from "./SpecialCard";
import greek_salad from "./../imgs/greek-salad.jpg";
import lemon_dessert from "./../imgs/lemon_dessert.jpg";
import corquettes from "./../imgs/corquettes.jpg";

function Specials(){
    return (
      <>
          <section className={"specials"}>
              <h1>Specials</h1>
              <section className={"specialCards"}>
                  <SpecialCard picture={greek_salad} title={"Greek Salad"} price={"$12.99"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"}/>
                  <SpecialCard picture={lemon_dessert} title={"Lemon Dessert"} price={"$9.99"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"}/>
                  <SpecialCard picture={corquettes} title={"Corquettes"} price={"$6.99"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ut eros porta placerat"}/>
              </section>
          </section>
      </>
    );
}

export default Specials;