import { motion } from "framer-motion";
import "react-animation/dist/keyframes.css";
import { Windowtint, Windowtint2 } from "../../assets/image/img";

const animationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <div className="bg-[#fff] pt-[50px] pb-[150px]">
      <div className="container">
        <div className="flex flex-col gap-[100px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={animationVariants}
            className="flex justify-between items-center"
          >
            <img
              src={Windowtint}
              className="w-[600px] rounded-[10px] h-[460px] bg-[#292828]"
            ></img>
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[#000] mb-[20px] w-[600px] text-[36px] font-[700]">
                With the right vehicle you can explore and achieve your freedom
                where you want
              </h3>
              <p className="text-[#0073ff] w-[600px] text-[14px] font-[500]">
                We provide Offroad car to rent. If you want to explore the
                world, get lost in nature, ride deep into the desert or just
                want to drive like a maniac then our off-
              </p>
              <a href="" className="text-[14px] text-[#ff2c2c] font-[500]">
                CONTACT US
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={animationVariants}
            className="flex flex-row-reverse justify-between items-center"
          >
            <img
              src={Windowtint2}
              className="w-[600px] rounded-[10px] h-[460px] bg-[#292828]"
            ></img>
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[#000] mb-[20px] w-[600px] text-[36px] font-[700]">
                With the right vehicle you can explore and achieve your freedom
                where you want
              </h3>
              <p className="text-[#0073ff] w-[600px] text-[14px] font-[500]">
                We provide Offroad car to rent. If you want to explore the
                world, get lost in nature, ride deep into the desert or just
                want to drive like a maniac then our off-
              </p>
              <a href="" className="text-[14px] text-[#ff2c2c] font-[500]">
                CONTACT US
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={animationVariants}
            className="flex justify-between items-center"
          >
            <img
              src={Windowtint}
              className="w-[600px] rounded-[10px] h-[460px] bg-[#292828]"
            ></img>
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[#000] mb-[20px] w-[600px] text-[36px] font-[700]">
                With the right vehicle you can explore and achieve your freedom
                where you want
              </h3>
              <p className="text-[#0073ff] w-[600px] text-[14px] font-[500]">
                We provide Offroad car to rent. If you want to explore the
                world, get lost in nature, ride deep into the desert or just
                want to drive like a maniac then our off-
              </p>
              <a href="" className="text-[14px] text-[#ff2c2c] font-[500]">
                CONTACT US
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
