import React from "react";
import "./Terminal.module.css";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";
interface TerminalProps {
  text: JSX.Element;
}
function Terminal(props: TerminalProps) {
  const { text } = props;

  return (
    <Box
      component={"section"}
      className={classNames("terminal", "shadowed")}
      width={{ xs: "80%", md: "50%" }}
      borderRadius={"0.5rem"}
      mb={"4rem"}>
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
        justifyContent={"left"}
        display={"flex"}>
        <i className={iconClass} style={{ color: "red" }} />
        <i className={iconClass} style={{ color: "yellow" }} />
        <i className={iconClass} style={{ color: "green" }} />
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        fontFamily={"Courier New, Courier, monospace"}>
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
