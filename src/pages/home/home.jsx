import About from "../../components/about/about";
import Collection from "../../components/collections/collection";
import Fixthings from "../../components/fixthings/Fixthings";
import Hero from "../../components/hero/hero";
import Products from "../../components/products/products";
import Slide1 from "../../components/Slide1/Slide";
import Slide2 from "../../components/Slide2/Slide2";
import Video from "../../components/video/video";

export default function Home() {
  return (
      <>
      <Fixthings />
      <Hero />
      <Products />
      <Video />
      <About />
      <Slide1 />
      {/* <Slide2 /> */}
      <Collection />
      </>
  );
}
