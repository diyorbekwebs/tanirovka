/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { category } from "../../constant/category";

export default function Products() {
  return (
    <section className="pt-[100px] pb-[70px]" aria-labelledby="product-heading">
      <div className="container">
        <div className="flex px-4 justify-center items-center flex-col">
          <h1
            id="product-heading"
            className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-center text-[#333]"
          >
            Mahsulot turlari
          </h1>

          <div className="flex justify-center items-center w-full">
            <div className="max-w-[1400px] mx-auto px-4 py-10">
              <div
                className="flex flex-wrap justify-center gap-8"
                role="list"
                aria-label="Mahsulot kategoriyalari ro‘yxati"
              >
                {category?.map((e) => (
                  <Link
                    key={e.id}
                    to={e.path}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    title={`${e.name} mahsulotlarini ko‘rish`}
                  >
                    <div className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-auto flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-6 transition hover:scale-[1.03] hover:shadow-xl duration-300 ease-in-out">
                      <div className="w-full h-[230px] sm:h-[260px] md:h-[280px] bg-gradient-to-br from-blue-100 to-red-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                          src={e.img}
                          alt={`${e.name} mahsulot rasmi`}
                          className="max-h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-center text-gray-800 mt-4">
                        {e.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
