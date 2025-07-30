import { Logo } from "../../assets/image/img";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 mt-[200px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 max-w-[300px]">
          <h2 className="text-2xl font-bold">
            <div className="logo text-[#0073ff] text-[30px]">
              <img className="logo" src={Logo} alt="" />
            </div>
          </h2>
          <p className="text-sm text-gray-300">
            Explore the world with powerful vehicles. Discover the unknown with safety and performance in mind.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/catalogue" className="hover:text-white">Catalogue</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Email: qahramonyusupov880@gmail.com</li>
            <li>Phone: +998 95 880 35 33</li>
            <li>Location: Tashkent, Uzbekistan</li>
          </ul>
        </div>
      </div>

      {/* <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} OffroadX. All rights reserved.
      </div> */}
    </footer>
  );
}
