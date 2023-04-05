import React from "react";
import { MenuList } from "../components/MenuList";

const steakItems = [
  {
    name: "Filet Mignon 49$",
    ingredients: "Beef tenderloin, plum sauce, caesar, carrot puree",
    image: "?",
  },
  {
    name: "Beef Wellington 63$",
    ingredients: "Aberdeen Angus, prosciutto, chestnut mushrooms",
    image: "?",
  },
  {
    name: "American Steak & Fries 35$",
    ingredients: "Ask for available steaks, fries, sauce",
    image: "?",
  },
];

const burgerItems = [
  {
    name: "Classic Burger 25$",
    ingredients:
      "Ask for available meat, American cheese, garlic powder, tomato, onion, pickles, sauce",
    image: "?",
  },
  {
    name: "Cheeseburger 27$",
    ingredients:
      "Ask for available meat and cheese, garlic powder, tomato, onion, pickles, sauce",
    image: "?",
  },
  {
    name: "Steak Sandwich 5-40$",
    ingredients: "Ask for available steaks, handmade bread",
    image: "?",
  },
];

const drinkItems = [
  {
    name: "Craft Beers 3-10$",
    ingredients:
      "Sierra Nevada, Odell, Bell's Brewery, New Belgium, Bear Republic",
    image: "?",
  },
  {
    name: "Speciality 3-40$",
    ingredients:
      "Our experts will choose a personal alcohol that will fits you and your dish",
    image: "?",
  },
  {
    name: "Wines 10-30$",
    ingredients:
      "Dutton Estate Winery Sweet, Hatzidakis Aidani Dry White Wine and more...",
    image: "?",
  },
];

export const Cuisine = () => {
  return (
    <MenuList steaks={steakItems} burgers={burgerItems} drinks={drinkItems} />
  );
};
