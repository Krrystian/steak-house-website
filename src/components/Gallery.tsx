import React from "react";
interface Item {
  popup: string;
  src: string;
}
interface Props {
  items: Item[];
}

export const Gallery = ({ items }: Props) => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 m-8 mb-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === 1 ? "relative row-span-2" : "relative"}
          >
            <div className="absolute z-[100] h-full w-full text-3xl font-codepro justify-center items-center flex opacity-0 text-neutral-100 rounded-xl overflow-hidden hover:bg-black/75 hover:opacity-100 transition duration-500">
              <h4>{item.popup}</h4>
            </div>
            <img
              key={index}
              src={"/gallery/" + item.src}
              className={
                index === 1
                  ? "w-[40rem] h-[40.5rem] object-cover rounded-xl shadow-xl brightness-[90%] shadow-slate-900"
                  : "w-[40rem] h-[20rem] object-cover rounded-xl shadow-xl brightness-[90%] shadow-slate-900"
              }
            ></img>
          </div>
        ))}
      </div>
    </>
  );
};
