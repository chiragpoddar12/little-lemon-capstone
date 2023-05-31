import logo2 from "../imgs/logo2.png";
import { Link } from "react-router-dom";
function Footer() {
    return(
        <footer>
            <section>
                <img src={logo2} alt={"Small Logo"} className={"footerLogo"}/>
            </section>
            <section>
                <h1 className={"footerTitle"}>Browse</h1>
                <ul>
                    <Link to={"/"}>
                        <h4 className={"footerContent"}>Home</h4>
                    </Link>
                    <Link to={"/about"}>
                        <h4 className={"footerContent"}>About</h4>
                    </Link>
                    <Link to={"/menu"}>
                        <h4 className={"footerContent"}>Menu</h4>
                    </Link>
                    <Link to={"/book-table"}>
                        <h4 className={"footerContent"}>Book Table</h4>
                    </Link>
                    <Link to={"/order"}>
                        <h4 className={"footerContent"}>Order</h4>
                    </Link>
                    <Link to={"/login"}>
                        <h4 className={"footerContent"}>Login</h4>
                    </Link>
                </ul>
            </section>
            <section>
                <h1 className={"footerContent"}>Address</h1>
                <ul>
                    <h4 className={"footerContent address1"}>2802 Tator Patch Road</h4>
                    <h4 className={"footerContent"}>Chicago, IL</h4>
                    <h4 className={"footerContent"}>312-893-7249</h4>
                    <h4 className={"footerContent"}>info@littlelemon.com</h4>
                </ul>
            </section>
            <section>
                <h1 className={"footerTitle"}>Social Network</h1>
                <ul>
                    <Link to={"/"}>
                        <h4 className={"footerContent"}>Facebook</h4>
                    </Link>
                    <Link to={"/"}>
                        <h4 className={"footerContent"}>Instagram</h4>
                    </Link>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;