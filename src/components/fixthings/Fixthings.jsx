import { Call } from "../../assets/image/img";
import './../../index.css'

export default function Fixthings() {
  const handleClick = () => {
    window.open("tel:+1234567890");
  };
  return (
    <div>
      <button onClick={handleClick}  className="call-button">
        <img  className="w-[25px]" src={Call} alt="" />
      </button>
    </div>
  );
}
