import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Nav from "./components/Nav";
import Routing from "./components/Routing.js";

function App() {
  return (
    <>
        <Nav/>
        <Header/>
        <Routing/>
        <Footer/>
    </>
  );
}

export default App;