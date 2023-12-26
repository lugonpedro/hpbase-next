"use client";
import api from "@/api";
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
  // const [pagination, setPagination] = useState<APIProps>()
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const res = await api.get(`/characters?filter[name_cont]=${search}`);

      if (res == null) {
        setData(undefined);
        return;
      }
      // setPagination(res.data)
      setData(res.data);
    }

    getData();
  }, [search]);

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="max-w-[1200px] xl:self-center 2xl:w-[1200px]">
            <div className="flex flex-col gap-4">
              <h2>Personagens</h2>
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {data &&
                  data.data.map((character: CharacterProps) => (
                    <Link
                      href={`/characters/${character.attributes.slug}`}
                      key={character.id}
                    >
                      <Image
                        src={character.attributes.image ?? "/dementor.png"}
                        alt={character.attributes.slug}
                        width="300"
                        height="300"
                        // loading="lazy"
                        className="w-full h-[300px] rounded-xl object-cover object-top"
                      />
                      <p className="text-center">{character.attributes.name}</p>
                    </Link>
                  ))}
                {data && data.data.length === 0 && <p>Nada foi encontrado</p>}
              </div>
              {data && data.meta.pagination.last && (
                <Pagination pageNumbers={data.meta.pagination.last} />
              )}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
