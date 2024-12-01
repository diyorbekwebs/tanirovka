import { Img11, Img12 } from "../../assets/image/img";

export default function Collection() {
  return (
    <div className="bg-[#fff] py-[50px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-[50px]">
          <div className="flex gap-[20px] justify-end">
            <img src={Img11} className="w-[770px] h-[440px] bg-[#292828]"></img>
            <img src={Img12} className="w-[770px] h-[440px] bg-[#292828]"></img>
          </div>
          {/* <div className="py-[17px] px-[43px] border-[1px] text-[#0073ff] text-[14px] hover:text-[#ffff] transition hover:bg-[#0073ff] border-[#0073ff]">
            EXPLORE MORE
          </div> */}
          <h1>About us</h1>
        </div>
      </div>
    </div>
  );
}
