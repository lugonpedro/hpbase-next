"use client";
import api from "@/api";
import { useEffect, useState } from "react";

export function BooksCard() {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    async function getData() {
      const books = await api.get("/books");
      if (books.data) {
        setData(books.data);
        console.log(books.data.data);
      }
    }

    getData();
  }, []);

  return (
    <></>
    // <div>{data && data.map((book: any) => <p key={book.id}>Teste</p>)}</div>
  );
}
