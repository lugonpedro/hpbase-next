import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";

describe("Button unit test", () => {
  it("should make a button", () => {
    const onClickSpy = jest.fn();
    render(<Button label="Teste" onClick={onClickSpy} disabled={false} />);

    const myElem = screen.getByText("Teste");
    expect(myElem).toBeInTheDocument();
    myElem.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
});
