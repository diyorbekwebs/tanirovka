import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./Layout/layout";
import Cursor from "react-cursor-follow";
import Fitting from "./pages/fitting/Fitting";
import Precut from "./pages/precut/Precut";
import Window from "./pages/window/Window";
import Paint from "./pages/paint/Paint";
import ScrollToTop from "./scrolltop";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
     <Helmet>
        <title>Tanirovka.uz – Avtomobil oynalarini qoraytirish xizmati</title>
        <meta name="description" content="Toshkentdagi eng yaxshi avtomobil oynalarini qoraytirish xizmati." />
      </Helmet>
      <ScrollToTop />
      <Cursor size={50} color="#0073ff" hollow={true} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="precut" element={<Precut />} />
          <Route path="window" element={<Window />} />
          <Route path="paint" element={<Paint />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
