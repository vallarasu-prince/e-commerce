import axios from "axios";

export const addCart = async (cart: any) => {
  try {
    const res = await axios.post(`/api/cart/add`, cart, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
export const getCarts = async () => {
  try {
    const res = await axios.get(`/api/cart`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
