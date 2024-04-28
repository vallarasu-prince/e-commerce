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
  Chip,
  Image,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import PageLoader from "@/app/pages/components/pageLoader";

export const Product = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const productId = params?.id;
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchData(productId);
  }, [productId]);

  const fetchData = async (id) => {
    setLoading(true);
    setError(null);

    const { payload } = await getProduct(id);
    setProduct(payload);
    setLoading(false);
  };

  const handleAddToCart = () => {
    const newItem = { ...product, quantity: 1 };
    setCartItems([...cartItems, newItem]);
    setDrawerOpen(true);
  };

  const increaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity++;
    setCartItems(updatedItems);
  };

  const proceedToPayment = () => {
    // Implement your logic for proceeding to payment
    console.log("Proceeding to payment with items:", cartItems);
  };

  if (loading) return <PageLoader />;

  const onClose = async () => {
    setDrawerOpen(false);
  };
  return (
    product && (
      <>
        <div className="bg-background">
          <Card>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Image src={product?.imgUrl} alt={product?.title} />
                <div>
                  <CardHeader className="text-xl font-bold" >{product?.title}</CardHeader>
                  <CardBody>
                    <p className="mb-5">{product?.description}</p>
                    <div>
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
                    </div>
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
        <Modal
          onClose={onClose}
          isOpen={drawerOpen}
          placement="top"
          className="max-w-fit"
        >
          <ModalContent>
            <ModalBody>
              <Card title="Cart">
                {cartItems.map((item, index) => (
                  <Card key={index}>
                    <CardBody>
                      <Image src={item.imgUrl} alt={item.title} />
                      <CardHeader>{item.title}</CardHeader>
                      <CardBody>
                        <p>{item.description}</p>
                        <Button
                          onClick={() => increaseQuantity(index)}
                          color="primary"
                          variant="outlined"
                        >
                          Increase Quantity
                        </Button>
                        <p>Quantity: {item.quantity}</p>
                      </CardBody>
                    </CardBody>
                  </Card>
                ))}
                <Button onClick={proceedToPayment} color="success">
                  Proceed to Payment
                </Button>
              </Card>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  );
};

export default Product;
