import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BookCard } from "../Card";

describe("BookCard test", () => {
  it("should make a book card", () => {
    const book: BookProps = {
      id: "123",
      type: "book",
      attributes: {
        slug: "book",
        author: "Author",
        cover: "/dementor.png",
        dedication: "Dedication",
        pages: 0,
        release_date: "2000-01-01",
        summary: "Summary",
        title: "Title",
        wiki: "Wiki",
      },
      relationships: {
        chapters: {
          data: [{ id: "chapterId", type: "chapter" }],
        },
      },
      links: {
        self: "link",
      },
    };

    render(<BookCard {...book} />);

    const myElem = screen.getByAltText("book");
    expect(myElem).toBeInTheDocument();
  });
});
