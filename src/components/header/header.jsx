
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
            <li className="icon">tg</li>
            <li className="icon">face</li>
            <li className="icon">ins</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
