import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer/> ;

    const { name, cuisines, costForTwo } = resInfo?.cards?.[2]?.card?.card?.info || {};
    
    const menuItems = resInfo?.cards?.find(card => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.find(menuCard => menuCard?.card?.card?.itemCards)
    ?.card?.card?.itemCards || [];

    // console.log('Menu Items:', menuItems);
    // console.log('Restaurant Info:', resInfo);

    const categories = resInfo?.cards?.find(card => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(categoryCard => categoryCard?.card?.card?.title)
    ?.map(categoryCard => ({
        title: categoryCard?.card?.card?.title,
        itemCount: categoryCard?.card?.card?.itemCards?.length || 0
    })) || [];

    console.log(categories);



  return (
    <div className="text-center">
        <h1 className='font-bold my-6 text-xl'>{name}</h1>
        <h4 className='font-bold text-lg'>{cuisines?.join(', ')} - {costForTwo/100} for two</h4>
        {categories.map((category) =>
             <RestaurantCategory data= {category}/>
        )}
    </div>
  )
}

export default RestaurantMenu;









 {/* <h2>Menu</h2>
        <ul>
                {menuItems?.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    </li>
                ))}
        </ul> */}























    // const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

    // const name = restaurantInfo?.name || "No name available";
    // const cuisines = restaurantInfo?.cuisines?.length ? restaurantInfo.cuisines.join(', ') : "No cuisines available";
    // const costForTwo = restaurantInfo?.costForTwoMessage || "Cost info not available";