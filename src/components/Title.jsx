import React from "react";

const Title = ({ title, tagline, subtitle, subtitleWidth }) => {
  return (
    <div className="flex flex-col mx-auto items-center gap-3">
      <p className=" text-primary text-lg font-semibold">{title}</p>
      {tagline}

      <p
        className={`text-black/50 text-lg font-medium  ${
          subtitleWidth && `max-w-[${subtitleWidth}px]`
        } text-center`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
