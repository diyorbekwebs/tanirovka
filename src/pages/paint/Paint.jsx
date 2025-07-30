import { Link } from "react-router-dom";
import Card from "../window/Card";
import { productsS } from "../../constant/products";
import { Helmet } from "react-helmet";

export default function Paint() {
  return (
    <div className="pt-[30px]">
      <Helmet>
        <title>Pre Cut Tanirovka Rullari | Tanirovka.uz</title>
        <meta
          name="description"
          content="Avtomobil oynalari uchun Pre Cut window tint rullari. Tanirovka.uz orqali sifatli va arzon tanirovka plyonkalarini toping."
        />
        <meta
          name="keywords"
          content="pre cut tanirovka, oynaga plyonka, avto oynalar, tanirovka rullari, tanirovka.uz"
        />
        <link rel="canonical" href="https://tanirovka.uz/paint" />
      </Helmet>

      <div className="container">
        <div className="flex items-start gap-[15%]">
          {/* Chap panel: Breadcrumb */}
          <div className="w-full lg:w-[20%]">
            <p className="text-sm text-gray-700">
              <Link to="/" className="text-blue-600 hover:underline">Home</Link> {" > "}
              <span className="text-gray-500">Pre Cut Window Tint</span>
            </p>
          </div>

          {/* Cardlar qismi */}
          <div className="w-full lg:w-[80%] flex flex-wrap gap-[20px] justify-center">
            {productsS.map((product) => (
              <Card
                key={product.id}
                img={product.img}
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
