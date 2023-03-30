import { useState } from "react";
import { AboutUs } from "./components/AboutUs";
import { Navbar } from "./components/Navbar";
import { OurKitchen } from "./components/OurKitchen";
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
    text: "Reservation",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
];
const images = [
  {
    popup: "New Year",
    src: "/newYear.jpg",
  },
  {
    popup: "Everyday Cuisine",
    src: "/dinner.jpg",
  },
  {
    popup: "Live Cooking",
    src: "/liveCooking.jpg",
  },
  {
    popup: "Delivery",
    src: "/delivery.jpg",
  },
  {
    popup: "Official Meetings",
    src: "/officialMeetings.jpg",
  },
  {
    popup: "Outside BBQ",
    src: "/outside.jpg",
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
      <Scene
        bright={"0.6"}
        media={"150vh"}
        source="/src/assets/blackbackground.jpg"
      >
        {/* <AboutUs items={images} /> */}
        <OurKitchen />
      </Scene>
    </>
  );
}

export default App;
