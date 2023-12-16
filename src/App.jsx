import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import {BackToTopButton} from "./components/backToTop/BackToTopButton";
import { CarouselPromo } from "./components/carousel/CarouselPromo";
import { CarouselPromoFooter } from "./components/carousel/CarouselPromoFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Ecommerce from "./components/ecommerce/Ecommerce";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-light">
        <Header />
        <Container>
          <CarouselPromo />
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/search" element={<Ecommerce />} />
          </Routes>
          <CarouselPromoFooter />
        </Container>
        <BackToTopButton/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
