import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem} from '../utils/cartSlice';

const ItemList = ({items}) => {
    
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
       {items.map((item) => (
        <div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"  key={item.card.info.id}>
        
            <div className="w-9/12">
              <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>- ₹{item.card.info.price/100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg"
              onClick = {() => handleAddItem(item)}>
                Add +
              </button>
            </div>
              <img src={CDN_URL + item.card.info.imageId} alt="" className="w-full" />  
            </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList