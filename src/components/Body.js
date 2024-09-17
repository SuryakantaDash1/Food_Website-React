import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.8441427&lng=85.12070609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setRestaurant(json.data.cards);
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("");
            
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         https://www.swiggy.com/mapi/homepage/getCards?lat=20.4541456&lng=85.90361790000001
    //         const json = await response.json();
    //         console.log(json);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };
    
    
    
    
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
                    <RestaurantCard key={rest.data.id} resData={rest}/>
                    )
                )}
            </div>
        </div>
    )
}


export default Body;