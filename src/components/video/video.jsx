import { Shadest1, Shadest2, Shadest3 } from "../../assets/image/img";

export default function Video() {
  const steps = [
    {
      img: Shadest1,
      step: "01",
      title: "Mashina oynalarini tozalang",
      desc: "Oynalarni ichkaridan va tashqaridan yaxshilab tozalang. Bu Tonirovka yopishtirilganda dog‘lar chiqishini kamaytiradi.",
    },
    {
      img: Shadest2,
      step: "02",
      title: "Sovunli suv seping",
      desc: "Orqa himoya qatlamini yechib, unga va oyna yuzasiga sovunli suv seping (bu plyonka oyna ustida bemalol siljishini ta'minlaydi).",
    },
    {
      img: Shadest3,
      step: "03",
      title: "Tonirovka plyonkasini yopishtiring",
      desc: "Tonirovkani oynaning ichki qismiga joylashtiring va suvni rezina yordamida chiqarib, uni mahkamlang. Ish yakunlandi!",
    },
  ];

  return (
    <section className="pt-[40px] pb-[100px]" aria-labelledby="video-guide-heading">
      <div className="container px-4">
        <div className="flex flex-col gap-[50px]">
          <header>
            <h1 id="video-guide-heading" className="text-[28px] md:text-[32px] font-bold leading-snug text-black">
              Tayyor kesilgan plyonkalar yordamida vaqtingiz va pulingizni tejang
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal mt-2 text-gray-800">
              Agar siz bu ishda yangi bo‘lsangiz, quyidagi montaj videosini tomosha qilishingizni tavsiya qilamiz.
            </p>
          </header>

          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-[120px]">
            {/* Video Section */}
            <div className="w-full lg:w-[60%]">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/x2uWxzJd5VY?si=y7ItQtZL6k5OdPVA"
                title="Window Tonirovka Installation Video Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-[20px] w-full shadow-lg"
              />
            </div>

            {/* Steps Section */}
            <div className="flex flex-col gap-[30px] w-full lg:w-[40%]">
              {steps.map((item, i) => (
                <article
                  key={i}
                  role="group"
                  aria-label={`Bosqich ${item.step}: ${item.title}`}
                  className="flex items-start gap-[20px]"
                >
                  <img
                    src={item.img}
                    alt={`Bosqich ${item.step} - ${item.title}`}
                    className="w-[60px] h-[60px] object-contain"
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-[8px] w-full">
                    <h4 className="text-[18px] md:text-[20px] font-bold leading-tight text-black">
                      <span className="text-[#5db3ef] mr-1">{item.step}</span>
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-gray-700">{item.desc}</p>
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
