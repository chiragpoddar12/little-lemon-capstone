import HomeHeader from "./HomeHeader";
import Specials from "./Specials";
import Testinomials from "./Testinomials";
import RestaurantSection from "./RestaurantSection";

function Home(){
    return (
        <main>
            <HomeHeader/>
            <Specials/>
            <Testinomials/>
            <RestaurantSection/>
        </main>
    );
}

export default Home;