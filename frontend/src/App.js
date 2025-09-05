import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Cart from "./pages/ViewCart";
import Auth from "./pages/Auth";


function App() {
  return (
    <div className="font-poppins text-[#333] bg-white">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} /> {}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;