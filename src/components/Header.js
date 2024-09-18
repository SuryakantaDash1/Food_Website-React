import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';


const Header = () => {
    const[buttonName, setButtonName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={() => { buttonName === ("Login") ? setButtonName("LogOut") : setButtonName("Login")}}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;