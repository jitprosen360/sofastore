import React, { Component } from 'react';


const  FormInput = ({handleChange, label, ...ohterProps}) =>  {
       return(
           <div>
           {label && (
               <label>
                   {label}
               </label>
           )}
           <input className='forminput' onChange={handleChange} {...ohterProps} />
           </div>
       )
   }

export default FormInput;

