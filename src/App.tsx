import { useState } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Scene } from "./components/Scene";

const items = [
  {
    text: "About Us",
    href: "#",
  },
  {
    text: "Our Cuisine",
    href: "#",
  },
  {
    text: "News",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
];

function App() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar
        items={items}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <Scene video={true} source="/src/assets/video2.mp4"></Scene>
      <Scene bright={"0.4"} source="/src/assets/blackbackground.jpg">
        <Hero />
      </Scene>
    </>
  );
}

export default App;
