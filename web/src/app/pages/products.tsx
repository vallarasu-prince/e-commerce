import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckboxGroup,
  Checkbox,
  NextUIProvider,
} from "@nextui-org/react";
import Image from "next/image";
import { products } from "../data/products";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((product, index) => (
        <Card key={index} className="bg-black m-5">
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
          {/* <CheckboxGroup label="Sizes" orientation="horizontal" color="primary">
            {product?.sizes?.map((size) => {
              return (
                <Checkbox key={size} value={size}>
                  {size}
                </Checkbox>
              );
            })}
          </CheckboxGroup> */}
          <p className="text-white/100 text-medium mb-10">
            {product?.description}
          </p>
          <Button color="primary" variant="bordered">
            Buy Now
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Products;
