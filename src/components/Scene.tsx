import React from "react";

interface Props {
  bright: boolean;
  source: string;
  video?: boolean;
}

export const Scene = ({ bright, source, video = false }: Props) => {
  return (
    <div>
      <div className=" z-[-1] w-[100%]">
        {video ? (
          <video
            className={
              bright
                ? " h-screen object-cover brightness-[30%]"
                : " h-screen object-cover brightness-[80%]"
            }
            src={source}
            //autoPlay
            muted
            loop
          ></video>
        ) : (
          <img
            src={source}
            className={
              bright
                ? " h-screen object-cover brightness-[30%]"
                : " h-screen object-cover brightness-[80%]"
            }
            alt=""
          />
        )}
      </div>
    </div>
  );
};
