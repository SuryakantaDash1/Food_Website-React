import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="user-card">
            <h1>count =</h1>
            <h2>{this.props.name}</h2>
            <h3>Locality: Kendrapara</h3>
            <h3>Contact: @suryakd21</h3>
        </div>
        )
    }
}

export default UserClass;