import React, { ReactNode } from "react";

interface Props {
  onMenuOpen: boolean;
  source: string;
  video?: boolean;
  children?: ReactNode;
  brightness?: string;
}

export const Scene = ({
  onMenuOpen,
  source,
  video = false,
  children,
  brightness = "80",
}: Props) => {
  return (
    <div>
      <div className=" absolute z-[-1] w-[100%]">
        {video ? (
          <video
            className={
              onMenuOpen
                ? "w-[100%] h-screen object-cover brightness-[30%]"
                : "w-[100%] h-screen object-cover brightness-[" +
                  brightness +
                  "%]"
            }
            src={source}
            //autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={source}
            className={
              onMenuOpen
                ? "w-[100%] h-screen object-cover brightness-[30%]"
                : "w-[100%] h-screen object-cover brightness-[" +
                  brightness +
                  "%]"
            }
            alt=""
          />
        )}
      </div>
      <div className="h-screen z-10 mb-3">{children}</div>
    </div>
  );
};
