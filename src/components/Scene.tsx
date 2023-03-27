import React from "react";

interface Props {
  bright: boolean;
  picture: string;
  video?: string;
}

export const Scene = ({ bright, picture }: Props) => {
  return (
    <div>
      <div className=" z-[-1] w-[100%]">
        {/* <img src={picture} className="h-screen object-cover brightness-[80%]" alt="" /> */}

        <video
          className={
            bright
              ? "w-[100%] h-screen object-cover brightness-[30%]"
              : "w-[100%] h-screen object-cover brightness-[80%]"
          }
          src={picture}
          //autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};
