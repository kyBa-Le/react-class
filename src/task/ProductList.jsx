import { useEffect, useState } from "react";
import "./ProductList.css";
import getSampleData from "./Data";

export function ShowProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("products");
        const mergedData = data ? [...getSampleData(), ...JSON.parse(data)] : getSampleData();
        setProducts(mergedData);
        if (!data) {
            localStorage.setItem("products", JSON.stringify(getSampleData()));
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