import { cookies } from "next/headers";
import { productMap } from "../data/products";

export async function GET(request: Request) {
  const searchParams = request.nextUrl.searchParams;
  const productId = searchParams.get("id");

  const product = productMap[productId];
  try {
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
