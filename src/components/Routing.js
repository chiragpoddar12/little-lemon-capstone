import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Menu from "./Menu.js";
import BookTable from "./BookTable.js";
import OrderOnline from "./OrderOnline.js";
import Login from "./Login.js";
import ConfirmationBooking from "./ConfirmationBooking";

function Routing (){
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmationBooking />} />
    </Routes>
    );
}

export default Routing;

