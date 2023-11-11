import mongoose from "mongoose";
import { connectDB } from "@utils/connectDB.js";
import MasonryGrid from "@components/MasonryGrid.jsx";

export const metadata = {
  title: "Troy Large - gallery",
  description:
    "View the gallery of Troy Large, and enjoy a collection of purchasable pastel art from an amazing painter!",
};

const getImages = async () => {
  try {
    await connectDB();
    const paintings = mongoose.connection.collection("paintings");
    const data = await paintings.find({}).toArray();
    const images = data.map((painting) => {
      const obj = { img: painting.Img, id: painting._id };
      return obj;
    });
    return images;
  } catch (err) {
    console.log(err);
    return;
  }
};

const Gallery = async () => {
  const images = await getImages();
  return (
    <section className="p-3">
      <MasonryGrid images={images} />
    </section>
  );
};

export default Gallery;
