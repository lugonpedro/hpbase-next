"use client";
import api from "@/api";
import { GridCard } from "@/components/Card";
import { SearchInput } from "@/components/Input";
import { Navbar } from "@/components/Navbar";
import { Pagination } from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DataProps extends APIProps {
  data: CharacterProps[];
}

export default function Characters() {
  const [data, setData] = useState<DataProps>();
  const [pagination, setPagination] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search.length > 0) {
      setPagination(0);
    }

    async function getData() {
      const res = await api.get(
        `/characters?filter[name_cont]=${search}&page[size]=16&page[number]=${pagination}`
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
              <h2>Personagens</h2>
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {data &&
                  data.data.map((character: CharacterProps) => (
                    <GridCard
                      key={character.id}
                      href={`/characters/${character.attributes.slug}`}
                      image={character.attributes.image}
                      alt={character.attributes.name}
                      label={character.attributes.name}
                      className="w-full h-[300px] rounded-xl object-cover object-top"
                    />
                  ))}
                {data && data.data.length === 0 && <p>Nada foi encontrado</p>}
              </div>
              {data && data.meta.pagination.last && (
                <Pagination
                  totalPages={data.meta.pagination.last}
                  actualPage={data.meta.pagination.current}
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
