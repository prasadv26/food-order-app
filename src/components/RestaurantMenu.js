import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import MenuItems from "./MenuItem";

import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

export default RestaurantMenu = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchRestaurant();
  }, []);

  async function fetchRestaurant() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    setItems(data || []);
  }

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const cartItems = useSelector((store) => store.cart.items);
  const [buttonText, setButtonText] = useState("Add");

  //sometimes get data in card[2] or cards[1]

  const menuItems =
    items?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards ||
    items?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  //items?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  // console.log(items);

  return items?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-between mx-24 p-10">
        <div>
          <h1 className="text-5xl first-letter:text-7xl first-letter:text-red-600	 my-5">
            {items?.data?.cards[0]?.card?.card?.info?.name}
          </h1>
          {items?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.carousel ? (
            <div>
              <img
                className="h-96 w-96 text-center rounded-lg m-10"
                src={
                  `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/` +
                  items?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[1]?.card?.card?.carousel[0]?.creativeId
                }
                alt="menu image carousal"
              />
            </div>
          ) : null}

          <p>
            <span className="text-lg">Rating : </span>
            <span className="text-2xl m-2">
              {items?.data?.cards[0]?.card?.card?.info?.avgRating}
            </span>
          </p>
          <h2>
            {items?.data?.cards[0]?.card?.card?.info?.areaName + ", "}
            {items?.data?.cards[0]?.card?.card?.info?.city}
          </h2>
        </div>
        <div className="flex-col rounded-mdp-2 m-3">
          <h2 className="text-xl text-center text-white ">MENU</h2>
          <div>
            {menuItems?.map((item) => {
              const info = item.card.info;
              return (
                <div key={info.id} className="flex">
                  <MenuItems {...info} />
                  <button
                    className="bg-green-500 h-10 w-12 rounded-lg m-1 p-2 hover:bg-green-300 text-white"
                    onClick={() => {
                      handleAddItem(info);
                    }}
                  >
                    Add
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
