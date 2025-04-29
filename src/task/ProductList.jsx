import { useEffect, useState } from "react";
import "./ProductList.css";

export function ShowProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("products");
        console.log(data);
        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);
    
    return (
        <div className="container">
            {products.map(product => {
                return (
                    <div key={product.id} className="card">
                        <img src={product.image} style={{ width: "200px", height: "auto" }} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                );
            })}
        </div>
    );
}