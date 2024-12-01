import { Shadest1, Shadest2, Shadest3 } from "../../assets/image/img";

export default function Video() {
  return (
    <div className="pt-[00px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[70px]">
          <div>
            <h1 className="text-[32px] font-[700]">
              Save Time and Money With Our Pre-Cut Window Tint Kits
            </h1>
            <p className="text-[18px] font-[400]">
              If youre new to this we recommend taking a look at our fitting
              videos
            </p>
          </div>
          <div className="w-[100%] flex  gap-[120px]">
            <div>
              <iframe
                width={560}
                height={335}
                src="https://www.youtube.com/embed/x2uWxzJd5VY?si=y7ItQtZL6k5OdPVA"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-[20px]"
              />
            </div>
            <div className="flex flex-col gap-[40px]">
              <div className="flex items-center gap-[30px]">
                <img src={Shadest1} alt="" />
                <div className="flex flex-col gap-[10px] w-[50%]">
                  <h4 className="text-[22px] font-[700]">
                    <span className="text-[#5db3ef]">01</span> Clean Your Car
                    Windows
                  </h4>
                  <p className="text-[14px]">
                    Give your windows a good clean, inside and out. This will
                    help reduce specks of dirt in the tint once fitted.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[30px]">
                <img src={Shadest2} alt="" />
                <div className="flex flex-col gap-[10px] w-[50%]">
                  <h4 className="text-[22px] font-[700]">
                    <span className="text-[#5db3ef]">02</span> Spray on Soapy
                    Water
                  </h4>
                  <p className="text-[14px]">
                    Take off the backing film and spray it and the window with
                    soapy water (this lets the tint move around once you put it
                    on the window).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[30px]">
                <img src={Shadest3} alt="" />
                <div className="flex flex-col gap-[10px] w-[50%]">
                  <h4 className="text-[22px] font-[700]">
                    <span className="text-[#5db3ef]">03</span> Apply Tint Film
                  </h4>
                  <p className="text-[14px]">
                    Slide the tint into position (on the inside of the window!),
                    and squeegee out the soapy water to hold it in place. Job
                    done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
