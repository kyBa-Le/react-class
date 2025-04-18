import { Item } from "../components/Item";

export function Task1() {
    return (
        <div id="container">
            <Item className="item" link={"https://img.freepik.com/premium-photo/random-image_590832-5730.jpg"} name={"number 1"} price={10000}></Item>
            <Item className="item" link={"https://img.freepik.com/premium-photo/random-image_590832-5730.jpg"} name={"number 2"} price={20000}></Item>
            <Item className="item" link={"https://img.freepik.com/premium-photo/random-image_590832-5730.jpg"} name={"number 3"} price={30000}></Item>
            <Item className="item" link={"https://img.freepik.com/premium-photo/random-image_590832-5730.jpg"} name={"number 4"} price={40000}></Item>
            <Item className="item" link={"https://img.freepik.com/premium-photo/random-image_590832-5730.jpg"} name={"number 5"} price={50000}></Item>
            <Item className="item" link={"https://img.freepik.com/premium-photo/random-image_590832-5730.jpg"} name={"number 5"} price={50000}></Item>
        </div>
    )
}