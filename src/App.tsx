import { useState } from "react";
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
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Navbar
        items={items}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <Scene
        onMenuOpen={navbarOpen}
        video={true}
        source="/src/assets/video.mp4"
      ></Scene>
      <Scene
        onMenuOpen={navbarOpen}
        brightness={"30"}
        source="/src/assets/grill.jpg"
      ></Scene>
    </>
  );
}

export default App;
