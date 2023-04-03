import React from "react";
import { MenuList } from "../components/MenuList";

const steakItems = [
  {
    name: "Filet Minion 49$",
    ingredients: "Beef tenderloin, plum sauce, caesar, carrot puree",
    image: "?",
  },
  {
    name: "Beef Wellington 63$",
    ingredients: "Aberdeen Angus, prosciutto, chestnut mushrooms",
    image: "?",
  },
  {
    name: "Steak Sandwich 5-40$",
    ingredients: "Ask for available steaks, handmade bread",
    image: "?",
  },
  {
    name: "American Steak & Fries 35$",
    ingredients: "Ask for available steaks, fries, sauce",
    image: "?",
  },
];

export const Cuisine = () => {
  return (
    <MenuList steaks={steakItems} burger={steakItems} drink={steakItems} />
  );
};
