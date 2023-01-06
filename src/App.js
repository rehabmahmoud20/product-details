import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrevRatings from "./Components/ProductDetails/PrevRatings";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Footer } from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import NavbarComponent from "./Components/Shared/NavbarComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Header />

      <Routes>
        <Route path="/" element={<ProductDetails />} />
        <Route path="/PrevRatings" element={<PrevRatings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
