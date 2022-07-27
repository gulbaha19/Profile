import tastybook from "../img/tastybook.png";
export let colors = ["rgb(255, 251, 0), rgb(255, 38, 0)"];

export const info = {
  firstName: " Gulbakhyt",
  lastName: "Sassykova",
  initials: "JS",
  position: "Front-end Developer",
  selfPortrait: "me",
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in KZ,ALA",
    },
    {
      emoji: "💼",
      text: "Front-End at JusanBank",
    },
    {
      emoji: "📧",
      text: "gulbaha19@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/profile.php?id=100007512122558",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/smbdfrmyrftr/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/gulbaha19",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/гульбахыт-сасыкова-a22761152/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Hello! I'm Gulbakhyt. I'm a frontend developer for Jusan Bank. I studied React Js at JasAcademy, I enjoy walks in parks, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "html5",
      "css3",
      "figma",
      "mobx",
      "redux",
    ],
    exposedTo: ["angular", "node"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "music",
      emoji: "🎵",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Project 1-RecipeBook",
      live: "https://tasty-book.vercel.app",
      source: "https://github.com/gulbaha19/tastybook.git",
      image: tastybook,
    },
  ],
};
