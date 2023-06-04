import mongoose from "mongoose";
import { connectDB } from "@utils/connectDB.js";
import HeadingLink from "@components/HeadingLink"

const getPaintings = async () => {
  try {
    await connectDB();
    const paintings = mongoose.connection.collection("paintings");
    const data = await paintings.find({}).toArray();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const Home = async () => {
  const paintings = await getPaintings();
  return (
    <section className="mt-20 px-3 flex flex-col justify-start items-center text-white md:grid md:grid-cols-2 md:gap-5">
      {paintings.map((painting) => (
        <div key={painting._id} className="my-5 w-full">
          <img
            src={painting.Img}
            alt={painting.Title}
            className="w-full h-full rounded-sm mb-3"
          />
          <HeadingLink title={painting.Title} id={painting._id} />
          <p className="mt-3 mb-5 border-l-slate-200 border-l-8 pl-3">
            {painting.Description}
          </p>
          <p className="text-sm">{painting.Price}</p>
        </div>
      ))}
    </section>
  );
};

export default Home;
