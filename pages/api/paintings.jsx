import mongoose from "mongoose";
import { connectDB } from "../../utils/connectDB.js";


const handler = async (req, res) => {
await connectDB();
  const paintings = mongoose.connection.collection("paintings");
  const data = await paintings.find({}).toArray();
  res.status(200).json({ data });
};

export default handler;
