import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Togglable from "./Togglable";
import i18n from "../i18n/index";

describe("<Toggable />", () => {
  const buttonLabel = "show";
  let component;
  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div>testDivContent</div>
      </Togglable>
    );
  });

  test("renders its children", () => {
    component.getByText("testDivContent");
  });

  test("renders its children style", () => {
    const el = component.getByText("testDivContent");
    expect(el.parentNode).toHaveStyle("display: none");
  });

  test("after clicking its children must be shown", () => {
    const button = component.getByText(buttonLabel);
    fireEvent.click(button);

    const el = component.getByText("testDivContent");
    expect(el.parentNode).not.toHaveStyle("display: none");
  });
});
