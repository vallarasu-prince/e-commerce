import mongoose from "mongoose";
import { connectDB } from "../db";

connectDB();
export async function GET(req:any, res:any) {
  try {
    // Connect to MongoDB
    await mongoose.connection;

    // Access the collection and perform database operations
    const cartsCollection = mongoose.connection.collection("carts");
    const carts = await cartsCollection.find({}).toArray();

    // Response payload
    const payload = {
      status: 1,
      cls: "success",
      msg: "Success",
      payload: carts,
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response("", {
      status: 500,
    });
  }
}
