import React from 'react';

import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignedIn, inverted, ...otherProps}) => (
  <button className={`${inverted ? "iverted": ""} ${isGoogleSignedIn ? "google-sign-in": ""} custom-button`} 
  {...otherProps}>
      {children}
  </button>
)

export default CustomButton;