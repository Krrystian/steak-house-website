import React from "react";

export const Menu = () => {
  return (
    <div className="relative text-neutral-400 text-2xl font-codepro">
      <div className="grid md:grid-cols-2 border">
        <div className="col-start-2 flex">
          <div className="flex flex-col justify-center mx-3 md:mx-10 divide-y divide-[#fc6203] text-center md:text-start">
            <div className="py-12">
              <h3 className="md:text-6xl text-4xl text-neutral-200">Steaks</h3>
              <p className="italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum officia reprehenderit voluptates odit nemo fuga!
              </p>
            </div>
            <div className="py-12">
              <h3 className="md:text-6xl text-4xl text-neutral-200">Burgers</h3>
              <p className="italic ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum officia reprehenderit voluptates odit nemo fuga!
              </p>
            </div>
            <div className="py-12">
              <h3 className="md:text-6xl text-4xl  text-neutral-200">
                Alcohols
              </h3>
              <p className="italic ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum officia reprehenderit voluptates odit nemo fuga!
              </p>
            </div>
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
