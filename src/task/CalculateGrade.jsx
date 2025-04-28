import { useState } from "react";

export function Calculate() {
    const [inputs, setInputs] = useState({});
    const [rank, setRank] = useState("");
    const [average, setAverage] = useState(0);
    const [errors, setError] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));

        const numberValue = parseFloat(value);
        if (numberValue > 10 || numberValue<0) {
            setError(values => ({...values, [name]:"You entered the invalid value!"}));
        }else {
            setError(values => ({ ...values, [name]: "" }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs) {
            const avg = (parseFloat(inputs.math || 0) + parseFloat(inputs.physic || 0)) / 2;
            setAverage(parseFloat(avg.toFixed(2)));

            if (avg >= 9) {
                setRank("SX");
            } else if (avg >= 8) {
                setRank("G");
            } else if (avg >= 7) {
                setRank("K");
            } else {
                setRank("TB");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Math:
                    <input onChange={handleChange} value={inputs.math || ""} type="number" name="math" />
                    <span style={{ color: 'red' }}>{errors.math}</span>
                </label>
                <br />
                <label>
                    Physic:
                    <input onChange={handleChange} value={inputs.physic || ""} type="number" name="physic" />
                    <span style={{ color: 'red' }}>{errors.physic}</span>
                </label>
                <br />
                <button type="submit">OK</button>
                <h2>Average Grade: {average}</h2>
                <h2>Rank: {rank}</h2>
            </div>
        </form>
    );
}
