import { Component } from "react";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increase = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <h1>Giá trị: {this.state.count}</h1>
                <button onClick={this.increase}>Tăng</button>
            </div>
        )
    }
}