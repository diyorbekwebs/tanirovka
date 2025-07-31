/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { category } from "../../constant/category";

export default function Products() {
  return (
    <section className="pt-[100px] pb-[70px]" aria-labelledby="product-heading">
      <div className="container">
        <div className="flex pl-[20px] justify-center items-center flex-col">
          <h1
            id="product-heading"
            className="text-[32px] font-bold text-center text-[#333]"
          >
            Our Product Ranges
          </h1>

          <div className="flex justify-between items-center w-full">
            <div className="max-w-[1280px] mx-auto px-4 py-10">
              <div
                className="flex flex-wrap justify-center gap-6"
                role="list"
                aria-label="List of product categories"
              >
                {category?.map((e) => (
                  <Link
                    key={e.id}
                    to={e.path}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    title={`View products in ${e.name}`}
                  >
                    <div className="w-[380px] h-[400px] flex flex-col items-center justify-between bg-white rounded-2xl shadow-md p-5 transition hover:scale-[1.03] hover:shadow-xl duration-300 ease-in-out">
                      <div className="w-full h-[250px] bg-gradient-to-br from-blue-100 to-red-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                          src={e.img}
                          alt={`${e.name} product image`}
                          className="max-h-[220px] object-contain"
                          loading="lazy"
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
          </div>

        </div>
      </div>
    </section>
  );
}
