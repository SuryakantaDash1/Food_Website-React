import React from 'react';
import ReactDOM from 'react-dom/client';



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resData}) => {
    
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+resData.info.cloudinaryImageId} alt="res-logo" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} ⭐</h4>
        </div>
    )
}


const resList = [
    {
        "info": {
          "id": "603014",
          "name": "Paradise Biryani House",
          "cloudinaryImageId": "h3nyqimdeodyjtoky4j7",
          "locality": "Chandi Chhaka",
          "areaName": "Biju Patnaik Colony",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Chinese",
            "North Indian",
            "Biryani",
            "Indian"
          ],
          "avgRating": 2,
          "parentId": "155089",
          "avgRatingString": "2.0",
          "totalRatingsString": "3",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 6.1,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-15 23:56:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=603014",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "476995",
          "name": "The Cake Shop",
          "cloudinaryImageId": "jjggnwwctffkcfczzxop",
          "locality": "Jagannath Road",
          "areaName": "Kalyani Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Indian",
            "Pastas",
            "Biryani"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "206299",
          "avgRatingString": "4.3",
          "totalRatingsString": "2",
          "sla": {
            "deliveryTime": 42,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-16 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=476995",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "775210",
          "name": "Ruhi's Breakfast",
          "cloudinaryImageId": "f470257d89530409fe832696ac5c8a52",
          "locality": "Kesharpur Rd",
          "areaName": "College Square",
          "costForTwo": "₹240 for two",
          "cuisines": [
            "Indian"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "462314",
          "avgRatingString": "4.6",
          "totalRatingsString": "39",
          "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-15 12:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=775210",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "388995",
          "name": "Angel Cake Shop",
          "cloudinaryImageId": "h5jr5xawmu2qs1luxtse",
          "locality": "Netaji Nagar",
          "areaName": "Kalyani Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Desserts",
            "Bakery"
          ],
          "avgRating": 3.8,
          "veg": true,
          "parentId": "240958",
          "avgRatingString": "3.8",
          "totalRatingsString": "50",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-16 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=388995",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "430302",
          "name": "Hotel Ankit",
          "cloudinaryImageId": "zhz7qu5sekqcdrgah3em",
          "locality": "Meria Bazar",
          "areaName": "Siba Bazaar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Indian",
            "Chinese",
            "Fast Food"
          ],
          "parentId": "98008",
          "avgRatingString": "--",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-15 22:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=430302",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "311681",
          "name": "(New Odia Dalma's) By Akhandalamani Hotel",
          "cloudinaryImageId": "mxl1qbdlh2v9pjwu2g5u",
          "locality": "Professors Colony",
          "areaName": "Mangalabag",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "Chinese"
          ],
          "avgRating": 3.8,
          "parentId": "22622",
          "avgRatingString": "3.8",
          "totalRatingsString": "2.3K+",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-15 16:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=311681",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "528682",
          "name": "Bijaya's Kitchen",
          "cloudinaryImageId": "z3hrsc5btqry5sha2kab",
          "locality": "Siba Bazar",
          "areaName": "Siba Bazaar",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Chinese",
            "Snacks",
            "Indian"
          ],
          "parentId": "318547",
          "avgRatingString": "--",
          "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 3.7,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "3.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-15 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "35% OFF",
            "subHeader": "UPTO ₹175",
            "discountTag": "SAVE BIG"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=528682",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "810513",
          "name": " Tasty Junction",
          "cloudinaryImageId": "330f7d11d515aad8269ab4e729e339e4",
          "locality": "Durga azar",
          "areaName": "College Square",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Chinese",
            "Desserts",
            "Chaat",
            "Street Food",
            "Pizzas",
            "Pastas",
            "Home Food",
            "Waffle",
            "Fast Food",
            "Burgers"
          ],
          "avgRating": 4.2,
          "parentId": "202052",
          "avgRatingString": "4.2",
          "totalRatingsString": "79",
          "sla": {
            "deliveryTime": 52,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "4.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-16 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹40 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=810513",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "603022",
          "name": "Hotel Samrat",
          "cloudinaryImageId": "juy1zafgkvgbsbbda1qp",
          "locality": "Chandi Chowk",
          "areaName": "Biju Patnaik Colony",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Pizzas",
            "Fast Food",
            "Snacks"
          ],
          "avgRating": 2,
          "parentId": "101897",
          "avgRatingString": "2.0",
          "totalRatingsString": "10",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 6,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "6.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-15 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹250",
            "discountTag": "SAVE BIG"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=603022",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      }
]
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

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);

