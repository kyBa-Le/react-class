import { useState } from 'react';

export function MyForm() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("You entered: " + "name is " + inputs.username + " and the age is: " + inputs.age);
    }



    return (
        <form onSubmit={handleSubmit}>
            <h1 id='name-hehe'>Username: {inputs.username}</h1>
            <h1 id='age-hehe'>Age: {inputs.age}</h1>
            <label>
                Enter your name
                <input onChange={handleChange} value={inputs.username || ""} type="text" name="username"/>
            </label>
            <label>Enter your age:
                <input value={inputs.age || ""} onChange={handleChange} type="number" name="age" />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );

}