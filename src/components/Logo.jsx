// import React from "react";
// import { Link } from "react-router-dom";

// const Logo = () => {
//   return (
//     <Link rel="preload" to="/" as="image" aria-label="Home">
//       <img
//         src="/image/LogoMe1.webp"
//         // srcSet="/image/LogoMe11-medium.webp 320w, /image/LogoMe11-large.webp 640w"
//         // sizes="(max-width: 768px) 320px, (min-width: 769px) 640px"
//         width={160}
//         height={55}
//         alt="Company logo"
//         loading="eager" // تحميل فوري
//         fetchpriority="high" // أولوية تحميل عالية
//       />
//     </Link>
//   );
// };

// export default React.memo(Logo);

import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" aria-label="Home">
      <img
        src="/image/LogoMe1.webp"
        // srcSet="/image/LogoMe11-medium.webp 320w, /image/LogoMe11-large.webp 640w"
        // sizes="(max-width: 768px) 320px, (min-width: 769px) 640px"
        width={160}
        height={55}
        alt="Company logo"
        className="mr-[-1rem] md:mr-0"
      />
    </Link>
  );
};

export default React.memo(Logo);
