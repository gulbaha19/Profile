import "./About.module.css";
import Terminal from "../components/Terminal";
import { Box } from "@mui/material";
import { info } from "../info/info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p style={{ color: "white" }}>
          <span style={{ color: "white" }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>
          cat about{firstName}
        </p>
        <p style={{ color: "white" }}>
          <span style={{ color: "white" }}>
            about{firstName} <span style={{ color: "green" }}>(main)</span> $
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: "white" }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>
          cd skills/tools
        </p>
        <p style={{ color: "white" }}>
          <span style={{ color: "white" }}>
            skills/tools <span style={{ color: "green" }}>(main)</span> $
          </span>
          ls
        </p>
        <p style={{ color: "white" }}> Proficient With</p>
        <ul className={"skills"}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index} style={{ color: "white" }}>
              {proficiency}
            </li>
          ))}
        </ul>
        <p style={{ color: "white" }}> Exposed To</p>
        <ul className={"skills"}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index} style={{ color: "white" }}>
              {skill}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: "white" }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>
          cd hobbies/interests
        </p>
        <p style={{ color: "white" }}>
          <span style={{ color: "white" }}>
            hobbies/interests <span style={{ color: "green" }}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index} style={{ color: "white" }}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"3rem"}>
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
