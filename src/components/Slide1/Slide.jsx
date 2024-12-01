import Marquee from "react-fast-marquee";
import { Img1, Img2, Img3, Img4, Img5 } from "../../assets/image/img";
export default function Slide1() {
  return (
    <div className="px-[30px] bg-[#ffff]">
      <Marquee>
        <div className="flex gap-[10px]">
          <img src={Img1} className="w-[530px] h-[300px] bg-[grey]"></img>
          <img src={Img2} className="w-[530px] h-[300px] bg-[grey]"></img>
          <img src={Img3} className="w-[530px] h-[300px] bg-[grey]"></img>
          <img src={Img4} className="w-[530px] h-[300px] bg-[grey]"></img>
          <img
            src={Img5}
            className="w-[530px] mr-[10px] h-[300px] bg-[grey]"
          ></img>
        </div>
      </Marquee>
    </div>
  );
}
