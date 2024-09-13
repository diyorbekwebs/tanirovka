import Slider from "react-slick";

function Slide2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-[30px] bg-[black]">
      <Slider {...settings}>
        <div className="w-[100%] h-[80vh] bg-[#292828]"></div>
        <div className="w-[100%] h-[80vh] bg-[#292828]"></div>
        <div className="w-[100%] h-[80vh] bg-[#292828]"></div>
        <div className="w-[100%] h-[80vh] bg-[#292828]"></div>
        <div className="w-[100%] h-[80vh] bg-[#292828]"></div>
        <div className="w-[100%] h-[80vh] bg-[#292828]"></div>
      </Slider>
    </div>
  );
}

export default Slide2;
