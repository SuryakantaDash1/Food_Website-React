import { useContext, useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';


const Header = () => {
    const[buttonName, setButtonName] = useState("Login");

    const {loggedInUser} = useContext(userContext);

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-teal-50 shadow-lg">
            <div className="logo-container">
                <img className='w-28' src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 gap-4'>
                    <li>
                        online: {onlineStatus ? "on" : "off"}
                    </li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact"> Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <li>{loggedInUser}</li>
                    <button className='login' onClick={() => { buttonName === ("Login") ? setButtonName("LogOut") : setButtonName("Login")}}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;