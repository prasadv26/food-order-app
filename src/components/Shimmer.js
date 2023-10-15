/*
return (
    <div className="resto-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{locality}</h3>
      <h4>rating : {avgRating}</h4>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
*/
// create shimmer ui effect for above code

const Shimmer = () => {
  return (
    <>
      <div className="flex justify-center">
        <span className="bg-gray-300 w-1/3 h-10 rounded-lg mx-3"> </span>
        <span className="bg-gray-200 w-28 h-10 rounded-lg"></span>
      </div>
      <div className="flex flex-wrap justify-center">
        {Array(9)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="bg-gray-300 w-52 h-96 m-4 p-2 text-center rounded-lg"
            >
              <div className="bg-gray-200 w-48 h-48 rounded-lg">{""}</div>
              <div className="bg-gray-200 w-48 h-10 rounded-xl my-2">{""}</div>
              <div className="bg-gray-200 w-1/2 h-10 rounded-2xl text-center my-1">
                {""}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
