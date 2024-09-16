import { Facebook, Instagram, Telegram } from "../../assets/image/img";

export default function Header() {
  return (
    <header className="bg-[#000000ea] text-[#FF8A00]">
      <div className="container">
        <nav className="py-[20px] flex justify-between flex-row-reverse items-center">
          <ul className="list flex gap-[20px] items-center">
            <li className="item">Home</li>
            <li className="item">About</li>
            <li className="item">Products</li>
            <li className="item">Contacts</li>
          </ul>
          <div className="logo text-[#FF8A00] text-[30px] ">Logo</div>
          <ul className="icons flex gap-[30px]">
            <li className="icon">
              <img className="w-[20px] text-[#ffff]" src={Telegram} alt="" />
            </li>
            <li className="icon">
              <img className="w-[20px] text-[#ffff]" src={Facebook} alt="" />
            </li>
            <li className="icon">
              <img className="w-[20px] text-[#ffff]" src={Instagram} alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
