"use client";
import api from "@/api";
import { GridCard } from "@/components/Card";
import { SearchInput } from "@/components/Input";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdCalendarToday, MdPerson } from "react-icons/md";

export default function Books() {
  const [data, setData] = useState<BookProps[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const res = await api.get(`/books?filter[title_cont]=${search}`);

      if (res == null) {
        setData([]);
        return;
      }

      setData(res.data.data);
    }

    getData();
  }, [search]);

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="w-full max-w-[1200px] xl:self-center 2xl:w-[1200px]">
            <div className="flex flex-col gap-4">
              <h2>Livros</h2>
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {data &&
                  data.map((book: BookProps) => (
                    <GridCard
                      key={book.id}
                      href={`/books/${book.attributes.slug}`}
                      image={book.attributes.cover}
                      alt={book.attributes.title}
                      label={book.attributes.title}
                    />
                  ))}
                {data.length === 0 && <p>Nada foi encontrado</p>}
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
