import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({children, isGoogleSignIn, ...CustomButtonotherProps}) => {
   return(
    <button 
    className = {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
     {...CustomButtonotherProps}>

            {children}

    </button>
   );
}

export default CustomButton;