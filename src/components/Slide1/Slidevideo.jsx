import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videoData = [
  {
    title: "Tanirovka o‘rnatish jarayoni – professional yondashuv",
    src: "https://files.catbox.moe/ay89n8.mp4",
  },
  {
    title: "Samarqandda AVTO TANIROVKA – yangi ustaxonamizda",
    src: "https://files.catbox.moe/sq3769.mp4",
  },
  {
    title: "Eng so‘nggi nano-tanirovka modeli — taqdimot va ko‘rsatma",
    src: "https://files.catbox.moe/mpz8hr.mp4",
  },
  {
    title: "Maxsus aksiya: Premium tanirovka — chegirmalar bilan",
    src: "https://files.catbox.moe/gumknt.mp4",
  },
  {
    title: "HAVAL H6 avtomobilida tanirovka test natijalari",
    src: "https://files.catbox.moe/b8jl8c.mp4",
  },
  {
    title: "Ekspertlar fikri: Qaysi tanirovka mashinangiz uchun mos?",
    src: "https://files.catbox.moe/brvdg1.mp4",
  },
];


export default function SlideVideo() {
  const [openVideo, setOpenVideo] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

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
    <div className="bg-[#d5dade] py-10 px-4 sm:px-6 md:px-16 relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
        Videolar
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="relative"
        ref={swiperRef}
      >
        {videoData.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#e1e4e6] rounded-lg overflow-hidden shadow-md">
              <div className="relative group">
                <video
                  src={video.src}
                  className="w-full h-[200px] object-cover cursor-pointer"
                  muted
                  onClick={() => setOpenVideo(video.src)}
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 bg-white/70 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 text-black font-semibold text-[15px]">
                {video.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex gap-2 mt-6">
        <button
          ref={prevRef}
          className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          ref={nextRef}
          className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Смотреть все */}
      <div className="mt-6 text-right">
        <button className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition">
          Смотреть все
        </button>
      </div>

      {/* Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-[700px]">
            {/* X close button */}
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-md hover:bg-red-500 hover:text-white transition"
            >
              ×
            </button>
            <video
              src={openVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
