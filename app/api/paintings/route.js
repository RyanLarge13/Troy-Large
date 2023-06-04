import mongoose from "mongoose";
import { connectDB } from "@utils/connectDB.js";

export const GET = async (req) => {
  try {
    await connectDB();
    const paintings = mongoose.connection.collection("paintings");
    const data = await paintings.find({}).toArray();
    console.log(data)
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to fetch all Prompts", { status: 500 });
  }
};
