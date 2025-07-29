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
            <div className="max-w-[1280px] mx-auto px-4 py-10">
              <div className="flex flex-wrap justify-center gap-6">
                {category?.map((e) => (
                  <Link key={e.id} to={e.path}>
                    <div className="w-[380px] h-[400px] flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-5 transition hover:scale-[1.03] hover:shadow-xl duration-300 ease-in-out">
                      <div className="w-full h-[250px] bg-gradient-to-br from-blue-100 to-red-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                          src={e.img}
                          alt={e.name}
                          className="max-h-[220px] object-contain"
                        />
                      </div>
                      <p className="text-[20px] font-semibold text-center text-gray-800 mt-4">
                        {e.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  );
}
