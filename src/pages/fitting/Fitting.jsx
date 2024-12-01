import { Link } from "react-router-dom";
import Card from "../window/Card";

export default function Fitting() {
  return (
    <div className="pt-[30px]">
      <div className="container">
        <div className="flex items-start gap-[15%]">
          <div className="w-[15%]">
            <p>
              <Link to={"/"}>Home</Link> {">"} <Link>Window tinting tools</Link>
            </p>
          </div>
          <div className="flex w-[70%] flex-wrap gap-[20px] p-[20px] border rounded-[15px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
