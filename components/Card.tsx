"use client";
import Image from "next/image";
import Link from "next/link";

export function BookCard(book: BookProps) {
  return (
    <Link href={`/book/${book.attributes.slug}`}>
      <Image
        src={book.attributes.cover}
        alt={book.attributes.slug}
        width={300}
        height={300}
        className="w-full h-auto rounded-xl"
      />
      <p></p>
    </Link>
  );
}
