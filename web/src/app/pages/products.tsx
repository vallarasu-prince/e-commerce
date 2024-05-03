"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckboxGroup,
  Checkbox,
  NextUIProvider,
  Chip,
  Image,
} from "@nextui-org/react";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import { getProducts } from "./services";
import PageLoader from "./components/pageLoader";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const { status, class: className, payload } = await getProducts();
    if (payload) {
      setProducts(payload);
      setLoading(false);
    }
  };

  if (loading) return <PageLoader />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products?.map((product, index) => (
        <Card key={index} isFooterBlurred>
          <Image
            removeWrapper
            className="object-cover"
            alt={product.title}
            src={product.imgUrl}
          />

          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-medium text-black/60 uppercase font-bold">
                {product.title}
              </p>
              <h4 className="text-black font-medium text-2xl">
                {product?.currency}
                {product.price}
              </h4>
            </div>
            {/* <div>
              <p className="text-black text-tiny">{product?.description}</p>
            </div> */}

            <a href={`/product/${product?._id}`} target="_blank">
              <Button
                className="text-tiny text-white"
                color="primary"
                radius="full"
                size="md"
              >
                Buy Now
              </Button>
            </a>
          </CardFooter>
        </Card>
        // <Card key={index} className="border-none">
        //   <CardBody>
        //     <Image
        //       className="w-full h-full"
        //       width={100}
        //       height={100}
        // alt={product.title}
        // src={product.imgUrl}
        //     />
        //   </CardBody>
        //   <CardFooter className="justify-between">
        //     <b className="font-bold text-large">{product.title}</b>
        //     <p className="text-medium font-bold">{product.price}</p>
        //   </CardFooter>

        //   <p className="text-medium mb-5">{product?.description}</p>
        //   <div className="flex justify-around mb-10">
        //     <p>Sizes</p>
        //     {product?.sizes?.map((size) => {
        //       return (
        //         <Chip radius="sm" variant="shadow" key={size}>
        //           {size}
        //         </Chip>
        //       );
        //     })}
        //   </div>
        // <a href={`/product/${product?._id}`} target="_blank">
        //   <Button type="button" color="primary" variant="bordered">
        //     Buy Now
        //   </Button>
        // </a>
        // </Card>
      ))}
    </div>
  );
};

export default Products;
