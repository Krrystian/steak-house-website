import React from "react";
interface Item {
  popup: string;
  src: string;
}
interface Props {
  items: Item[];
}

export const AboutUs = ({ items }: Props) => {
  return (
    <>
      <h3 className=" text-neutral-300 md:text-6xl text-4xl font-codepro text-center italic px-5 pt-[120px]">
        We put <span className="text-[#fc6203]">High-Stake</span> to make
        <span className="text-[#fc6203]"> High-Steak</span> for every occasion.
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 m-8">
        {items.map((item, index) => (
          <div className="relative">
            <div className="absolute z-[100] h-full w-full text-3xl font-codepro justify-center items-center flex opacity-0 text-neutral-100 rounded-xl overflow-hidden hover:bg-black/75 hover:opacity-100 transition duration-500">
              <h4>{item.popup}</h4>
            </div>
            <img
              key={index}
              src={"src/assets/Food/" + item.src}
              className="w-[40rem] h-[20rem] object-cover rounded-xl shadow-xl brightness-[90%] shadow-slate-900"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
};
