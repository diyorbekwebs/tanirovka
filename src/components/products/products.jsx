/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { category } from "../../constant/category";
import { motion } from "framer-motion";
import "react-animation/dist/keyframes.css";

export default function Products() {
  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="pt-[100px] pb-[150px]">
      <div className="container">
        <div className="flex pl-[20px] justify-center items-center flex-col gap-[50px]">
          <h1 className="text-[32px] font-[700]">Our Product Ranges</h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={animationVariants}
            className="flex justify-between items-center"
          >
            <div className="flex justify-center items-center gap-[30px]">
              {category?.map((e) => (
                <Link key={e.id} to={e.path}>
                  <div className="flex flex-col gap-[10px] items-center">
                    <div className="flex rounded-[10px] justify-center items-center bg-[#d0d0d03b] w-[250px] h-[200px]">
                      <img src={e.img} alt="" />
                    </div>
                    <p className="text-[18px] font-[500]">{e.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
