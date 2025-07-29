import { useState } from "react";
import Marquee from "react-fast-marquee";

const videoUrls = [
  "https://files.catbox.moe/ay89n8.mp4",
  "https://files.catbox.moe/sq3769.mp4",
  "https://files.catbox.moe/mpz8hr.mp4",
  "https://files.catbox.moe/gumknt.mp4",
  "https://files.catbox.moe/b8jl8c.mp4",
  "https://files.catbox.moe/brvdg1.mp4"
];

export default function SlideVideo() {
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <div className="px-[30px] py-[20px] bg-white">
      <Marquee>
        <div className="flex gap-[20px]">
          {videoUrls.map((video, index) => (
            <video
              key={index}
              src={video}
              className="w-[300px] h-[200px] rounded-lg cursor-pointer"
              muted
              onClick={() => setOpenVideo(video)}
              onMouseOver={e => e.target.play()}
              onMouseOut={e => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
            />
          ))}
        </div>
      </Marquee>

      {/* Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[70%] max-w-[600px]">
            {/* X tugmasi */}
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
