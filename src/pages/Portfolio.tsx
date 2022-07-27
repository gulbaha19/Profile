import React from "react";
import PortfolioBlock from "../components/PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../info/info";

export interface ProjectProps {
  title: string;
  live: string;
  source: string;
  image: string;
}
export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project: ProjectProps, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
