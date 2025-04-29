import { useRef, useState } from "react";
import "./FormProduct.css";

export function FormProduct() {
    const [inputs, setInputs] = useState({});

    const fileInputRef = useRef(null);

    const resetFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        setInputs(values => ({...values, image:""}));
    };


    const handleChange = (event) => {
        const {name,value} = event.target;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const existingData = JSON.parse(localStorage.getItem("products")) || [];
        const updatedData = [...existingData, inputs];
        localStorage.setItem("products", JSON.stringify(updatedData));
        alert("Product saved successfully!");
        window.location.href = "/product/show";

    }

    // handle file
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result;
            setInputs(values => ({...values, image:base64String}));
        };

        reader.readAsDataURL(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input
                    type="text"
                    name="id"
                    value={inputs.id || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Image:
                <input type="file" onChange={handleFileChange} ref={fileInputRef} />
                {inputs.image && (
                    <div>
                        <img src={inputs.image} alt="Uploaded" style={{ width: "200px" }} />
                        <button onClick={resetFileInput}>Reset File</button>
                    </div>
                )}
            </label>
            <br />
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={inputs.price || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}