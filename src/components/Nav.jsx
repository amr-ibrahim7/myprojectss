// import { motion } from "framer-motion";

// import { useMemo } from "react";
// import { Link, useLocation } from "react-router-dom";

// const links = [
//   { path: "/", name: "الرئيسية" },
//   { path: "/about", name: "من نحن" },
//   { path: "/projects", name: "خدماتنا" },
//   { path: "/contact", name: "تواصل معنا" },
//   // { path: "/gallery", name: "المعرض" },
// ];
// function Nav({ containerStyles, linkStyles, underlineStyles }) {
//   const location = useLocation();
//   const activeLink = useMemo(() => location.pathname, [location.pathname]);
//   return (
//     <nav className={`${containerStyles}`}>
//       {links.map((link, index) => {
//         const isActive = link.path === activeLink;
//         return (
//           <Link
//             to={link.path}
//             key={index}
//             className={`${linkStyles}`}
//             aria-current={isActive ? "page" : undefined}
//           >
//             {isActive && (
//               <motion.span
//                 initial={{ y: "-100%" }}
//                 animate={{ y: 0 }}
//                 transition={{ type: "tween" }}
//                 layoutId="underline"
//                 className={`${underlineStyles}`}
//               />
//             )}
//             {link.name}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }

// export default Nav;

import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = React.memo(
  ({ path, name, isActive, linkStyles, underlineStyles }) => {
    return (
      <Link
        to={path}
        className={`${linkStyles}`}
        aria-current={isActive ? "page" : undefined}
      >
        {isActive && (
          <motion.span
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ type: "tween" }}
            layoutId="underline"
            className={`${underlineStyles}`}
          />
        )}
        {name}
      </Link>
    );
  }
);

const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  translations,
}) => {
  const location = useLocation();
  const activeLink = useMemo(() => location.pathname, [location.pathname]);

  const links = useMemo(
    () => [
      { path: "/", name: translations.nav?.home || "الرئيسية" },
      { path: "/about-us", name: translations.nav?.about_us || "من نحن" },
      {
        path: "/our-service",
        name: translations.nav?.our_service || "خدماتنا",
      },
      {
        path: "/contact-us",
        name: translations.nav?.contact_us || "تواصل معنا",
      },
    ],
    [translations]
  ); // يتم إعادة إنشاء المصفوفة فقط عند تغيير الترجمة

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          path={link.path}
          name={link.name}
          isActive={link.path === activeLink}
          linkStyles={linkStyles}
          underlineStyles={underlineStyles}
        />
      ))}
    </nav>
  );
};

export default Nav;
