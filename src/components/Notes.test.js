/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Note from "./Note";

test("renders content", () => {
  const note = {
    content: "This is a test",
    important: true,
  };

  const component = render(<Note note={note} />);

  component.getByText("This is a test");
  component.getByText("make not important");

  //   expect(component.container).toHaveTextContent("camiones");
  //   component.debug();
  //   const li = component.container.querySelector("li");
  //   console.log(li);
});

test("clicking", () => {
  const note = {
    content: "This is a test",
    important: true,
  };

  const mockHandler = jest.fn();

  const component = render(<Note note={note} toggleImportance={mockHandler} />);
  const button = component.getByText("make not important");

  fireEvent.click(button);

  //   expect(mockHandler.mock.calls).toHaveLength(2);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
