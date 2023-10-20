import { useContext, useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL, restaurantList } from "../constants";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const { user, setUser } = useContext(UserContext);

  async function fetchRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();
    console.log("daat.. ", json);
    console.log(
      "rest",
      (json?.data?.cards[5] || json?.data?.cards[4]).card?.card?.gridElements
        .infoWithStyle.restaurants[0].info.name
    );
    setFilteredRestaurants(
      (json?.data?.cards[5] || json?.data?.cards[4]).card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      (json?.data?.cards[5] || json?.data?.cards[4]).card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  console.log("render");

  const searchRestaurant = (searchText, allRestaurants) => {
    console.log("admin ", allRestaurants);
    const searchedRestaurants = allRestaurants.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    return searchedRestaurants;
  };

  const isOnline = useOnline();
  if (!isOnline)
    return (
      <h2>🔴Seems like you are offline, Check your internet connection..</h2>
    );
  //Not render component if restaurants is null
  //early return
  if (!filteredRestaurants) {
    console.log("returning early");
    return null;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center align-middle">
        <input
          className="focus:bg-gray-200 focus:shadow-indigo-800 focus:drop-shadow-2xl bg-white rounded-lg shadow-lg placeholder:text-center italic mx-2 w-1/3 h-10"
          type="text"
          placeholder="Search Restaurants, Cuisines, Dishes"
          name="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (searchText === "")
              return setFilteredRestaurants(allRestaurants);
            const data = searchRestaurant(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
          onKeyUp={() => {
            if (searchText === "")
              return setFilteredRestaurants(allRestaurants);
          }}
        />
        <button
          className="hover:translate-x-1 transition hover:ease-in-out text-white text-lg delay-150 bg-red-600 hover:bg-red-400 duration-500 rounded-lg w-28 mx-1"
          onClick={() => {
            if (searchText === "")
              return setFilteredRestaurants(allRestaurants);
            const data = searchRestaurant(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        <input
          value={user.name}
          onChange={(e) => {
            setUser({ name: e.target.value, email: "mail@gmail.com" });
          }}
        ></input>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <h1>No Restaurants Found</h1>
      ) : (
        <div className="flex flex-wrap mt-1 p-2 justify-center">
          {filteredRestaurants.map((restaurant) => {
            return <RestroCard {...restaurant.info} key={restaurant.info.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;
