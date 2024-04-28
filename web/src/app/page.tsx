import * as React from "react";
import {
  NextUIProvider,
  Navbar,
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Products from "./pages/products";
import App from "./pages/home";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="bg-background">
        <App />
      </main>
    </NextUIProvider>
  );
}
