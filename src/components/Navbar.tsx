import React, { useEffect, useState } from "react";
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
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <>
      <div className="fixed cursor-default w-full z-[9999] flex flex-col font-codepro">
        <div
          className={`w-screen h-[100px] text-2xl text-slate-300 font-codepro cursor-default flex relative transition-all duration-500 ${
            scrollPosition > 100 ? "bg-black" : ""
          }`}
        >
          <div className="flex items-center xl:hidden mx-4 cursor-pointer">
            <a>
              <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} />
            </a>
          </div>
          <div className="flex items-center w-[100%] xl:justify-between justify-end">
            <div className="xl:flex flex-row hidden">
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
                : scrollPosition < 100
                ? "absolute top-[100%] right-[50%] translate-x-[50%] translate-y-[-50%] flex flex-col text-center"
                : "absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex flex-col justify-center text-center transition-all duration-500 scale-[.6]"
            }
          >
            <div className="text-2xl md:text-4xl text-slate-400">HIGH</div>
            <div className="text-6xl md:text-9xl text-slate-100">STEAK</div>
          </div>
        </div>
        <div>
          <div
            className={
              !navbarOpen ? "hidden" : " w-screen h-[320px] overflow-hidden"
            }
          >
            <div className="flex flex-col text-center gap-8 text-4xl md:text-5xl text-neutral-300">
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
      <div
        className={
          navbarOpen
            ? "fixed top-0 left-0 h-full min-h-screen w-screen z-[999] bg-black opacity-90"
            : "hidden"
        }
      ></div>
    </>
  );
};
