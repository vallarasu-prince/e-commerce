import { products1 } from "@/app/data/products";
import { connectDB } from "../db";
import mongoose from "mongoose";

// Connect to the database
connectDB();

export async function GET(req, res) {
  try {
    // Wait for the database connection to be established
    await mongoose.connection;

    // Access the collection and perform database operations
    const productsCollection = mongoose.connection.collection("products");
    var products = await productsCollection.find({}).toArray();

    if (products.length <= 0) {
      productsCollection.insertMany(products1);
      products = await productsCollection.find({}).toArray();
    }

    const payload = {
      status: 1,
      cls: "success",
      msg: "Success",
      payload: products,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
