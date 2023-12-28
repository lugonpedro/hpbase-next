import api from "@/api";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default async function PotionDetail(props: IPageProps) {
  async function getData() {
    const res = await api.get(`/potions/${props.params.slug}`);

    if (res == null) {
      return null;
    }

    return res.data.data;
  }

  const data: PotionProps = await getData();

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="max-w-[1200px] xl:self-center 2xl:w-[1200px]">
            {data && (
              <>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <Image
                    src={data.attributes.image ?? "/dementor.png"}
                    alt={data.attributes.slug}
                    width={300}
                    height={300}
                    className="rounded-xl object-cover w-full md:max-w-[50vw]"
                  />
                  <div className="flex flex-col gap-4 mt-4 md:mt-0">
                    <h2>{data.attributes.name}</h2>
                    {data.attributes.difficulty && (
                      <p>Dificuldade: {data.attributes.difficulty}</p>
                    )}
                    {data.attributes.effect && (
                      <p>Efeito: {data.attributes.effect}</p>
                    )}
                    {data.attributes.time && (
                      <p>Tempo: {data.attributes.time}</p>
                    )}
                    {data.attributes.side_effects && (
                      <p>Efeito Colateral: {data.attributes.side_effects}</p>
                    )}
                    <a href={data.attributes.wiki} className="textLink">
                      Wiki
                    </a>
                  </div>
                </div>
                {data.attributes.ingredients && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Ingredientes:</p>
                    {data.attributes.ingredients
                      .split(",")
                      .map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                  </div>
                )}
                {data.attributes.inventors && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Inventores:</p>
                    {data.attributes.inventors.split(",").map((inventor) => (
                      <li key={inventor}>{inventor}</li>
                    ))}
                  </div>
                )}
                {data.attributes.characteristics.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Características:</p>
                    {data.attributes.characteristics
                      .split(",")
                      .map((characteristic) => (
                        <li key={characteristic}>{characteristic}</li>
                      ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
}
