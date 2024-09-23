import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
    const[buttonName, setButtonName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        online: {onlineStatus ? "on" : "off"}
                    </li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact"> Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={() => { buttonName === ("Login") ? setButtonName("LogOut") : setButtonName("Login")}}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;