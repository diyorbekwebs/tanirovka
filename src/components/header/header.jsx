import { Link } from "react-router-dom";
import { Facebook, Instagram, Logo, Telegram } from "../../assets/image/img";
import { category } from "../../constant/category/index";

export default function Header() {
  return (
    <header className="bg-[#ffffffea] text-[#0073ff] shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="py-2 flex flex-wrap items-center justify-between gap-4" aria-label="Main Navigation">
          {/* Logo */}
          <div className="w-full flex justify-center md:justify-start md:w-auto">
            <Link to="/" title="Go to homepage">
              <img src={Logo} alt="X99PRO Uzbekistan Logo" className="h-[70px]" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6" aria-label="Main Menu">
            <li>
              <Link to="/" className="hover:underline" title="Home page">Home</Link>
            </li>

            <li className="relative group">
              <span className="cursor-pointer">Products</span>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md z-10 min-w-[150px]">
                {category?.map((e) => (
                  <li key={e.id} className="px-4 py-2 hover:bg-gray-100">
                    <Link to={`/products/${e.slug || "product1"}`} title={`View ${e.name}`}>
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/contact" className="hover:underline" title="Contact us">Contacts</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="w-full md:w-auto flex justify-center md:justify-end gap-4 items-center" aria-label="Social Links">
            <li>
              <a
                href="https://t.me/X99PROUZBEKISTAN"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <img src={Telegram} alt="Follow us on Telegram" className="w-[20px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61578331648696"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <img src={Facebook} alt="Follow us on Facebook" className="w-[20px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/x99pro_uzbekistan/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <img src={Instagram} alt="Follow us on Instagram" className="w-[20px]" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
