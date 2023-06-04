import mongoose from "mongoose";
import { connectDB } from "@utils/connectDB.js";

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
    <section className="mt-20 text-white">
      {paintings.map((painting) => (
        <div key={painting._id}>
          <h2>{painting.Title}</h2>
        </div>
      ))}
    </section>
  );
};

export default Home;
