"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiBarcodeFill, RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import ServicesDetails from "@/ui/ServicesDetails";

const formatKES = (amount: number) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 2,
  }).format(amount);

const developmentServices = [
  {
    no: "01",
    title: "Portfolio Website",
    startingAmt: formatKES(3500),
    detailsOne: "React-based SPA",
    detailsTwo: "Responsive design",
    detailsThree: "SEO Optimized",
    detailsFour: "Editable source code",
    detailsFive: "Deployed to Netlify or Vercel",
  },
  {
    no: "02",
    title: "Business Website",
    startingAmt: formatKES(6000),
    detailsOne: "Multi-page app",
    detailsTwo: "CMS integration",
    detailsThree: "Google Analytics",
    detailsFour: "Domain support",
    detailsFive: "Contact & newsletter forms",
  },
  {
    no: "03",
    title: "E-Commerce App",
    startingAmt: formatKES(15000),
    detailsOne: "Product catalog & cart",
    detailsTwo: "M-Pesa + card payments",
    detailsThree: "Admin dashboard",
    detailsFour: "Order & Inventory System",
    detailsFive: "Mobile-first design",
  },
];

const designServices = [
  {
    no: "01",
    title: "Logo Design",
    startingAmt: formatKES(1000),
    detailsOne: "3 design concepts",
    detailsTwo: "High-resolution files",
    detailsThree: "Transparent background",
    detailsFour: "2 Revisions included",
    detailsFive: "Delivered in PNG, SVG",
  },
  {
    no: "02",
    title: "UI/UX Design",
    startingAmt: formatKES(4500),
    detailsOne: "Figma prototype",
    detailsTwo: "Mobile & desktop views",
    detailsThree: "User flow diagrams",
    detailsFour: "Design system included",
    detailsFive: "Developer hand-off ready",
  },
];

const domainServices = [
  {
    no: "01",
    title: ".com Domain",
    startingAmt: formatKES(1200),
    detailsOne: "1 year registration",
    detailsTwo: "DNS setup",
    detailsThree: "Domain forwarding",
    detailsFour: "WHOIS privacy",
    detailsFive: "24/7 Support",
  },
  {
    no: "02",
    title: ".co.ke Domain",
    startingAmt: formatKES(1000),
    detailsOne: "KeNIC certified",
    detailsTwo: "Fast provisioning",
    detailsThree: "Free DNS tools",
    detailsFour: "Renewal reminders",
    detailsFive: "Email forwarding",
  },
];

const hostingServices = [
  {
    no: "01",
    title: "Shared Hosting",
    startingAmt: formatKES(2500),
    detailsOne: "cPanel Access",
    detailsTwo: "5GB Storage",
    detailsThree: "Free SSL",
    detailsFour: "PHP/MySQL Support",
    detailsFive: "Weekly backups",
  },
  {
    no: "02",
    title: "Cloud Hosting",
    startingAmt: formatKES(6000),
    detailsOne: "DigitalOcean or AWS",
    detailsTwo: "Custom domain setup",
    detailsThree: "Auto scaling",
    detailsFour: "Docker support",
    detailsFive: "DevOps ready",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("development");

  const renderServices = () => {
    let data = [];
    switch (activeTab) {
      case "development":
        data = developmentServices;
        break;
      case "design":
        data = designServices;
        break;
      case "domain":
        data = domainServices;
        break;
      case "hosting":
        data = hostingServices;
        break;
    }

    return (
      <motion.div
        initial={{ x: 80, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0,
          x: { type: "just", stiffness: 120 },
          opacity: { duration: 0.5 },
          ease: "easeIn",
          duration: 0.4,
        }}
        className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
      >
        {data.map((item) => (
          <ServicesDetails key={item.no} {...item} />
        ))}
      </motion.div>
    );
  };

  return (
    <div>
      <TitleBanner subtitle="Explore the opportunities" title="Our Services" />

      <div className="max-w-screen-lg mx-auto pt-32">
        <div className="grid grid-cols-1 -mt-32 mb-8 lg:mb-0 md:grid-cols-2 lgl:grid-cols-4 font-titleFont font-semibold uppercase text-lg lgl:text-base xl:text-lg px-4">
          <p
            onClick={() => setActiveTab("development")}
            className={`${
              activeTab === "development"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <RiCodeSSlashFill /> Development
          </p>
          <p
            onClick={() => setActiveTab("design")}
            className={`${
              activeTab === "design"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <SiAntdesign /> Design
          </p>
          <p
            onClick={() => setActiveTab("domain")}
            className={`${
              activeTab === "domain"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <IoMdCheckmarkCircle /> Domain
          </p>
          <p
            onClick={() => setActiveTab("hosting")}
            className={`${
              activeTab === "hosting"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border border-secondaryColor bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <RiBarcodeFill /> Hosting
          </p>
        </div>
      </div>

      {renderServices()}
    </div>
  );
};

export default Services;
