import Image from "next/image";
import React from "react";

const HeaderTitle = () => {
  return (
    <div
      data-testid="projectTitle"
      className="flex w-full items-center border-b px-4 pt-4 pb-2"
    >
      <Image
        src={"/tcp-icon.png"}
        width={30}
        height={30}
        alt="The Citicen Project logo"
      />
      <div data-testid="projecttitle" className="text-2xl font-bold ml-2">
        ROOSEVELT ISLAND
      </div>
    </div>
  );
};

export default HeaderTitle;
