import { useState } from "react";
import { Link } from "react-router-dom";
import { productsS } from "../../constant/products";
import Card from "../window/Card";
import { Helmet } from "react-helmet";

export default function Precut() {
  const [filterType, setFilterType] = useState("tan");

  const filteredProducts =
    filterType === "all"
      ? productsS
      : productsS.filter((product) => product.type === filterType);

  return (
    <div className="pt-[30px] px-4 mt-[100px]">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Precut Tanirovka | Eng yaxshi narxlarda oynalar uchun tayyor plyonkalar</title>
        <meta
          name="description"
          content="Avtomobillar uchun precut tanirovka va quyoshdan himoya qiluvchi oynalar. Eng yaxshi narx, yuqori sifat va tez yetkazib berish xizmati."
        />
        <link rel="canonical" href="https://tanirovka.uz/precut" />
      </Helmet>

      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">

          {/* Sidebar (Breadcrumb) */}
          <div className="w-full lg:w-[20%]">
            <p className="text-sm text-gray-700 mb-4">
              <Link to="/" className="text-blue-600 hover:underline">Bosh sahifa</Link> {" > "}
              <span className="text-gray-500">Oynaga qoraytiruvchi plyonka</span>
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
                Oynaga qoraytiruvchi plyonka
              </button>
              <button
                onClick={() => setFilterType("sons")}
                className={`block w-full text-left px-3 py-1 rounded ${filterType === "sons" ? "bg-blue-600 text-white" : "bg-gray-100"
                  }`}
              >
                Quyoshdan himoya plyonkalari
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
