import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    // const fetchData = async() => {
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.8441427&lng=85.12070609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );

    //     const json = await data.json();
    //     const restaurantList = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    //     setListOfRestaurant(restaurantList);
    //     setFilteredRestaurant(restaurantList);
    // };

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.8441427&lng=85.12070609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
    
            const json = await data.json();
    
            // const restaurantList = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            const restaurantList = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
            setListOfRestaurant(restaurantList);
            setFilteredRestaurant(restaurantList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false ) return <h1>You are offline</h1>
    
    

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                    <button onClick={() => {
                        const filteredTest = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()))
                        setFilteredRestaurant(filteredTest);
                    }}>Search</button>
                </div>
              

                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating>4
                    )
                    setFilteredRestaurant(filteredList);
                }}
                
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={'restaurants/'+ restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>        
                    )
                )}
            </div>
        </div>
    )
}


export default Body;