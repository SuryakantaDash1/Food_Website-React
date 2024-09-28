import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data}) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  }
  return (
    <div>
        <div className="w-6/12 bg-teal-50 shadow-lg p-4 mx-auto my-4 ">

            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span font-bold text-lg>{data.title} ({data.itemCount })</span>
                <span>arrow symbol</span>
            </div>

             {/** Accordian Body */}
             { showItems && <ItemList items={data.itemCards}/> }
        </div>
    
    </div>
  )
}

export default RestaurantCategory