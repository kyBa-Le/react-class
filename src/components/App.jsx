import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: "Le Ky Ba",
                email: "lekyba2000hc@gmail.com"
            }
        }
    };

    render() {
        return (
            <div>
                <h1>{this.state.fields.name}</h1>
                <h1>{this.state.fields.email}</h1>
            </div>
        );
    }
}
export default App;