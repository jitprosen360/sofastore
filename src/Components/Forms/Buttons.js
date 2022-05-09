import React, { Children } from "react";

const Buttons = ({Children,...otherProps}) => {
    return(
     <div>
         <button className="l-google" {...otherProps}>
         Sign With Google
            {Children}
         </button>
     </div>
    )
}
export default Buttons;

