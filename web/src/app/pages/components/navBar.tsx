import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const NavBar = () => {
  const menuItems = [
    {
      key: "products",
      label: "Products",
      href: "#",
    },
    {
      key: "aboutUs",
      label: "AboutUs",
      href: "#",
    },
    {
      key: "contact",
      label: "Contact",
      href: "#",
    },
  ];

  return (
    <>
      <Navbar className="sticky">
        <NavbarBrand>
          <p className="font-bold text-inherit">V Store</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems?.map((menuItem) => {
            return (
              <NavbarItem key={menuItem?.key}>
                <Link
                  className="text-tiny"
                  color="foreground"
                  href={menuItem?.href}
                >
                  {menuItem?.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavBar;
