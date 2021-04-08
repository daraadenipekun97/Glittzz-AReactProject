import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({children, ...CustomButtonotherProps}) => {
   return(
    <button className = "custom-button" {...CustomButtonotherProps}>

            {children}

    </button>
   );
}

export default CustomButton;