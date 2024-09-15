const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map(rest => (
                    <RestaurantCard key={rest.info.id} resData={rest}/>
                    )
                )}
            </div>
        </div>
    )
}


export default Body;