import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Logo, Telegram } from "../../assets/image/img";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = isScrolled || !isHome
    ? "bg-white  text-black shadow-sm border-gray-200"
    : "bg-white/20 text-white border-white/10 backdrop-blur-md";

  const menuBgClass = isScrolled || !isHome
    ? "bg-white text-black"
    : " text-white ";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-[80px] relative">
          {/* Chap menyular */}
          <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
            <li><Link to="/#hero" className="hover:underline">Bosh sahifa</Link></li>
            <li><Link to="/precut" className="hover:underline">Maxsulotlar</Link></li>
            <li><Link to="/#contact" className="hover:underline">Kontaktlar</Link></li>
          </ul>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-16" />
          </Link>

          {/* O‘ng menyular */}
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="tel:+998958803533" className="hover:text-gray-500 transition">📞 +998 95 880 35 33</a>
            <div className="flex gap-3 items-center">
              <a href="https://t.me/@X99PROUZBEKISTAN" target="_blank"><img src={Telegram} alt="Telegram" className="h-5" /></a>
              <a href="https://www.instagram.com/x99pro_uzbekista" target="_blank"><img src={Instagram} alt="Instagram" className="h-5" /></a>
              <a href="https://facebook.com/x99pro_uzbekistan" target="_blank"><img src={Facebook} alt="Facebook" className="h-5" /></a>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-500">UZ <span>▾</span></button>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow z-10">
                <li className="hover:bg-gray-100 px-4 py-2">UZ</li>
                <li className="hover:bg-gray-100 px-4 py-2">RU</li>
                <li className="hover:bg-gray-100 px-4 py-2">EN</li>
              </ul>
            </div>
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden text-xl z-50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobil menyu - gilamday ochiladi */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`md:hidden overflow-hidden px-4 py-4 rounded-b-lg shadow ${menuBgClass}`}
            >
              <div className="flex flex-col gap-4 text-base font-medium">
                <Link to="/#hero" onClick={() => setIsMenuOpen(false)}>Bosh sahifa</Link>
                <Link to="/precut" onClick={() => setIsMenuOpen(false)}>Maxsulotlar</Link>
                <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Kontaktlar</Link>
                <a href="tel:+998958803533">📞 +998 95 880 35 33</a>
                <div className="flex gap-4 mt-2">
                  <a href="https://t.me/@X99PROUZBEKISTAN"><img src={Telegram} className="h-5" /></a>
                  <a href="https://www.instagram.com/x99pro_uzbekistan"><img src={Instagram} className="h-5" /></a>
                  <a href="https://facebook.com/x99pro_uzbekistan"><img src={Facebook} className="h-5" /></a>
                </div>
                <div className="flex gap-4 mt-2">
                  <button>UZ</button>
                  <button>RU</button>
                  <button>EN</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
