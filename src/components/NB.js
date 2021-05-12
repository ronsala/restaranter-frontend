import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import Icon from "@material-tailwind/react/Icon";

export default function NB() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="yellow" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>Navbar</NavbarBrand>
          {/* <NavbarToggler color="white" onClick={() => setOpenMenu(!openMenu)} ripple="light" /> */}
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavItem
              active="light"
              href="#navbar"
              ripple="light"
            >
              <Icon name="RESTAURANTS" size="xl" />
              Discover
            </NavItem>
            <NavItem href="#navbar" ripple="light">
              <Icon name="account_circle" size="xl" />
              Profile
            </NavItem>
            <NavItem href="#navbar" ripple="light">
              <Icon name="settings" size="xl" />
              Settings
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}