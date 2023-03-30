import React from "react";

export const OurKitchen = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-screen px-4 md:px-16 pb-12">
        <div className="col-span-2 text-neutral-300 font-codepro text-center flex flex-col justify-center gap-20">
          <h3 className="md:text-6xl text-4xl italic pt-[60px]">
            We put <span className="text-[#fc6203]">High-Stake</span> to make
            <span className="text-[#fc6203]"> High-Steak</span>.
          </h3>
          <div>
            <p className="text-xl md:text-2xl">
              Our SteakHouse focus on delivering Michelin-Star level dishes onto
              your plate. Over last 10 years we have worked with many customers
              and companies. Our experience showcases inspiration, creativity
              and hardwork to master this delightful product. Our experts seek
              and import high-quality ingredients from every corner of the
              world, we don't use replacements.
            </p>
            <p className="mt-6 text-xl md:text-2xl italic text-neutral-400">
              No matter occassion, happy or sad, wedding or funeral, We will
              make it tasty. ~ <span className="text-[#fc6203]">CEO</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-4 md:order-first pt-[100px]">
          <img
            src="/src/assets/Food/liveCooking.jpg"
            className="md:h-[44rem] w-full object-cover rounded-xl shadow-2xl brightness-[90%] shadow-slate-900"
            alt=""
          />
        </div>
      </div>
      <img
        src="src/assets/blackbackground.jpg"
        className="absolute z-[-1] top-0 left-0 object-fill h-full w-full brightness-[80%]"
        alt=""
      />
    </div>
  );
};
