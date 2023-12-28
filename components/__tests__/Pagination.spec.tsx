import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from "../Pagination";

describe("Pagination unit test", () => {
  it("should make a pagination module", () => {
    const onClickPreviousSpy = jest.fn();
    const onClickNextSpy = jest.fn();
    render(
      <Pagination
        activeIndex={1}
        pages={5}
        onClickPreviousButton={onClickPreviousSpy}
        onClickNextButton={onClickNextSpy}
      />
    );

    const myElem = screen.getByText("1/5");
    expect(myElem).toBeInTheDocument();
  });
});
