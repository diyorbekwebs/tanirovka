import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Card from "./Card";
import { productsS } from "../../constant/products";

export default function Window() {
  const [filterType, setFilterType] = useState("sons");

  const filteredProducts =
    filterType === "all"
      ? productsS
      : productsS.filter((product) => product.type === filterType);

  return (
    <div className="pt-[30px] px-4 mt-[100px]">
      <Helmet>
        <title>Tanirovka plyonka rulonlari | Tanirovka.uz</title>
        <meta
          name="description"
          content="Avtomobil va bino oynalari uchun sifatli tanirovka plyonkalari. Quyoshdan himoya qiluvchi, turli o'lcham va turlardagi rulonlar – bizda eng arzon narxlarda!"
        />
        <meta
          name="keywords"
          content="tanirovka, plyonka, oynaga plyonka, quyoshdan himoya, rulon, oynaga qoraytiruvchi plyonka, window tint rolls, sonza zashita"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanirovka.uz/window" />
      </Helmet>

      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">

          {/* Sidebar (Breadcrumb) */}
          <div className="w-full lg:w-[20%]">
            <p className="text-sm text-gray-700 mb-4">
              <Link to="/" className="text-blue-600 hover:underline">Home</Link> {" > "}
              <span className="text-gray-500">Window Tint Rolls</span>
            </p>

            {/* Filter UI */}
            <div className="space-y-2">
              <button
                onClick={() => setFilterType("all")}
                className={`block w-full text-left px-3 py-1 rounded ${filterType === "all" ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
              >
                Barchasi
              </button>
              <button
                onClick={() => setFilterType("tan")}
                className={`block w-full text-left px-3 py-1 rounded ${filterType === "tan" ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
              >
                Tanirovka
              </button>
              <button
                onClick={() => setFilterType("sons")}
                className={`block w-full text-left px-3 py-1 rounded ${filterType === "sons" ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
              >
                сонса зашита
              </button>
            </div>
          </div>

          {/* Cards section */}
          <div className="w-full lg:w-[80%] flex flex-wrap gap-[20px] justify-center">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                images={product.images}
                name={product.name}
                sizes={product.sizes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
