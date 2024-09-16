import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurant, setRestaurant] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = resList.filter((res) => res.info.avgRating>4)
                    setRestaurant(filteredList);
                }}
                
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    restaurant.map(rest => (
                    <RestaurantCard key={rest.info.id} resData={rest}/>
                    )
                )}
            </div>
        </div>
    )
}


export default Body;