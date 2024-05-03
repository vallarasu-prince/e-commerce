// Import necessary modules
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { connectDB } from "../../db";
import * as uuid from "uuid";

connectDB();
// POST handler
export async function POST(req, res) {
  const data = await req.json();
  try {
    // Connect to MongoDB
    await mongoose.connection;

    // Access the collection and perform database operations
    const cartsCollection = mongoose.connection.collection("carts");
    const cartItem = {...data, _id: uuid.v4()}
    const cart = await cartsCollection.insertOne(cartItem);

    // Response payload
    const payload = {
      status: 1,
      cls: "success",
      msg: "Product added to cart successfully!",
      payload: {},
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
