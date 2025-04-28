import { useState } from "react";
import "./Menu.css";

export function OrderDrink() {

    const [inputs, setInputs] = useState({});
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState();
    const [budget, setBudget] = useState(0);

    const handleChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        setTotal(prevTotal => isChecked? prevTotal+ parseInt(value): prevTotal-parseInt(value));
    }

    const handleEnterBudget = (event) => {
        setBudget(event.target.value);
        if (budget > total) {
            setMessage("");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (total > budget) {
            setMessage("Your budget is not enough!")
        } else {
            setMessage("Your order is submitted.");
        }
    }

    return (
        <div className="menu-container">
            <img src="menu.png"/>
            <h1>Please choose the items</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input onChange={handleChange} value={12000} name="caphe-sua" type="checkbox" />
                    <p>Caphe sua</p>
                </label>
                <label>
                    <input onChange={handleChange} name="caphe-da" value={10000} type="checkbox" />
                    <p>Caphe da</p>
                </label>
                <label>
                    <input onChange={handleChange} name="sting-dau" value={8000} type="checkbox" />
                    <p>Sting dau</p>
                </label>
                <label>
                    <input onChange={handleChange} name="tra-da" value={2000} type="checkbox" />
                    <p>Tra da</p>
                </label>
                <label>
                    Enter your budget
                    <input onChange={handleEnterBudget} type="number" value={budget}/>
                </label>
                <h3>Total price: {total}</h3>
                <button type="submit" >Order</button>
            </form>
            
            <h1 style={{"color": "red"}}>{message}</h1>
            <h2>Remaining balance: {budget - total}</h2>
        </div>

    );
}