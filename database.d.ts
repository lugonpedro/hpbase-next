interface BookProps {
  id: string;
  type: string;
  attributes: {
    slug: string;
    author: string;
    cover: string;
    dedication: string;
    pages: number;
    release_date: string;
    summary: string;
    title: string;
    wiki: string;
  };
  relationships: {
    chapters: {
      data: [
        {
          id: string;
          type: string;
        }
      ];
    };
  };
  links: {
    self: string;
  };
}

interface CharacterProps {
  id: string;
  type: string;
  attributes: {
    slug: string;
    alias_names: string[];
    animagus: string;
    blood_status: string;
    boggart: string;
    born: string;
    died: string;
    eye_color: string;
    family_members: string[];
    gender: string;
    hair_color: string;
    height: string;
    house: string;
    image: string;
    jobs: string[];
    marital_status: string;
    name: string;
    nationality: string;
    patronus: string;
    romances: string[];
    skin_color: string;
    species: string;
    titles: string[];
    wands: string[];
    weight: string;
    wiki: string;
  };
  links: {
    self: string;
  };
}

interface MovieProps {
  id: string;
  type: string;
  attributes: {
    slug: string;
    box_office: string;
    budget: string;
    cinematographers: string[];
    directors: string[];
    distributors: string[];
    editors: string[];
    music_composers: string[];
    poster: string;
    producers: string[];
    rating: string;
    release_date: string;
    running_time: string;
    screenwriters: string[];
    summary: string;
    title: string;
    trailer: string;
    wiki: string;
  };
  links: {
    self: string;
  };
}

interface PotionProps {
  id: string;
  type: string;
  attributes: {
    slug: string;
    characteristics: string;
    difficulty: string;
    effect: string;
    image: string;
    inventors: string;
    ingredients: string;
    manufacturers: string;
    name: string;
    side_effects: string;
    time: string;
    wiki: string;
  };
  links: {
    self: string;
  };
}

interface SpellProps {
  id: string;
  type: string;
  attributes: {
    slug: string;
    category: string;
    creator: string;
    effect: string;
    hand: string;
    image: string;
    incantation: string;
    light: string;
    name: string;
    wiki: string;
  };
  links: {
    self: string;
  };
}

interface ChapterProps {
  id: string;
  type: string;
  attributes: {
    slug: string;
    order: numberstring;
    summary: string;
    title: string;
  };
}

interface IPageProps {
  params: { slug: string };
  searchParams: Record<string | string[], string | undefined>;
}
