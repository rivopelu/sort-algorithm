import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";

export const menuItems = [
  {
    lebel: "Home",
    path: ROUTES.HOME(),
  },

  {
    lebel: "Buble Sort",
    path: ROUTES.BUBLE_SORT(),
  },
  {
    lebel: "Insertion Sort",
    path: ROUTES.INSERTION_SORT(),
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      disableAnimation
      isBordered
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">SORT ALGORITHM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">SORT ALGORITHM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="lg:flex hidden">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to={item.path}
            >
              {item.lebel}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu className="lg:hidden ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to={item.path}
            >
              {item.lebel}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
