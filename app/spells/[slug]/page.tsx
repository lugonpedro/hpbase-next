import api from "@/api";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default async function SpellDetail(props: IPageProps) {
  async function getData() {
    const res = await api.get(`/spells/${props.params.slug}`);

    if (res == null) {
      return null;
    }

    return res.data.data;
  }

  const data: SpellProps = await getData();

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="max-w-[1200px] xl:self-center 2xl:w-[1200px]">
            {data && (
              <>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <Image
                    src={data.attributes.image}
                    alt={data.attributes.slug}
                    width={300}
                    height={300}
                    className="rounded-xl object-cover w-full md:max-w-[50vw]"
                  />
                  <div className="flex flex-col gap-4 mt-4 md:mt-0">
                    <h2>{data.attributes.name}</h2>
                    {data.attributes.effect && (
                      <p>Efeito: {data.attributes.effect}</p>
                    )}
                    {data.attributes.category && (
                      <p>Categoria: {data.attributes.category}</p>
                    )}
                    {data.attributes.light && (
                      <p>Luz: {data.attributes.light}</p>
                    )}
                    {data.attributes.hand && (
                      <p>Movimento da Mão: {data.attributes.hand}</p>
                    )}
                    {data.attributes.creator && (
                      <p>Criador: {data.attributes.creator}</p>
                    )}
                    {data.attributes.incantation && (
                      <p>Encantação: {data.attributes.incantation}</p>
                    )}
                    <a href={data.attributes.wiki} className="textLink">
                      Wiki
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
}
