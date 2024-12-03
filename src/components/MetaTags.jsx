import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
    </Helmet>
  );
};

export default MetaTags;
