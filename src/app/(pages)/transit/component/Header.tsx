import { ReactNode, useState } from "react";
import { CiKeyboard } from "react-icons/ci";
import { MdAccessibleForward, MdArrowBackIosNew, MdArrowForwardIos, MdStore } from "react-icons/md";
import { TbAlertCircleFilled, TbDeviceIpad, TbPencil } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";

type HeaderContentType = {
  icon: ReactNode;
  text: string;
};

const headerContents: HeaderContentType[] = [
  { icon: <CiKeyboard className="w-8 h-8" />, text: "Keyboard" },
  { icon: <TbPencil className="w-8 h-8" />, text: "Pencil" },
  { icon: <MdAccessibleForward className="w-8 h-8" />, text: "Accessories" },
  { icon: <TbDeviceIpad className="w-8 h-8" />, text: "IpadIOS" },
  { icon: <TbAlertCircleFilled className="w-8 h-8" />, text: "Alerts" },
  { icon: <TiWeatherPartlySunny className="w-8 h-8" />, text: "Weather" },
  { icon: <MdStore className="w-8 h-8" />, text: "Store" },
];

export default function Header() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  return (
    <div className="flex items-center justify-center mt-4 mb-10 gap-8 w-full">
      <div className="w-1/12 grow">
        <MdArrowBackIosNew
          className="w-8 h-8"
          onClick={() => {
            if (startIndex > 0) {
              setStartIndex((prv) => prv - 3);
              setEndIndex((prv) => prv - 3);
            }
          }}
        />
      </div>
      <div className="flex justify-between grow w-10/12 overflow-hidden">
        {headerContents.slice(startIndex, endIndex).map((content) => (
          <div key={content.text} className="flex flex-col items-center justify-center">
            {content.icon}
            <span>{content.text}</span>
          </div>
        ))}
      </div>
      <div className="w-1/12 grow flex justify-end">
        <MdArrowForwardIos
          className="w-8 h-8"
          onClick={() => {
            if (endIndex <= headerContents.length - 1) {
              setStartIndex((prv) => prv + 3);
              setEndIndex((prv) => prv + 3);
            }
          }}
        />
      </div>
    </div>
  );
}
