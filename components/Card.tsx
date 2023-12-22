"use client";
import Image from "next/image";
import Link from "next/link";

export function BookCard(book: BookProps) {
  return (
    <Link href={`/books/${book.attributes.slug}`}>
      <Image
        src={book.attributes.cover}
        alt={book.attributes.slug}
        width={300}
        height={300}
        className="w-full h-full rounded-xl object-cover object-top"
      />
    </Link>
  );
}

export function CharacterCard(character: CharacterProps) {
  return (
    <Link
      href={`/characters/${character.attributes.slug}`}
      className="flex flex-col gap-4"
    >
      <Image
        src={character.attributes.image ?? "/dementor.png"}
        alt={character.attributes.slug}
        width={300}
        height={300}
        className="w-full h-[300px] rounded-xl object-cover object-top"
      />
      <p className="text-center">{character.attributes.name}</p>
    </Link>
  );
}

export function MovieCard(movie: MovieProps) {
  return (
    <Link
      href={`/movies/${movie.attributes.slug}`}
      className="flex flex-col gap-4"
    >
      <Image
        src={movie.attributes.poster}
        alt={movie.attributes.slug}
        width={300}
        height={300}
        className="w-full h-full rounded-xl object-cover object-top"
      />
    </Link>
  );
}

export function PotionCard(potion: PotionProps) {
  return (
    <Link
      href={`/potions/${potion.attributes.slug}`}
      className="flex flex-col gap-4"
    >
      <Image
        src={potion.attributes.image ?? "/dementor.png"}
        alt={potion.attributes.slug}
        width={300}
        height={300}
        className="w-full h-[300px] rounded-xl object-cover object-top"
      />
      <p className="text-center">{potion.attributes.name}</p>
    </Link>
  );
}

export function SpellCard(spell: SpellProps) {
  return (
    <Link
      href={`/spells/${spell.attributes.slug}`}
      className="flex flex-col gap-4"
    >
      <Image
        src={spell.attributes.image ?? "/dementor.png"}
        alt={spell.attributes.slug}
        width={300}
        height={300}
        className="w-full h-[300px] rounded-xl object-cover object-top"
      />
      <p className="text-center">{spell.attributes.name}</p>
    </Link>
  );
}
