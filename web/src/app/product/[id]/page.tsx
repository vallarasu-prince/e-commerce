"use client";
import React, { useEffect, useState } from "react";
import { getProduct } from "../services";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Image,
} from "@nextui-org/react";
import PageLoader from "@/app/pages/components/pageLoader";
import { addCart } from "@/app/cart/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData(params?.id);
  }, [params?.id]);

  const fetchData = async (id) => {
    setLoading(true);

    try {
      const { payload } = await getProduct(id);
      setProduct(payload);
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    const newItem = { ...product, quantity: 1 };

    try {
      const { status, cls, msg, payload } = await addCart(newItem);
      if (msg) {
        toast.success(msg);
      }
    } catch (error) {
      toast.error("Failed to add product to cart. Please try again later.");
    }
  };

  if (loading) return <PageLoader />;

  return (
    product && (
      <>
        <div className="bg-background">
          <Card>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Image src={product?.imgUrl} alt={product?.title} />
                <div>
                  <CardHeader className="text-xl font-bold">
                    {product?.title}
                  </CardHeader>
                  <CardBody>
                    <p className="mb-5">{product?.description}</p>
                    <h1 className="mb-5 font-bold text-2xl">
                      {product?.currency} {product?.price}
                    </h1>
                    {/* <div>
                      <CheckboxGroup
                        label="Sizes"
                        orientation="horizontal"
                        color="primary"
                      >
                        {product?.sizes?.map((size) => (
                          <Checkbox key={size} value={size}>
                            {size}
                          </Checkbox>
                        ))}
                      </CheckboxGroup>
                    </div> */}
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      color="primary"
                      onClick={handleAddToCart}
                      disabled={loading}
                    >
                      Add to cart
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <ToastContainer />
      </>
    )
  );
};

export default Product;
