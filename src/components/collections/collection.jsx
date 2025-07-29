import { Sl10, Sl7 } from "../../assets/image/slide/slide";

export default function Collection() {
  return (
    <div className="bg-white py-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <div className="flex flex-col md:flex-row gap-[20px] w-full">
            <img
              src={Sl10}
              alt="Slide 10"
              className="w-full md:w-1/2 h-[400px] md:h-[440px] object-cover rounded-lg"
            />
            <img
              src={Sl7}
              alt="Slide 7"
              className="w-full md:w-1/2 h-[400px] md:h-[440px] object-cover rounded-lg"
            />


          </div>
        </div>
      </div>
    </div>
  );
}
