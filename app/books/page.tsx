"use client";
import api from "@/api";
import { GridCard } from "@/components/Card";
import { SearchInput } from "@/components/Input";
import { Navbar } from "@/components/Navbar";
import { Pagination } from "@/components/Pagination";
import { useEffect, useState } from "react";

interface DataProps extends APIProps {
  data: BookProps[];
}

export default function Books() {
  const [data, setData] = useState<DataProps>();
  const [pagination, setPagination] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const res = await api.get(
        `/books?filter[title_cont]=${search}&page[size]=16&page[number]=${pagination}`
      );

      if (res == null) {
        setData(undefined);
        return;
      }

      setData(res.data);
    }

    getData();
  }, [search, pagination]);

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
                  data.data.map((book: BookProps) => (
                    <GridCard
                      key={book.id}
                      href={`/books/${book.attributes.slug}`}
                      image={book.attributes.cover}
                      alt={book.attributes.title}
                      label={book.attributes.title}
                    />
                  ))}
                {data && data.data.length === 0 && <p>Nada foi encontrado</p>}
              </div>
              {data && (
                <Pagination
                  pages={Math.ceil(data.meta.pagination.records / 16)}
                  activeIndex={data.meta.pagination.current}
                  onClickPreviousButton={() => setPagination(pagination - 1)}
                  onClickNextButton={() => setPagination(pagination + 1)}
                />
              )}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
