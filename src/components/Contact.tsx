import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineMailOutline, MdSmartphone } from "react-icons/md";

export const Contact = () => {
  const handleSubmit = () => {
    alert("Your message has been sent!");
  };
  return (
    <div className="min-h-screen mb-[-25px] relative px-8 flex pt-56 gap-4 font-codepro text-2xl md:text-3xl text-center flex-col md:flex-row">
      <div className="text-white w-full  flex flex-col">
        <h3 className="my-6">How to contact Us</h3>
        <div className="flex text-xl md:text-2xl gap-3 justify-center italic">
          <BiCurrentLocation color="#fc6203" /> Nałęczowskia 10D, Lublin
          <BiCurrentLocation color="#fc6203" />
        </div>
        <div className="flex text-xl md:text-2xl gap-3 pt-4 justify-center italic">
          <MdOutlineMailOutline color="#fc6203" />
          krystiancichorz708@gmail.com
          <MdOutlineMailOutline color="#fc6203" />
        </div>
        <div className="flex text-xl md:text-2xl gap-3 pt-4 justify-center mb-6 italic">
          <MdSmartphone color="#fc6203" />
          +48 123 000 000
          <MdSmartphone color="#fc6203" />
        </div>
        <h3 className="border-t-2 border-[#fc6203] mb-6 pt-6">Opening Hours</h3>
        <div className="flex text-xl md:text-2xl gap-3 pt-4 justify-center italic">
          <p>
            Tuesday - Thursday: 1pm to 11pm
            <span className="text-[#fc6203]"> OPEN</span>
          </p>
        </div>
        <div className="flex text-xl md:text-2xl gap-3 pt-4 justify-center mb-6 italic">
          <p>
            Friday - Sunday: 3pm to 11pm
            <span className="text-[#fc6203]"> RESERVATION</span>
          </p>
        </div>
        <h3 className="border-t-2 border-[#fc6203] mb-6 pt-6">
          How to book a table
        </h3>
        <div className="flex text-xl md:text-2xl gap-3 pt-4 justify-center mb-6 italic">
          Contact Us via email, phone or social media. You can also use form on
          our website
        </div>
      </div>
      <div className="text-white w-full flex flex-col pb-[25px]">
        <form className="text-neutral-300 py-6" onSubmit={handleSubmit}>
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent rounded-md placeholder-gray-400 p-3"
              required
            ></input>
            <input
              type="email"
              name="name"
              placeholder="Your E-mail"
              className="bg-transparent rounded-md placeholder-gray-400 p-3"
              required
            ></input>
            <textarea
              name="message"
              rows={10}
              placeholder="Leave Us a message!"
              className="bg-transparent rounded-md placeholder-gray-400 p-3 md:col-span-2 resize-none"
              required
            />
          </fieldset>
          <div className="flex justify-between gap-5 mt-4">
            <button type="submit" className=" w-full rounded-xl bg-gray-700">
              Submit
            </button>
            <button type="reset" className=" w-full rounded-xl bg-gray-700">
              Reset
            </button>
          </div>
        </form>
      </div>

      <img
        src="backgrounds/cuisine.jpg"
        className="absolute z-[-1] top-0 left-0 object-fill h-full w-full brightness-[60%]"
        alt=""
      />
    </div>
  );
};
