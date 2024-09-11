import React from 'react';
import ReactDOM from 'react-dom/client';



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resData}) => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className='res-logo' src="https://img.freepik.com/free-photo/plate-biryani-with-bowl-rice-bowl-food-table_505751-3814.jpg" alt="res-logo" />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(",")}</h4>
            <h4>{resData.data.costForTwo / 100}FOR TWO</h4>
            <h4>{resData.data}</h4>
        </div>
    )
}

const resObj = [
    
]

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resData = {resObj} />
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);