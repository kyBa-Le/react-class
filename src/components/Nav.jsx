import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/count">Count</Link>
                </li>
                <li>
                    <Link to="/area">Area</Link>
                </li>
            </ul>
        </nav>
    );
}