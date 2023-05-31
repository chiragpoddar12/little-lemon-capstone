import {useState} from "react";

import "./../styles/styles.css"
import logo from "../imgs/logo.png";
import hamburger from "../imgs/hamburger.png";
import cross from "../imgs/cross.png";
function Nav() {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const onHamburgerButtonClick = () =>{
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    return(
        <nav>
            <nav className={"hamburger-nav"}>
                <a href={"/"}><img src={logo} alt={"Little Lemon Restaurant"} className={"logoImage"}/></a>
                <button className={"hamburger-button"} onClick={onHamburgerButtonClick}>
                    <img src={ isMobileNavOpen ? cross : hamburger } alt={"Navigation Button"}/>
                </button>
            </nav>

            {
                isMobileNavOpen ?
                    <menu className={"mobile-navbar"}>
                        <a className={"navbar-button"} href={"/"}><h3>Home</h3></a>
                        <a className={"navbar-button"} href={"/"}><h3>About</h3></a>
                        <a className={"navbar-button"} href={"/"}><h3>Menu</h3></a>
                        <a className={"navbar-button"} href={"/"}><h3>Reservations</h3></a>
                        <a className={"navbar-button"} href={"/"}><h3>Order</h3></a>
                        <a className={"navbar-button"} href={"/"}><h3>Login</h3></a>
                    </menu> : <></>
            }
            <menu className={"laptop-navbar"}>
                <a href={"/"}><img src={logo} alt={"Little Lemon Restaurant"} className={"logoImage"}/></a>
                <a className={"navbar-button"} href={"/"}><h3>Home</h3></a>
                <a className={"navbar-button"} href={"/"}><h3>About</h3></a>
                <a className={"navbar-button"} href={"/"}><h3>Menu</h3></a>
                <a className={"navbar-button"} href={"/"}><h3>Reservations</h3></a>
                <a className={"navbar-button"} href={"/"}><h3>Order</h3></a>
                <a className={"navbar-button"} href={"/"}><h3>Login</h3></a>
            </menu>
        </nav>
    );
}

export default Nav;