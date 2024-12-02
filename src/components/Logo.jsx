import React from "react";
// import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <a href="/" aria-label="Home">
      <img
        src="/image/LogoMe1.webp"
        // srcSet="/image/LogoMe11-medium.webp 320w, /image/LogoMe11-large.webp 640w"
        // sizes="(max-width: 768px) 320px, (min-width: 769px) 640px"
        width={160}
        height={55}
        alt="Company logo"
        className="mr-[-1rem] md:mr-0"
      />
    </a>
  );
};

export default React.memo(Logo);
