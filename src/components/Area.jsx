import { useState } from "react";

export function CalculateArea() {
    const [witdth, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);

    const calculateArea = () => {
        setArea(witdth * height);
    };

    return (
        <div>
            <p>Width</p>
            <input
                type="number"
                value={witdth}
                onChange={(e) => setWidth(Number(e.target.value))}
            />
            <p>Height</p>
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
            />
            <button onClick={calculateArea}>Calculate Area</button>
            <p>Area: {area}</p>
        </div>
    )
}