import mongoose from "mongoose";
import { connectDB } from "@utils/connectDB.js";
import MasonryGrid from "@components/MasonryGrid.jsx";

const getImages = async () => {
  try {
    await connectDB();
    const paintings = mongoose.connection.collection("paintings");
    const data = await paintings.find({}).toArray();
    const images = data.map((painting) => {
    	return {img: painting.Img, id: painting._id}
    });
    console.log(images);
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
