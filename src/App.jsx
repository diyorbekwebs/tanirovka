import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Cursor from "react-cursor-follow";
import Fixthings from "./components/fixthings/Fixthings";
import Slide1 from './components/Slide1/Slide';
import Slide2 from "./components/Slide2/Slide2";
import Collection from "./components/collections/collection";

export default function App() {
  return (
    <div>
      <Cursor
        size={50}
        color="#FF8A00"
        hollow={true} // Ushbu parametr kursorni ichi bo‘sh qiladi
      />
      <Fixthings />
      <Header />
      <Hero />
      <About />
      <Slide1 />
      <Slide2/>
      <Collection />
      <Footer />
    </div>
  );
}
