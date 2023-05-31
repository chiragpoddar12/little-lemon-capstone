import {useState} from "react";

import "./../styles/styles.css"
import logo from "../imgs/logo.png";
import hamburger from "../imgs/hamburger.png";
import cross from "../imgs/cross.png";

import { Link } from "react-router-dom";
function Nav() {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const onHamburgerButtonClick = () =>{
        setIsMobileNavOpen(!isMobileNavOpen);
    }

    return(
        <nav>
            <nav className={"hamburger-nav"}>
                <Link to="/">
                    <img src={logo} alt={"Little Lemon Restaurant"} className={"logoImage"}/>
                </Link>
                <button className={"hamburger-button"} onClick={onHamburgerButtonClick}>
                    <img src={ isMobileNavOpen ? cross : hamburger } alt={"Navigation Button"}/>
                </button>
            </nav>

            {
                isMobileNavOpen ?
                    <menu className={"mobile-navbar"}>
                        <Link to="/" className={"navbar-button"}>
                            <h3>Home</h3>
                        </Link>
                        <Link to="/about" className={"navbar-button"}>
                            <h3>About</h3>
                        </Link>
                        <Link to="/menu" className={"navbar-button"}>
                            <h3>Menu</h3>
                        </Link>
                        <Link to="/book-table" className={"navbar-button"}>
                            <h3>Reservations</h3>
                        </Link>
                        <Link to="/order" className={"navbar-button"}>
                            <h3>Order</h3>
                        </Link>
                        <Link to="/login" className={"navbar-button"}>
                            <h3>Login</h3>
                        </Link>
                    </menu> : <></>
            }
            <menu className={"laptop-navbar"}>
                <Link to="/">
                    <img src={logo} alt={"Little Lemon Restaurant"} className={"logoImage"}/>
                </Link>
                <Link to="/" className={"navbar-button"}>
                    <h3>Home</h3>
                </Link>
                <Link to="/about" className={"navbar-button"}>
                    <h3>About</h3>
                </Link>
                <Link to="/menu" className={"navbar-button"}>
                    <h3>Menu</h3>
                </Link>
                <Link to="/book-table" className={"navbar-button"}>
                    <h3>Reservations</h3>
                </Link>
                <Link to="/order" className={"navbar-button"}>
                    <h3>Order</h3>
                </Link>
                <Link to="/login" className={"navbar-button"}>
                    <h3>Login</h3>
                </Link>
            </menu>
        </nav>
    );
}

export default Nav;