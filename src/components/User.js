import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    return (
       
        <div className="user-card">
            <h1>count = {count}</h1>
            <h2>{props.name}</h2>
            <h3>Locality: Kendrapara</h3>
            <h3>Contact: @suryakd21</h3>
        </div>
    )
}

export default User;