import { Shadest1, Shadest2, Shadest3 } from "../../assets/image/img";

export default function Video() {
  const steps = [
    {
      img: Shadest1,
      step: "01",
      title: "Clean Your Car Windows",
      desc: "Give your windows a good clean, inside and out. This will help reduce specks of dirt in the tint once fitted.",
    },
    {
      img: Shadest2,
      step: "02",
      title: "Spray on Soapy Water",
      desc: "Take off the backing film and spray it and the window with soapy water (this lets the tint move around once you put it on the window).",
    },
    {
      img: Shadest3,
      step: "03",
      title: "Apply Tint Film",
      desc: "Slide the tint into position (on the inside of the window!), and squeegee out the soapy water to hold it in place. Job done.",
    },
  ];

  return (
    <section className="pt-[40px] pb-[100px]" aria-labelledby="video-guide-heading">
      <div className="container px-4">
        <div className="flex flex-col gap-[50px]">
          <header>
            <h1 id="video-guide-heading" className="text-[28px] md:text-[32px] font-[700] leading-snug">
              Save Time and Money With Our Pre-Cut Window Tint Kits
            </h1>
            <p className="text-[16px] md:text-[18px] font-[400] mt-2">
              If you're new to this, we recommend taking a look at our fitting videos.
            </p>
          </header>

          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-[120px]">
            {/* Video Section */}
            <div className="w-full lg:w-[60%]">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/x2uWxzJd5VY?si=y7ItQtZL6k5OdPVA"
                title="Window Tint Installation Video Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-[20px] w-full"
              />
            </div>

            {/* Steps Section */}
            <div className="flex flex-col gap-[30px] w-full lg:w-[40%]">
              {steps.map((item, i) => (
                <article
                  key={i}
                  role="group"
                  aria-label={`Step ${item.step}: ${item.title}`}
                  className="flex items-start gap-[20px]"
                >
                  <img
                    src={item.img}
                    alt={`Step ${item.step} illustration for "${item.title}"`}
                    className="w-[60px] h-[60px] object-contain"
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-[8px] w-full">
                    <h4 className="text-[18px] md:text-[20px] font-[700] leading-tight">
                      <span className="text-[#5db3ef] mr-1">{item.step}</span>
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-gray-200">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
