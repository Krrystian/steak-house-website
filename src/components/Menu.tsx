import React from "react";
interface Item {
  heading: string;
  description: string;
}
interface Props {
  items: Item[];
}

export const Menu = ({ items }: Props) => {
  return (
    <div className="relative text-neutral-400 text-2xl font-codepro min-h-screen pt-[100px] pb-3">
      <div className="grid md:grid-cols-2">
        <div className="col-start-2 flex ">
          <div className="flex flex-col justify-center mx-3 md:mx-10 divide-y divide-[#fc6203] md:text-start">
            {items.map((item, index) => (
              <div key={index} className="py-12">
                <h3 className="md:text-6xl text-4xl text-neutral-200">
                  {item.heading}
                </h3>
                <p className="italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="src/assets/background2.jpg"
        className="absolute z-[-1] top-0 left-0 object-cover h-full w-full brightness-[40%] md:brightness-[70%]"
        alt=""
      />
    </div>
  );
};
