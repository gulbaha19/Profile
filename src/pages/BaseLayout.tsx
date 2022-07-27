import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import "./BaseLayout.css";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box className={darkMode ? "dark" : "light"}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}>
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/portfolio"} element={<Portfolio />} />
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
}
