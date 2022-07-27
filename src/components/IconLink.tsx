interface IconProps {
  link: string;
  title: string;
  icon: string;
}
function IconLink(props: IconProps) {
  const { link, title, icon } = props;
  return (
    <a href={link} target={"_blank"} rel="noopener noreferrer">
      <i className={icon} /> {title}
    </a>
  );
}

export default IconLink;
