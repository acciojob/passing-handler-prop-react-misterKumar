import React , {useState} from 'react';


const Selection=({applyColor})=>{

const [selectionStyle,updateSelectionStyle]=useState({});  


console.log(selectionStyle);
    return (
      <div className='fix-box' style={selectionStyle} onClick={()=>applyColor(updateSelectionStyle)}>
         <h1>Selection</h1>
      </div>
    )
}

export default Selection;