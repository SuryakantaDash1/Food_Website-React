import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.8441427&lng=85.12070609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const restaurantList = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurant(restaurantList);
    }

    
    
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating>4
                    )
                    setListOfRestaurant(filteredList);
                }}
                
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )
                )}
            </div>
        </div>
    )
}


export default Body;