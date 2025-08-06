import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react"; // yoki icon kerak bo‘lsa
import { Sl1, Sl10, Sl2, Sl5, Sl6, Sl7 } from "../../assets/image/slide/slide";

export default function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);


  const slideImages = [
    Sl5, Sl2, Sl10, Sl7
  ]
  const titles = ["Новый HAVAL Dargo", "Новый HAVAL D", "Новый HAVAL aa"];

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div id="#hero" className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
        ref={swiperRef}
      >
        {slideImages.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <div className="absolute right-6 bottom-6 z-50 flex gap-4">
        <button
          ref={prevRef}
          className="w-10 h-10 border border-white flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ChevronLeft color="white" size={24} />
        </button>
        <button
          ref={nextRef}
          className="w-10 h-10 border border-white flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ChevronRight color="white" size={24} />
        </button>
      </div>
    </div>
  );

}
