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
} from "@nextui-org/react";
import Image from "next/image";
import { products } from "../data/products";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products?.map((product, index) => (
        <Card key={index} className="px-5 py-5 border-none">
          <CardBody>
            <Image
              className="w-full h-full"
              width={100}
              height={100}
              alt={product.title}
              src={product.imgUrl}
            />
          </CardBody>
          <CardFooter className="justify-between">
            <b className="font-bold text-large">{product.title}</b>
            <p className="text-medium font-bold">{product.price}</p>
          </CardFooter>

          <p className="text-medium mb-5">{product?.description}</p>
          <div className="flex justify-around mb-10">
            <p>Sizes</p>
            {product?.sizes?.map((size) => {
              return (
                <Chip radius="sm" variant="shadow" key={size}>
                  {size}
                </Chip>
              );
            })}
          </div>
          <a href={`/product/${product?._id}`} target="_blank">
            <Button type="button" color="primary" variant="bordered">
              Buy Now
            </Button>
          </a>
        </Card>
      ))}
    </div>
  );
};

export default Products;
