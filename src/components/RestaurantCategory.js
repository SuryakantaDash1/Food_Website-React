import ItemList from "./ItemList";



const RestaurantCategory = ({data}) => {
console.log("category Data:" , data);
  return (
    <div>
        <div className="w-6/12 bg-teal-50 shadow-lg p-4 mx-auto my-4 ">

            <div className="flex justify-between">
                <span font-bold text-lg>{data.title} ({data.itemCount })</span>
                <span>arrow symbol</span>
            </div>

             {/** Accordian Body */}
             <ItemList items={data.itemCards}/>
        </div>
    
    </div>
  )
}

export default RestaurantCategory