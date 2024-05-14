import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

test("App contains correct label and color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  expect(buttonElement).toHaveClass("red");

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent(/red/i);

  expect(buttonElement).toHaveClass("blue");
});

test("checkbox flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();

  fireEvent.click(checkboxElement);

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});
