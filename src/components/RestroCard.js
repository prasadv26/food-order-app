import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestroCard = ({
  id,
  name,
  cloudinaryImageId,
  locality,
  avgRating,
  cuisines,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-52 h-96 m-4 p-2 ">
      for {user.name}
      <Link to={`/restaurant/${id}`}>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          className="w-48 h-48 text-center rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300"
        />
        <p className="font-semibold text-center my-2 text-lg delay-150 hover:scale-110 duration-300">
          {name}
        </p>
      </Link>
      <p className="font-medium text-center text-sm">{locality}</p>
      <p className="text-center">
        <span className="font-light text-center text-sm">Rating : </span>
        <span className="font-medium">{avgRating}</span>
      </p>
      <p className="font-light text-xs text-center">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestroCard;
