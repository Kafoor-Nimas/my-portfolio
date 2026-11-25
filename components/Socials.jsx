import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Each icon keeps its official brand colour
const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    path: "https://github.com/Kafoor-Nimas",
    color: "#FFFFFF", // white
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/nimas-kafoor",
    color: "#0A66C2", // LinkedIn blue
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    path: "https://twitter.com/nimasKafoor",
    color: "#1DA1F2", // Twitter blue
  },
];

const defaultIconStyles =
  "w-10 h-10 rounded-full border flex justify-center items-center text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_18px_var(--brand)]";

const Socials = ({
  containerStyles = "flex gap-6",
  iconStyles = defaultIconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          title={item.name}
          className={iconStyles}
          // the brand colour never changes on hover, only a lift and a glow
          style={{
            "--brand": item.color,
            color: item.color,
            borderColor: item.color,
          }}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
