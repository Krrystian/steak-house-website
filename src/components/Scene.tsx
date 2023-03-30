import React, { ReactNode } from "react";

interface Props {
  source: string;
  video?: boolean;
  children?: ReactNode;
  bright?: string;
}

export const Scene = ({
  source,
  video = false,
  children,
  bright = "0.7",
}: Props) => {
  return (
    <div>
      <div className=" absolute z-[-1] w-[100%]">
        {video ? (
          <video
            className={"w-[100%] h-screen object-cover brightness-[0.7]"}
            src={source}
            // autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={source}
            className={
              "w-[100%] h-screen object-cover overflow-hidden brightness-[" +
              bright +
              "]"
            }
            alt=""
          />
        )}
      </div>
      <div className="h-screen z-10 mb-3">{children}</div>
    </div>
  );
};
