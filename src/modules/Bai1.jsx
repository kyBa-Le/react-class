import { Card } from "../components/Card/Card";
import "./Bai1.css";

export function Camera({number}) {
    const container = [];

    for (let i = 0; i < number; i++) {
        container.push(<Card></Card>);
    }

    return (
        <div className="container">
            {container}
        </div>
    );
}