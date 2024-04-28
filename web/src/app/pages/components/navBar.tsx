"use client";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      key: "products",
      label: "Products",
      href: "/",
    },
    {
      key: "aboutUs",
      label: "AboutUs",
      href: "/about",
    },
    {
      key: "contact",
      label: "Contact",
      href: "#",
    },
  ];

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="sticky text-primary text-lg font-semibold bg-background"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">V Store</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems?.map((menuItem) => {
            return (
              <NavbarItem key={menuItem?.key}>
                <Link className="text-tiny" href={menuItem?.href}>
                  {menuItem?.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              className="hidden lg:flex"
              as={Link}
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button as={Link} href="/cart" variant="flat">
              <ShoppingBagIcon />
              Cart
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="text-primary">
          {menuItems?.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="my-1" >
              <Link className="w-full" color="primary" href={item?.href}>
                {item?.label}
              </Link>
              <Divider/>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavBar;
