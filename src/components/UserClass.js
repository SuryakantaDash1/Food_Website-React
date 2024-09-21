import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            info:  {
                name: "dommy",
                bio: "dummy"
            }
        }

        console.log(this.props.name + "child constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/SuryakantaDash1"); 
        const json = await data.json();
        console.log(json);
        this.setState({
            info: json,
        })
    }
    render() {
        console.log(this.props.name  + "child render");
        return (
            <div>
                <h1>Name: {this.state.info.name}</h1>
                <h2>Bio: {this.state.info.bio}</h2>
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
