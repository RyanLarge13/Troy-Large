import LikeBtn from "../components/LikeBtn";

const getPaintings = async () => {
  const data = await fetch("http://localhost:3000/api/paintings");
  return data.json();
};

const Home = async () => {
  const paintings = await getPaintings();
  return (
    <>
      <div className="flex flex-col">
        {paintings.data.map((painting) => (
          <div
            key={painting._id}
            className="my-20 flex flex-col justify-center items-center text-center"
          >
            <a href={`/painting/${painting._id}`}>
              <img
                src={painting.Img}
                className="w-full h-[300px] object-cover object-center"
              />
            </a>
            <div className="p-2">
              <h2 className="font-bold mt-2 mb-5 text-wrap mx-10">
                {painting.Title}
              </h2>
              <h3>{painting.Description}</h3>
              <p>{painting.Price}</p>
              <div className="">
                <p>{painting.Likes?.length}</p>
                <LikeBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
