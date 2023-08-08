import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button>Test</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: grey');
  });

  test('should render inverted button when passed inverted button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const invertedButtonElement = screen.getByRole('button');
    expect(invertedButtonElement).toHaveStyle('background-color: #f2ea00');
  });

  test('should render large base button when passed large button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.large} />);

    const largeButtonElement = screen.getByRole('button');
    expect(largeButtonElement).toHaveStyle('height: 70px');
  });

  test('should render scroll button when passed scroll button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.scroll} />);

    const scrollButtonElement = screen.getByRole('button');
    expect(scrollButtonElement).toHaveStyle('border-radius: 100%');
  });

  test('should render send button when passed send button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.send} />);

    const sendButtonElement = screen.getByRole('button');
    expect(sendButtonElement).toHaveStyle('width: 100%');
  });
});
