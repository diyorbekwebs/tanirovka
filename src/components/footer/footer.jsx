import { Logo } from "../../assets/image/img";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-12 mt-32">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div className="space-y-4">
          <div className="w-[120px]">
            <img src={Logo} alt="Logo" className="w-full" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Kuchli transport vositalari bilan dunyoni kashf eting. Har bir
            sayohatda xavfsizlik va samaradorlik siz bilan.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#00b4d8]">Tezkor havolalar</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:text-[#00b4d8] transition">
                Bosh sahifa
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#00b4d8] transition">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="/catalogue" className="hover:text-[#00b4d8] transition">
                Katalog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#00b4d8] transition">
                Bog‘lanish
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#00b4d8]">Aloqa</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>
              <span className="text-white">Email:</span> qahramonyusupov880@gmail.com
            </li>
            <li>
              <span className="text-white">Telefon:</span> +998 95 880 35 33
            </li>
            <li>
              <span className="text-white">Manzil:</span> Toshkent, O‘zbekiston
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tanirovka.uz — Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
