import IconLink from "./IconLink";
import { Box } from "@mui/material";
import { ProjectProps } from "../pages/Portfolio";
function PortfolioBlock(props: ProjectProps) {
  const { image, live, source, title } = props;
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      {/* <div style={{ maxWidth: "640px" }}> */}
      <Box component={"img"} src={image} alt={"mockup"} />
      {/* </div> */}

      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
