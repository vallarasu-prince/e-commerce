import { cookies } from "next/headers";
import { request } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { params } = res;
  const { id: productId } = params;

  try {
    await mongoose.Connection;
    // Access the collection and perform database operations
    const productCollection = mongoose.connection.collection("products");
    var product = await productCollection.findOne({ _id: productId });

    const payload = {
      status: 1,
      cls: "success",
      msg: "Success",
      payload: product,
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
