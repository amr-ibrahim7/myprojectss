import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ metaTags }) => (
  <Helmet>
    <title>{metaTags.title}</title>
    <meta name="description" content={metaTags.description} />
    <meta name="keywords" content={metaTags.keywords} />
    <meta property="og:title" content={metaTags.ogTitle} />
    <meta property="og:description" content={metaTags.ogDescription} />
    <meta name="twitter:title" content={metaTags.twitterTitle} />
    <meta name="twitter:description" content={metaTags.twitterDescription} />
  </Helmet>
);

export default SEO;

//  <Helmet>
//    <title>{metaTags.title}</title>
//    <meta name="description" content={metaTags.description} />
//    <meta name="keywords" content={metaTags.keywords} />

//    {/* Open Graph Meta Tags */}
//    <meta property="og:title" content={metaTags.ogTitle} />
//    <meta property="og:description" content={metaTags.ogDescription} />

//    {/* Twitter Card Meta Tags */}
//    <meta name="twitter:title" content={metaTags.twitterTitle} />
//    <meta name="twitter:description" content={metaTags.twitterDescription} />
//  </Helmet>;
