import React from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (button_type) => {
    switch (button_type) {
        case BUTTON_TYPE_CLASSES.base:
            return BaseButton;
        case BUTTON_TYPE_CLASSES.inverted:
            return InvertedButton;
        case BUTTON_TYPE_CLASSES.google:
            return GoogleSignInButton;
        default:
            return BaseButton;
    }
};

const Button = ({ children, button_type = BUTTON_TYPE_CLASSES.base, ...otherProps }) => {
    const CustomButton = getButton(button_type); // Use uppercase convention for component variable

    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    );
};

export default Button;
