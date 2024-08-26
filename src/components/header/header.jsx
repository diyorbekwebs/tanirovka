import React from "react";

export default function Header() {
  return (
    <header className="bg-[#000000c7] text-[white]">
      <div className="container">
        <nav className="py-[20px] flex justify-between flex-row-reverse items-center">
          <ul className="list flex gap-[20px] items-center">
            <li className="item">Home</li>
            <li className="item">About</li>
            <li className="item">Products</li>
            <li className="item">Contacts</li>
          </ul>
          <div className="logo border-2">logo</div>
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
