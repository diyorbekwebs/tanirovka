import { Call } from "../../assets/image/img";
import './../../index.css';

export default function Fixthings() {
  const handleClick = () => {
    window.open("tel:+1234567890");
  };

  return (
    <>
      {/* Test rejimi yozuvi (responsive) */}
      <div className="fixed top-1/2 right-3 sm:right-5 transform -translate-y-1/2 rotate-90 origin-right bg-red-600 text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base font-semibold z-50 rounded-bl-md rounded-br-md shadow-md">
        Sayt test rejimda ishlamoqda
      </div>

      {/* Call tugmasi (responsive) */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          <img className="w-6 sm:w-7 md:w-8" src={Call} alt="Call icon" />
        </button>
      </div> */}
    </>
  );
}
