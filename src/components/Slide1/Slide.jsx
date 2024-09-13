import Marquee from "react-fast-marquee";
export default function Slide1() {
  return (
    <div className="px-[30px] bg-[black]">
      <Marquee>
        <div className="flex gap-[10px]">
          <div className="w-[530px] h-[300px] bg-[grey]"></div>
          <div className="w-[530px] h-[300px] bg-[grey]"></div>
          <div className="w-[530px] h-[300px] bg-[grey]"></div>
          <div className="w-[530px] h-[300px] bg-[grey]"></div>
          <div className="w-[530px] mr-[10px] h-[300px] bg-[grey]"></div>
        </div>
      </Marquee>
    </div>
  );
}
