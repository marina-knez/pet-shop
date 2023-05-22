import { BaseButton, BaseButtonLarge, InvertedButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    inverted: 'inverted',
    large: 'large'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.large]: BaseButtonLarge
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button;