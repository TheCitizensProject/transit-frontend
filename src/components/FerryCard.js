import React from 'react'

function FerryCard({train, time, direction}) {
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
  return (
    <React.Fragment>
        <div style={{'display':'flex'}}>
            <div style={{'display':'flex', 'marginBottom':'20px'}}>
                <div>
                    <img src='./ferry_icon.png' width="50px"></img>
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
                    }}> {time}</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default FerryCard