import Marquee from "react-fast-marquee";
import { slideimages } from "../../assets/image/slide/slide";


export default function Slide1() {
  return (
    <div className="px-[30px] bg-[#ffff]">
      <Marquee>
        <div className="flex gap-[10px]">
          {slideimages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i + 1}`}
              className="w-[530px] h-[300px] bg-[grey] object-cover"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
