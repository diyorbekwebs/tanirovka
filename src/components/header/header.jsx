import { Link } from "react-router-dom";
import { Facebook, Instagram, Logo, Telegram } from "../../assets/image/img";
import { category } from "../../constant/category/index";

export default function Header() {
  return (
    <header className="bg-[#ffffffea] text-[#0073ff]">
      <div className="container">
        <nav className="py-[0px] flex justify-between flex-row-reverse gap-[20px] items-center">
          {/* Navigation Menu */}
          <ul className="list flex gap-[20px] items-center">
            <Link>
              <li className="item">Home</li>
            </Link>
            {/* Dropdown for Products */}
            <li className="item relative group">
              <Link to={"#"} className="pb-[20px] ">
                <span className="cursor-pointer">Products</span>
              </Link>
              <ul className="dropdown w-[150px] mt-[10px] ml-[-30px] absolute left-0 hidden group-hover:block bg-white shadow-md rounded transition-transform transform scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-300">
                {category?.map((e) => (
                  <li key={e.id} className="px-4  py-2 hover:bg-gray-200">
                    <Link to="/products/product1">{e.name}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="item">Contacts</li>
          </ul>

          {/* Logo */}
          <div className="logo ml-[100px] text-[#0073ff] text-[30px]">
            <img className="logo" src={Logo} alt="" />
          </div>

          {/* Social Media Icons */}
          <ul className="icons flex gap-[30px]">
            <Link to="https://t.me/X99PROUZBEKISTAN" target="_blank">
              <li className="icon">
                <img
                  className="w-[20px] text-[#ffff]"
                  src={Telegram}
                  alt="Telegram"
                />
              </li>
            </Link>
            <li className="icon">
              <img
                className="w-[20px] text-[#ffff]"
                src={Facebook}
                alt="Facebook"
              />
            </li>
            <Link
              to={"https://www.instagram.com/x99pro_uzbekistan/"}
              target="_blank"
            >
              <li className="icon">
                <img
                  className="w-[20px] text-[#ffff]"
                  src={Instagram}
                  alt="Instagram"
                />
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
