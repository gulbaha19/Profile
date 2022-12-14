import React from "react";
import "./Home.module.css";
import me3 from "../img/me3.png";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../info/info";
export interface MiniBioProps {
  emoji: string;
  text: string;
}
export interface SocialsProps {
  link: string;
  icon: string;
  label: string;
}
export default function Home() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}>
      <Box
        // className={("avatar", "shadowed")}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me3}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          Hi, I'm
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            {info.firstName}
          </span>
          <span className={"hand"}>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio: MiniBioProps, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}>
          {info.socials.map((social: SocialsProps, index) => (
            <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
