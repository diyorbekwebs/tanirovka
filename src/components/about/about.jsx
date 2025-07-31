import { Windowtint, Windowtint2 } from "../../assets/image/img";

const sections = [
  {
    image: Windowtint,
    title: "Avtomobilingizga uslub va himoya qo‘shing",
    description:
      "Bizning sifatli oynalarni qoplash xizmatlarimiz orqali avtomobilingizga zamonaviy ko‘rinish, quyoshdan himoya va maxfiylikni ta’minlang.",
    reverse: false,
    alt: "Tanirovka qilingan avtomobil",
  },
  {
    image: Windowtint2,
    title: "Issiqlikka qarshi samarali yechim",
    description:
      "Biz taklif qilayotgan oynalarni qoplash xizmatlari sizning avtomobilingiz ichki haroratini pasaytirishga va salondagi jihozlarni quyosh nurlaridan asrashga yordam beradi.",
    reverse: true,
    alt: "Avtomobil oynasi oynavand qilingan",
  },
  {
    image: Windowtint,
    title: "Ishonchli xizmat va professional yondashuv",
    description:
      "Biz sizga tajribali mutaxassislar, sifatli materiallar va kafolatli xizmatni taklif qilamiz. Tanirovka – bu nafaqat chiroy, balki xavfsizlik hamdir.",
    reverse: false,
    alt: "Ustaxonada oynasi qoplanayotgan mashina",
  },
];


export default function About() {
  return (
    <section className="bg-white pt-[50px] pb-[100px]" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <h2 id="about-heading" className="sr-only">Biz haqimizda</h2>
        <div className="flex flex-col gap-[80px]">
          {sections.map((section, index) => (
            <article
              key={index}
              className={`flex flex-col-reverse ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } justify-between items-center gap-8`}
              aria-label={section.title}
            >
              <img
                src={section.image}
                alt={section.alt}
                loading="lazy"
                className="w-full sm:w-[500px] md:w-[600px] rounded-[15px] h-[300px] sm:h-[400px] md:h-[460px] shadow-xl object-cover"
              />
              <div className="flex flex-col gap-[20px] max-w-[600px] text-center lg:text-left">
                <h3 className="text-[#1c1c1c] text-[28px] sm:text-[32px] lg:text-[34px] font-bold leading-snug">
                  {section.title}
                </h3>
                <p className="text-[#444] text-[15px] sm:text-[16px] font-[400] leading-[1.7]">
                  {section.description}
                </p>
                <a
                  href="tel:+998958803533"
                  className="text-[14px] font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 px-[26px] py-[12px] rounded-[10px] shadow-md w-fit mx-auto lg:mx-0 hover:opacity-90 transition-all duration-300"
                >
                  Biz bilan bog‘laning
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
