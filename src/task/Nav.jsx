import { Link } from "react-router-dom";
import "./Nav.css";
import { useLocation } from "react-router-dom";
function isActive(path, currentPath) {
    return path === currentPath ? "active" : "";
}

export function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="navbar">
            <Link to="/product/add" className={`nav-link ${isActive("/product/add", currentPath)}`} id="link-add">Add</Link>
            <Link to="/product/show" className={`nav-link ${isActive("/product/show", currentPath)}`} id="link-show">Show</Link>
            <Link to="/order" className={`nav-link ${isActive("/order", currentPath)}`} id="link-order">Order</Link>
            <Link to="/about" className={`nav-link ${isActive("/about", currentPath)}`} id="link-about">About</Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact", currentPath)}`} id="link-contact">Contact</Link>
        </nav>
    );
}
