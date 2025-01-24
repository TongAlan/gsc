import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import wordpress from "../../../public/icons/wordpress.svg";
import nextjs from "../../../public/icons/nextjs.svg";
import tailwind from "../../../public/icons/tailwind.svg";

import nodejs from "../../../public/icons/nodejs.svg";
import vercel from "../../../public/icons/vercel.svg";
import figma from "../../../public/icons/figma.svg";

import Beaker from "../../icons/Beaker";
import socialMedia from "../../../public/icons/social-media.svg";
import graphicDesign from "../../../public/icons/graphic-design.svg";
import website from "../../../public/icons/website.svg";

const ToolKit = () => {
  const icons = [Beaker];
  const services = [
    {
      icon: website,
      title: "Website Development",
      desc: "Every business needs a cool looking website. We offer the most modern aesthetic website from our top-notch designers.",
    },
    {
      icon: graphicDesign,
      title: "Professional Graphic",
      desc: "We provide graphic design services including but not limited to logos, brands, business cards, and menus.",
    },
    {
      icon: socialMedia,
      title: "Social Media Engagement",
      desc: "Want to boost engagement with your customers? Let us help you get started on social media.",
    },
  ];

  return (
    <SectionWrapper>
      <div
        id="services"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Services
          </h2>
          <p>These are a few of our speciality</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 flex items-center justify-center">
                  <Image src={item.icon} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
