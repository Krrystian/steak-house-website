import React from "react";
import { Gallery } from "../components/Gallery";
import { Menu } from "../components/Menu";
import { OurKitchen } from "../components/OurKitchen";
import { Scene } from "../components/Scene";

const images = [
  {
    popup: "New Year",
    src: "/newYear.jpg",
  },
  {
    popup: "Our Home",
    src: "/building.jpg",
  },
  {
    popup: "Everyday Cuisine",
    src: "/dinner.jpg",
  },
  {
    popup: "Official Meetings",
    src: "/officialMeetings.jpg",
  },
  {
    popup: "Cooking Lessons",
    src: "/teaching.jpg",
  },
];

const menuItems = [
  {
    heading: "Steaks",
    description:
      "Our restaurant offers a range of premium quality steaks, cooked to perfection just the way you like it. \
        Whether you prefer a juicy ribeye or a tender filet mignon, our steaks are always fresh, hand-cut, and cooked to order. ",
  },
  {
    heading: "Burgers",
    description:
      "At our steak restaurant, we understand that sometimes you crave a classic burger. That's why we offer a range of delicious, \
      handcrafted burgers made with high-quality beef and minimal fillers, so you can still taste the rich, meaty flavor that we're known for. ",
  },
  {
    heading: "Alcohols",
    description:
      "a carefully curated selection of high-quality alcohols to complement your dining experience. From classic cocktails to premium \
      spirits, we have something for everyone. Our expertly crafted cocktails use only the freshest ingredients, and our bartenders are always happy \
      to make recommendations based on your tastes. ",
  },
];

export const AboutUs = () => {
  return (
    <>
      <Scene video={true} source="backgrounds/video2.mp4"></Scene>
      <OurKitchen />
      <Menu items={menuItems} />
      <Gallery items={images} />
    </>
  );
};
