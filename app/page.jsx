import mongoose from "mongoose";
import { connectDB } from "@utils/connectDB.js";
import HeadingLink from "@components/HeadingLink";

const getPaintings = async () => {
  try {
    await connectDB();
    const paintings = mongoose.connection.collection("paintings");
    const data = await paintings.find({}).toArray();
    return data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const Home = async () => {
  const paintings = await getPaintings();
  return (
    <section className="mt-20 px-3 flex flex-col justify-center items-start text-white md:grid md:grid-cols-2 md:gap-10 md:px-10 lg:grid lg:grid-cols-3 lg:gap-20">
      {paintings.map((painting) => (
        <div key={painting._id} className="my-10 md:my-5">
          {painting.Sold && (
            <p className="bg-red-400 px-3 rounded-sm min-w-min mb-1 text-slate-100 font-bold">
              Sold
            </p>
          )}
          <img
            src={painting.Img}
            alt={painting.Title}
            className="w-full h-full object-cover rounded-sm mb-3"
          />
          <HeadingLink title={painting.Title} id={painting._id.toString()} />
          <p className="mt-3 mb-5 border-l-slate-200 border-l-8 pl-3 lg:text-2xl">
            {painting.Description}
          </p>
          <p className="text-sm">{painting.Price}</p>
        </div>
      ))}
    </section>
  );
};

export default Home;
