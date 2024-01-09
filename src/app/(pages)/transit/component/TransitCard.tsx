import Image from "next/image";
import React from "react";

function TransitCard({ train, time, direction }: any) {
  /*
    The Train Card Module.

    This interface is a single unit, or Row, of train data. The design consists
    of 
        - taking a Train Type, our case the F train, and create an icon shape
        - displaying whether the train is a north or south bound
        - showing how many minutes away a train is.
    Most of these are accomplished using in-line css, and prop drilling from the 
    parent Train module.
    
        -------------------------------------------------------
        |   _div______   __div__________           __div_____  |
        |   |    F   |   |   N/S Bound |           |  X mins | |
        |   |________|   |_____________|           |_________| |
        -------------------------------------------------------
    */

  let imageSrc = "/ferry_icon.png";
  if (train === "tram") imageSrc = "/tram.png";
  if (train === "F") imageSrc = "/f-letter.png";

  return (
    <React.Fragment>
      <div className="flex items-center justify-between my-4 pb-4 border-b border-stone-400">
        <div className="flex items-center">
          <div>
            <Image src={imageSrc} width={50} height={50} alt={direction} />
          </div>
          <div className="ml-4">
            <p className="font-bold">{direction}</p>
          </div>
        </div>
        <div>
          <span className="font-bold mr-1"> {`${time} mins`}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TransitCard;
