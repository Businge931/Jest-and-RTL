import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color,text and functionality", () => {
  render(<App />);
  // find an element with the role button and text of 'Change to blue'
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });

  // 1. TEST PHYSICAL APPEARANCE/CONTENT OF BUTTON
  // expect the background color to be red
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });

  // 2. TEST FUNCTIONALITY WHEN CLICKED
  //click button
  fireEvent.click(buttonElement);

  // expect the background color to be blue
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(buttonElement.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox start out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
