import React, { useState } from "react";
import "./Navbar.css";

import Toggler from "./Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/info";
import { ClassNames } from "@emotion/react";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: info.initials,
    type: "initials",
    to: "/",
    active: "home",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];
export interface NavBarProps {
  darkMode: boolean;
  handleClick: () => void;
}
export default function Navbar({ darkMode, handleClick }: NavBarProps) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/" ? "home" : location.pathname.slice(1, location.pathname.length),
  );

  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ listStyleType: "none" }}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}>
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            // className={link.active === active && !link.type && "active"}
            sx={{ borderImageSource: info.gradient }}>
            <Link to={link.to} onClick={() => setActive(link.active)}>
              {!link.type && <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
