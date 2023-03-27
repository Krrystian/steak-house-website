import React, { useState } from "react";
import { FaHamburger, FaFacebook, FaInstagram } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

interface Items {
  text: string;
  href: string;
}
interface Props {
  items: Items[];
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ items, navbarOpen, setNavbarOpen }: Props) => {
  return (
    <>
      <div className="fixed cursor-default z-50">
        <div className="w-screen h-[100px] text-3xl pt-8 text-slate-300 font-codepro cursor-defaul relative">
          <div className="lg:hidden absolute mx-4 cursor-pointer">
            <a>
              <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} />
            </a>
          </div>
          <div className="flex lg:justify-between justify-end">
            <div className="lg:flex flex-row hidden">
              {items.map((item, index) => (
                <div key={index}>
                  <a
                    className="px-3 hover:animate-colorChange"
                    href={item.href}
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 mr-8">
              <a className="hover:animate-colorChange" href="">
                <FaFacebook />
              </a>
              <a className="hover:animate-colorChange" href="">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div
            className={
              navbarOpen
                ? "hidden"
                : "absolute top-[100%] right-[50%] translate-x-[50%] translate-y-[-50%] flex flex-col text-center"
            }
          >
            <div className="text-2xl md:text-4xl text-slate-400">HIGH</div>
            <div className="text-slate-100 text-6xl md:text-9xl">STEAK</div>
          </div>
          <div>
            <div
              className={
                !navbarOpen ? "hidden" : " w-screen h-[320px] overflow-hidden"
              }
            >
              <div className="flex flex-col text-center gap-8">
                {items.map((item, index) => (
                  <div key={index}>
                    <a
                      className="px-3 hover:animate-colorChange"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
