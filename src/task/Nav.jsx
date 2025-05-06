import { Link } from "react-router-dom";
import "./Nav.css";

export function Nav() {
    return (
        <nav className="navbar">
            <Link to="/product/add" className="nav-link">Add</Link>
            <Link to="/product/show" className="nav-link">Show</Link>
            <Link to="/order" className="nav-link">Order</Link>
        </nav>
    );
}
