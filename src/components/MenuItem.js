export default MenuItems = ({ isVeg, imageId, name, description, price }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-black h-6 mt-6">{isVeg ? "🟢" : "🔴"}</div>
      {imageId ? (
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt="image"
          className="h-24 w-24 mx-4 rounded-md p-2"
        />
      ) : null}

      <div className="p-2 flex-col w-96">
        <h2 className="font-semibold">{name}</h2>
        {description ? (
          <p className="font-extralight flex-wrap overflow-auto">
            {description}
          </p>
        ) : null}
      </div>
      {price ? <h3 className="mx-6 p-2">Rs {price / 100.0}</h3> : null}
    </div>
  );
};
