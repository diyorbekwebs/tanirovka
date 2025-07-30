import { Windowtint, Windowtint2 } from "../../assets/image/img";

const sections = [
  {
    image: Windowtint,
    title: "Explore and Achieve Your Freedom",
    description:
      "Experience the thrill of exploration with our premium off-road vehicles. Whether you crave the wilderness or the dunes, we've got your ride.",
    reverse: false,
    alt: "Off-road vehicle in wilderness",
  },
  {
    image: Windowtint2,
    title: "Built for Every Terrain",
    description:
      "Our fleet is designed to handle extreme conditions. From rocky paths to desert sands, drive with confidence and style.",
    reverse: true,
    alt: "Vehicle crossing a rocky terrain",
  },
  {
    image: Windowtint,
    title: "Ready When You Are",
    description:
      "Take control of your journey with reliable, adventure-ready vehicles. We're here to power your next escape.",
    reverse: false,
    alt: "Adventure-ready SUV on a dirt road",
  },
];

export default function About() {
  return (
    <section className="bg-white pt-[50px] pb-[100px]" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <h2 id="about-heading" className="sr-only">About Our Vehicles</h2>
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
                <p className="text-[#4a4a4a] text-[15px] sm:text-[16px] font-[400] leading-[1.6]">
                  {section.description}
                </p>
                <a
                  href="tel:+998994444835"
                  className="text-[14px] font-[600] text-white bg-[#0073ff] px-[24px] py-[12px] rounded-[8px] w-fit mx-auto lg:mx-0 hover:bg-[#005acc] transition"
                >
                  Contact Us
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
