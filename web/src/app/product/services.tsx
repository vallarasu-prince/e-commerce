import { NextRequest, NextResponse } from "next/server";

export async function getProduct(id) {
  const res = await fetch(`/api/products/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
}
