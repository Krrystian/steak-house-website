import { StrictMode, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { OurKitchen } from "./components/OurKitchen";
import { Scene } from "./components/Scene";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Cuisine } from "./pages/Cuisine";

const navbarItems = [
  {
    text: "About Us",
    href: "/steak-house-website/",
  },
  {
    text: "Our Cuisine",
    href: "/steak-house-website/cuisine",
  },
  {
    text: "Reservation & Contact",
    href: "/steak-house-website/contact",
  },
];

function App() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar
        items={navbarItems}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <Routes>
        <Route path="/steak-house-website/" element={<AboutUs />} />
        <Route path="/steak-house-website/cuisine" element={<Cuisine />} />
        <Route path="/steak-house-website/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
