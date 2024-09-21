import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    const { name, cuisines, costForTwo } = resInfo?.cards?.[2]?.card?.card?.info || {};
    
    const menuItems = resInfo?.cards?.find(card => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.find(menuCard => menuCard?.card?.card?.itemCards)?.card?.card?.itemCards;



if (resInfo === null) return <Shimmer/> ;

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h4>{cuisines?.join(', ')} - {costForTwo/100} for two</h4>
        <h3></h3>
        <h2>Menu</h2>
        <ul>
                {menuItems?.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    </li>
                ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu;























    // const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

    // const name = restaurantInfo?.name || "No name available";
    // const cuisines = restaurantInfo?.cuisines?.length ? restaurantInfo.cuisines.join(', ') : "No cuisines available";
    // const costForTwo = restaurantInfo?.costForTwoMessage || "Cost info not available";