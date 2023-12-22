import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  BookCard,
  CharacterCard,
  MovieCard,
  PotionCard,
  SpellCard,
} from "../Card";

describe("BookCard test", () => {
  it("should make a card", () => {
    const book: BookProps = {
      id: "123",
      type: "book",
      attributes: {
        slug: "book",
        author: "",
        cover: "/dementor.png",
        dedication: "",
        pages: 0,
        release_date: "",
        summary: "",
        title: "",
        wiki: "",
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

describe("CharacterCard test", () => {
  it("should make a card", () => {
    const character: CharacterProps = {
      id: "123",
      type: "character",
      attributes: {
        slug: "character",
        alias_names: [],
        animagus: "",
        blood_status: "",
        boggart: "",
        born: "",
        died: "",
        eye_color: "",
        family_members: [],
        gender: "",
        hair_color: "",
        height: "",
        house: "",
        image: "/dementor.png",
        jobs: [],
        marital_status: "",
        name: "Personagem 1",
        nationality: "",
        patronus: "",
        romances: [],
        skin_color: "",
        species: "",
        titles: [],
        wands: [],
        weight: "",
        wiki: "",
      },
      links: {
        self: "",
      },
    };

    render(<CharacterCard {...character} />);

    const myElem = screen.getByText("Personagem 1");
    expect(myElem).toBeInTheDocument();
  });
});

describe("MovieCard test", () => {
  it("should make a card", () => {
    const movie: MovieProps = {
      id: "123",
      type: "movie",
      attributes: {
        slug: "movie",
        box_office: "",
        budget: "",
        cinematographers: [],
        directors: [],
        distributors: [],
        editors: [],
        music_composers: [],
        poster: "/dementor.png",
        producers: [],
        rating: "",
        release_date: "",
        running_time: "",
        screenwriters: [],
        summary: "",
        title: "",
        trailer: "",
        wiki: "",
      },
      links: {
        self: "",
      },
    };

    render(<MovieCard {...movie} />);

    const myElem = screen.getByAltText("movie");
    expect(myElem).toBeInTheDocument();
  });
});

describe("PotionCard test", () => {
  it("should make a card", () => {
    const potion: PotionProps = {
      id: "123",
      type: "potion",
      attributes: {
        slug: "potion",
        characteristics: "",
        difficulty: "",
        effect: "",
        image: "/dementor.png",
        inventors: "",
        ingredients: "",
        manufacturers: "",
        name: "Poção 1",
        side_effects: "",
        time: "",
        wiki: "",
      },
      links: {
        self: "",
      },
    };

    render(<PotionCard {...potion} />);

    const myElem = screen.getByText("Poção 1");
    expect(myElem).toBeInTheDocument();
  });
});

describe("SpellCard test", () => {
  it("should make a card", () => {
    const spell: SpellProps = {
      id: "123",
      type: "spell",
      attributes: {
        slug: "spell",
        category: "",
        creator: "",
        effect: "",
        hand: "",
        image: "/dementor.png",
        incantation: "",
        light: "",
        name: "Magia 1",
        wiki: "",
      },
      links: {
        self: "",
      },
    };

    render(<SpellCard {...spell} />);

    const myElem = screen.getByText("Magia 1");
    expect(myElem).toBeInTheDocument();
  });
});
