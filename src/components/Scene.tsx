import React, { ReactNode } from "react";

interface Props {
  source: string;
  video?: boolean;
  children?: ReactNode;
  bright?: string;
  media?: string;
}

export const Scene = ({
  source,
  video = false,
  children,
  bright = "0.7",
  media = "100vh",
}: Props) => {
  return (
    <div
      className={
        media ? ` md:h-[100vh] h-[${media}] z-10 mb-3` : `h-[100vh] z-10 mb-3 `
      }
    >
      <div className=" absolute z-[-1] w-[100%]">
        {video ? (
          <video
            className={`w-[100%] h-[100vh] object-cover brightness-[0.7]`}
            src={source}
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={source}
            className={`w-[100%] md:h-[100vh] h-[${media}] object-cover overflow-hidden brightness-[" +
              bright +
              "]`}
            alt=""
          />
        )}
      </div>
      {children}
    </div>
  );
};
