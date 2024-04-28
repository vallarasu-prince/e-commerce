"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/16/solid";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      _id: "01",
      title: "T-Shirts",
      description:
        "Classic plain t-shirts suitable for everyday wear. Made from comfortable cotton fabric.",
      imgUrl:
        "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg",
      actualPrice: 5.5,
      price: 5.5,
      size: "XL",
      quantity: 1,
    },
    {
      _id: "01",
      title: "T-Shirts",
      description:
        "Classic plain t-shirts suitable for everyday wear. Made from comfortable cotton fabric.",
      imgUrl:
        "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg",
      actualPrice: 5.5,
      price: 5.5,
      size: "XL",
      quantity: 1,
    },
  ]);

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Remove item at index
    setCartItems(updatedCartItems);
  };

  var totalPrice = cartItems.reduce(
    (acc, item) => acc + item.actualPrice * item.quantity,
    0
  );

  // Function to increase quantity of an item
  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    updatedCartItems[index].price =
      updatedCartItems[index].actualPrice * updatedCartItems[index].quantity;
    setCartItems(updatedCartItems);
  };

  // Function to decrease quantity of an item
  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      updatedCartItems[index].price -= updatedCartItems[index].actualPrice;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="bg-background">
      <Card>
        <CardHeader>
          <h2 className="text-2xl">Shopping Cart</h2>
        </CardHeader>
        <CardBody>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Image
                      width={100}
                      height={100}
                      src={item.imgUrl}
                      alt={item.title}
                    />
                  </td>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                    <p>{item.size}</p>
                  </td>
                  <td>
                    <Button size="sm" onClick={() => decreaseQuantity(index)}>
                      -
                    </Button>
                    <span style={{ margin: "0 5px" }}>{item.quantity}</span>
                    <Button size="sm" onClick={() => increaseQuantity(index)}>
                      +
                    </Button>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <Button
                      size="sm"
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      <XMarkIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex justify-end">
          <div className="flex space-x-10">
            <h1 className="font-bold text-2xl">
              Total: ${totalPrice.toFixed(2)}
            </h1>
            <Button variant="bordered" color="primary">
              Checkout
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cart;
