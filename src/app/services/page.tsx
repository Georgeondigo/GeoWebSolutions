"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiBarcodeFill, RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import ServicesDetails from "@/ui/ServicesDetails";

const servicesData = {
  development: [
    {
      no: "01",
      title: "Portfolio Website",
      startingAmt: "300.00",
      detailsOne: "Modern design templates",
      detailsTwo: "Mobile responsive",
      detailsThree: "Fast loading pages",
      detailsFour: "Source code included",
      detailsFive: "Free deployment help",
    },
    {
      no: "02",
      title: "Single Page Web App",
      startingAmt: "500.00",
      detailsOne: "Interactive UI",
      detailsTwo: "React or Vue based",
      detailsThree: "API integration",
      detailsFour: "Optimized performance",
      detailsFive: "Easy to maintain",
    },
    {
      no: "03",
      title: "E-Commerce Website",
      startingAmt: "800.00",
      detailsOne: "Product catalog",
      detailsTwo: "Shopping cart & checkout",
      detailsThree: "Admin dashboard",
      detailsFour: "Secure payment gateway",
      detailsFive: "SEO optimized",
    },
    {
      no: "04",
      title: "Custom Web App",
      startingAmt: "1000.00",
      detailsOne: "Tailored to your needs",
      detailsTwo: "Advanced functionality",
      detailsThree: "Database integration",
      detailsFour: "Security best practices",
      detailsFive: "Full documentation",
    },
  ],
  design: [
    {
      no: "01",
      title: "UI/UX Design",
      startingAmt: "250.00",
      detailsOne: "Wireframes & mockups",
      detailsTwo: "Modern UI trends",
      detailsThree: "User flow optimization",
      detailsFour: "Figma source files",
      detailsFive: "Responsive ready",
    },
    {
      no: "02",
      title: "Mobile App Design",
      startingAmt: "300.00",
      detailsOne: "iOS & Android UI",
      detailsTwo: "Material Design & HIG",
      detailsThree: "User-centered design",
      detailsFour: "Prototype delivery",
      detailsFive: "Dark/light mode",
    },
    {
      no: "03",
      title: "Brand Identity",
      startingAmt: "200.00",
      detailsOne: "Logo design",
      detailsTwo: "Color palette",
      detailsThree: "Typography guide",
      detailsFour: "Social media kit",
      detailsFive: "Vector source files",
    },
    {
      no: "04",
      title: "Landing Page Design",
      startingAmt: "180.00",
      detailsOne: "High-conversion layout",
      detailsTwo: "CTA optimization",
      detailsThree: "Graphics and icons",
      detailsFour: "Responsive design",
      detailsFive: "Export to HTML/CSS",
    },
  ],
  domain: [
    {
      no: "01",
      title: "Domain Search & Registration",
      startingAmt: "100.00",
      detailsOne: "Free consultation",
      detailsTwo: "ICANN-accredited partner",
      detailsThree: "Instant setup",
      detailsFour: "Privacy protection",
      detailsFive: "1-year registration",
    },
    {
      no: "02",
      title: "DNS Configuration",
      startingAmt: "80.00",
      detailsOne: "Custom records (A, MX, CNAME)",
      detailsTwo: "Email routing setup",
      detailsThree: "Subdomain configuration",
      detailsFour: "Propagation check",
      detailsFive: "Full support",
    },
    {
      no: "03",
      title: "Domain Transfer",
      startingAmt: "120.00",
      detailsOne: "Secure transfer process",
      detailsTwo: "Zero downtime",
      detailsThree: "WHOIS updates",
      detailsFour: "Renewal management",
      detailsFive: "Free one-year extension",
    },
    {
      no: "04",
      title: "Email Domain Setup",
      startingAmt: "90.00",
      detailsOne: "Google Workspace or Zoho",
      detailsTwo: "SPF/DKIM/DMARC setup",
      detailsThree: "Webmail support",
      detailsFour: "Secure SMTP config",
      detailsFive: "5 mailbox creation",
    },
  ],
  hosting: [
    {
      no: "01",
      title: "Shared Hosting",
      startingAmt: "150.00",
      detailsOne: "cPanel included",
      detailsTwo: "1 GB SSD space",
      detailsThree: "Unlimited bandwidth",
      detailsFour: "Free SSL certificate",
      detailsFive: "24/7 support",
    },
    {
      no: "02",
      title: "VPS Hosting",
      startingAmt: "500.00",
      detailsOne: "Dedicated resources",
      detailsTwo: "Root access",
      detailsThree: "SSH enabled",
      detailsFour: "Custom OS options",
      detailsFive: "Backup snapshots",
    },
    {
      no: "03",
      title: "Cloud Hosting",
      startingAmt: "700.00",
      detailsOne: "AWS / GCP / Azure",
      detailsTwo: "Scalable infrastructure",
      detailsThree: "Monitoring tools",
      detailsFour: "Load balancers",
      detailsFive: "Uptime guarantee",
    },
    {
      no: "04",
      title: "WordPress Hosting",
      startingAmt: "200.00",
      detailsOne: "Pre-installed WordPress",
      detailsTwo: "Auto updates & backup",
      detailsThree: "Themes & plugins ready",
      detailsFour: "Free migration",
      detailsFive: "Speed optimization",
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<"development" | "design" | "domain" | "hosting">("development");

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
                : "hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <RiCodeSSlashFill /> Development
          </p>
          <p
            onClick={() => setActiveTab("design")}
            className={`${
              activeTab === "design"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <SiAntdesign /> Design
          </p>
          <p
            onClick={() => setActiveTab("domain")}
            className={`${
              activeTab === "domain"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <IoMdCheckmarkCircle /> Domain
          </p>
          <p
            onClick={() => setActiveTab("hosting")}
            className={`${
              activeTab === "hosting"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-primaryColor border border-secondaryColor bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <RiBarcodeFill /> Hosting
          </p>
        </div>
      </div>

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
        {servicesData[activeTab].map((item) => (
          <ServicesDetails
            key={item?.no}
            no={item?.no}
            title={item?.title}
            startingAmt={item?.startingAmt}
            detailsOne={item?.detailsOne}
            detailsTwo={item?.detailsTwo}
            detailsThree={item?.detailsThree}
            detailsFour={item?.detailsFour}
            detailsFive={item?.detailsFive}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
