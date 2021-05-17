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
import LeadText from "@material-tailwind/react/LeadText";
import { Restaurant } from '../features/restaurants/Restaurant';

export default function NB() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="red">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <LeadText color="">
              R e s t a u r a n t e r
            </LeadText>
          </NavbarBrand>
          {/* <NavbarToggler color="white" onClick={() => setOpenMenu(!openMenu)} ripple="light" /> */}
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavItem
              class="material-icons-round"
              active="light"
              href="#navbar"
              ripple="light"
            >
              <Icon 
                name="restaurant" 
                size="xl" 
              />
              RESTAURANTS
            </NavItem>
            <NavItem href="#navbar" ripple="light">
              <Icon name="account_circle" size="xl" />
              Sign Up
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}