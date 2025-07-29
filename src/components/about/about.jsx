import { motion } from "framer-motion";
import { Windowtint, Windowtint2 } from "../../assets/image/img";

const animationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const sections = [
  {
    image: Windowtint,
    title: "Explore and Achieve Your Freedom",
    description:
      "Experience the thrill of exploration with our premium off-road vehicles. Whether you crave the wilderness or the dunes, we've got your ride.",
    reverse: false,
  },
  {
    image: Windowtint2,
    title: "Built for Every Terrain",
    description:
      "Our fleet is designed to handle extreme conditions. From rocky paths to desert sands, drive with confidence and style.",
    reverse: true,
  },
  {
    image: Windowtint,
    title: "Ready When You Are",
    description:
      "Take control of your journey with reliable, adventure-ready vehicles. We're here to power your next escape.",
    reverse: false,
  },
];

export default function About() {
  return (
    <div className="bg-white pt-[50px] pb-[150px]">
      <div className="container">
        <div className="flex flex-col gap-[100px]">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={animationVariants}
              className={`flex ${
                section.reverse ? "flex-row-reverse" : ""
              } justify-between items-center`}
            >
              <img
                src={section.image}
                alt="about section"
                className="w-[600px] rounded-[15px] h-[460px] shadow-xl object-cover"
              />
              <div className="flex flex-col gap-[20px] max-w-[600px]">
                <h3 className="text-[#1c1c1c] mb-[10px] text-[34px] font-[700] leading-[1.2]">
                  {section.title}
                </h3>
                <p className="text-[#4a4a4a] text-[16px] font-[400] leading-[1.6]">
                  {section.description}
                </p>
                <a
                  href="#contact"
                  className="text-[14px] font-[600] text-white bg-[#0073ff] px-[24px] py-[12px] rounded-[8px] w-fit hover:bg-[#005acc] transition"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
