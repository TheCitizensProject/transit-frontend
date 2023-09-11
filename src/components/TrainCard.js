import React from 'react'

function TrainCard({train, time, direction}) {
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
   let imageSrc;

   if (train==='F'){
    imageSrc = './f-letter.png'
   }
  return (
    <React.Fragment>
        <div style={{'display':'flex'}}>
            <div style={{'display':'flex'}}>
                <div>
                    <img src={imageSrc} width="50px"/>
                </div>
                <div style={{'marginLeft': '20px',}}>
                    <p style={{
                        'fontSize': '20px', 'fontWeight': '600'
                    }}>{direction}</p>
                </div>
            </div>
            <div style={{'marginLeft': 'auto', 'marginRight':'0' }}>
                <p style={{
                    'fontSize': '20px', 'fontWeight': '400'
                    }}> {time} mins</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default TrainCard