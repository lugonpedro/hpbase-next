"use client";
import api from "@/api";
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
          <div className="max-w-[1200px] xl:w-[1200px] 2xl:self-center">
            <div className="flex flex-col gap-4">
              <h2>Livros</h2>
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {data &&
                  data.map((book: BookProps) => (
                    <Link href={`/books/${book.attributes.slug}`} key={book.id}>
                      <Image
                        src={book.attributes.cover}
                        alt={book.attributes.slug}
                        width={300}
                        height={300}
                        className="w-full rounded-xl object-cover object-top"
                      />
                      <p>{book.attributes.title}</p>
                      <div className="flex flex-row items-center gap-2 text-[#000] dark:text-[#efeee9]">
                        <MdPerson />
                        <p>{book.attributes.author}</p>
                      </div>
                      <div className="flex flex-row items-center gap-2 text-[#000] dark:text-[#efeee9]">
                        <MdCalendarToday />
                        <p>
                          {new Date(
                            book.attributes.release_date
                          ).toLocaleDateString("pt-br")}
                        </p>
                      </div>
                    </Link>
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
