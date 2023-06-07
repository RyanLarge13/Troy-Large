import mongoose from "mongoose";
import { connectDB } from "@utils/connectDB.js";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const id = params.id;
    console.log(id);
    const paintings = mongoose.connection.collection("paintings");
    const data = await paintings.find({}).toArray();
    const painting = data.filter((pnting) => pnting._id.toString() === id);
    return new Response(JSON.stringify(painting), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Error fetching painting", { status: 400 });
  }
};
