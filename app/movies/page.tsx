"use client";
import api from "@/api";
import { GridCard } from "@/components/Card";
import { SearchInput } from "@/components/Input";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";

interface DataProps extends APIProps {
  data: MovieProps[];
}

export default function Movies() {
  const [data, setData] = useState<DataProps>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const res = await api.get(`/movies?filter[title_cont]=${search}`);

      if (res == null) {
        setData(undefined);
        return;
      }

      setData(res.data);
    }

    getData();
  }, [search]);

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="w-full max-w-[1200px] xl:self-center 2xl:w-[1200px]">
            <div className="flex flex-col gap-4">
              <h2>Filmes</h2>
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {data &&
                  data.data.map((movie: MovieProps) => (
                    <GridCard
                      key={movie.id}
                      href={`/movies/${movie.attributes.slug}`}
                      image={movie.attributes.poster}
                      alt={movie.attributes.title}
                      label={movie.attributes.title}
                    />
                  ))}
                {data && data.data.length === 0 && <p>Nada foi encontrado</p>}
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
