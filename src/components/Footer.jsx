import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {
  TbBriefcaseFilled,
  TbCertificate,
  TbDeviceLandlinePhone,
  TbLetterX,
} from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { desVariants, tagVariants, tittleVariants } from "../utills/animation";

function Footer({ data, translations, language }) {
  // Mapping of icons
  const socialIcons = {
    facebook: FaFacebook,
    twitter: TbLetterX,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    snapchat: FaSnapchat,
  };

  // Mapping for social media names in different languages
  const socialMediaNames = {
    facebook: { en: "Facebook", ar: "فيس بوك" },
    twitter: { en: "Platform X", ar: "اكس" },
    instagram: { en: "Instagram", ar: "انستجرام" },
    tiktok: { en: "TikTok", ar: "تيك توك" },
    snapchat: { en: "Snapchat", ar: "سناب شات" },
  };

  // إذا لم تكن البيانات جاهزة بعد
  if (!data) return null;

  const socialMediaLinks = data?.data?.socials || [];
  const contactData = data?.data?.contact_data || {};
  const isLTR = language === "en";
  const contacts = [
    {
      path: `tel:${contactData.phone || "/"}`,
      name: `${translations.footer.getInTouchSite.phone}: ${contactData.phone}`,
      icon: <LuPhoneCall />,
    },
    {
      path: `tel:${contactData.unified_number || "/"}`,
      name: `${translations.footer.getInTouchSite.unified_number}: ${contactData.unified_number}`,
      icon: <TbDeviceLandlinePhone />,
    },
    {
      path: `mailto:${contactData.email || "/"}`,
      name: `${translations.footer.getInTouchSite.email}: ${contactData.email}`,
      icon: <MdOutlineEmail />,
    },
    {
      path: "/",
      name: `${translations.footer.getInTouchSite.commercial_registration}: ${contactData.commercial_number}`,
      icon: <TbBriefcaseFilled />,
    },
    {
      path: "/",
      name: `${translations.footer.getInTouchSite.location}: ${contactData.address}`,
      icon: <FaMapLocationDot />,
    },
  ];
  return (
    <div className="bg-tertiary -z-10">
      <div className="container lg:grid lg:grid-cols-2 py-14 mx-auto">
        <div className="grid gap-4 pb-4 lg:pb-0 lg:grid-cols-3 mr-8 ml-4">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tittleVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">
              {translations.footer.informationSite.information}
            </h2>
            <div className="flex flex-col">
              {translations.footer.informationSite.links_information.map(
                (link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="py-1 hover:underline"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">
              {translations.footer.servicesSite.services_offered}
            </h2>
            <div className="flex flex-col">
              {translations.footer.servicesSite.services_list.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="py-1 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold">
              {translations.footer.socialsSite.social_media}
            </h2>
            <div className="flex flex-col gap-2">
              {socialMediaLinks.map((social) => {
                // Get the icon based on the key
                const IconComponent = socialIcons[social.key];

                // Check if the icon exists
                if (!IconComponent) return null;

                // تحديد الاسم حسب اللغة
                const socialName =
                  socialMediaNames[social.key]?.[language] || social.key;

                // Render the social link with icon and translation support
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:underline"
                  >
                    <IconComponent className="text-primary w-6 h-6" />
                    {socialName}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tittleVariants}
          className="mr-8 ml-4 md:mr-0 md:ml-0"
        >
          <h2 className="pb-4 text-xl font-semibold">
            {translations.footer.getInTouchSite.getInTouch}
          </h2>
          <div className="flex flex-col">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.path}
                target={contact.path.startsWith("tel:") ? "_blank" : "_self"}
                rel={
                  contact.path.startsWith("tel:") ? "noopener noreferrer" : ""
                }
                className="py-1 hover:underline"
              >
                <span className="text-primary"> {contact.icon}</span>{" "}
                {contact.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="py-10 bg-black dark:bg-primary"
      >
        <div className="container text-white text-center lg:flex lg:justify-between">
          <div className="pb-4 lg:pb-0 md:mr-9">
            <p>{translations.footer.all_rights_reserved}</p>
          </div>
          <div className={`xl:ml-20 ${isLTR ? "xl:mr-20" : ""}`}>
            <Link to="/terms" className="p-4 hover:underline">
              {translations.footer.terms}
            </Link>
            <Link to="/privacy-policy" className="p-4 hover:underline">
              {translations.footer.privacy}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
