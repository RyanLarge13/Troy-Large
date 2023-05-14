import mongoose from "mongoose";
import { connectDB } from "../../utils/connectDB.js";

const handler = async (req, res) => {
  await connectDB();
  const paintings = mongoose.connection.collection("paintings");
  const data = await paintings.findById(req.params.id);
  res.status(200).json({ data });
};
