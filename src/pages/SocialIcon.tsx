import React from "react";
import { SocialsProps } from "./Home";

function SocialIcon(props: SocialsProps) {
  const { link, icon, label } = props;
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
