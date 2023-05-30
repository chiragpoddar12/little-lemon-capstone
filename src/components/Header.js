import Nav from './Nav.js'
import logo from './../imgs/logo.png';
function Header() {
    return(
        <header>
            <img src={logo} alt={"Little Lemon Restaurant"}/>
            <Nav/>
        </header>
    );
}

export default Header;