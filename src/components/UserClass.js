import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }

        console.log(this.props.name + "child constructor");
    }

    componentDidMount() {
        console.log(this.props.name +"child componentdid mount");
    }
    render() {
        console.log(this.props.name  + "child render");
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count</button>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count - 1
                    })
                }}>Count -</button>
            </div>
        )
    }
}

export default UserClass;
