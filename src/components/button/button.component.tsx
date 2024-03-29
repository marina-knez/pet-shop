import { FC, ButtonHTMLAttributes } from 'react';
import { BaseButton, BaseButtonLarge, InvertedButton, BaseButtonScroll, BaseButtonSend } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    inverted = 'inverted',
    large = 'large',
    scroll = 'scroll',
    send = 'send'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.large]: BaseButtonLarge,
    [BUTTON_TYPE_CLASSES.scroll]: BaseButtonScroll,
    [BUTTON_TYPE_CLASSES.send]: BaseButtonSend
}[buttonType]);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button;