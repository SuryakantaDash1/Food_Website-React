import React from "react";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }
    componentDidMount() {
        console.log("Parent componentdidmount");
    }
    render() {
        console.log("parent render");
        return (
            <div>
                <UserClass  name = "Surya" />
                <UserClass  name = "skd" />
            </div>
        )
    }
}

























// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";


// class About extends Component {

//     constructor(props) {
//         super(props)
//         console.log("constructor about");
//     }

//     componentDidMount() {
//         console.log("about didmount")
//     }

//     render() {
//         return (
             
//             <div>
//                 <UserClass name = "Surya" />
//             </div>
            
                 
//         )
//     }
// }





// const About = () => {
//     return (
//         <div>
              
//                <UserClass name = "Surya bhai" />
//         </div>
     
//     )
// }

export default About;