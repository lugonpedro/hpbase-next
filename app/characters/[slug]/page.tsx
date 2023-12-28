import api from "@/api";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default async function CharacterDetail(props: IPageProps) {
  async function getData() {
    const res = await api.get(`/characters/${props.params.slug}`);

    if (res == null) {
      return null;
    }

    return res.data.data;
  }

  const data: CharacterProps = await getData();

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
                    className="rounded-xl object-cover w-full md:max-w-[50vw] xl:max-w-[25vw]"
                  />
                  <div className="flex flex-col gap-4 mt-4 md:mt-0">
                    <h2>{data.attributes.name}</h2>
                    {data.attributes.born && (
                      <p>Nascimento: {data.attributes.born}</p>
                    )}
                    {data.attributes.gender && (
                      <p>Gênero: {data.attributes.gender}</p>
                    )}
                    {data.attributes.species && (
                      <p>Espécie: {data.attributes.species}</p>
                    )}
                    {data.attributes.nationality && (
                      <p>Nacionalidade: {data.attributes.nationality}</p>
                    )}
                    {data.attributes.blood_status && (
                      <p>Sangue: {data.attributes.blood_status}</p>
                    )}
                    {data.attributes.house && (
                      <p>Casa: {data.attributes.house}</p>
                    )}
                    {data.attributes.eye_color && (
                      <p>Cor do Olho: {data.attributes.eye_color}</p>
                    )}
                    {data.attributes.hair_color && (
                      <p>Cor do Cabelo: {data.attributes.hair_color}</p>
                    )}
                    {data.attributes.boggart && (
                      <p>Maior Medo: {data.attributes.boggart}</p>
                    )}
                    {data.attributes.patronus && (
                      <p>Patronus: {data.attributes.patronus}</p>
                    )}
                    <a href={data.attributes.wiki} className="textLink">
                      Wiki
                    </a>
                  </div>
                </div>
                {data.attributes.alias_names.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Vulgos:</p>
                    {data.attributes.alias_names.map((alia_name) => (
                      <li key={alia_name}>{alia_name}</li>
                    ))}
                  </div>
                )}
                {data.attributes.family_members.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Membros da Família:</p>
                    {data.attributes.family_members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </div>
                )}
                {data.attributes.jobs.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Empregos:</p>
                    {data.attributes.jobs.map((job) => (
                      <li key={job}>{job}</li>
                    ))}
                  </div>
                )}
                {data.attributes.romances.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Romances:</p>
                    {data.attributes.romances.map((romance) => (
                      <li key={romance}>{romance}</li>
                    ))}
                  </div>
                )}
                {data.attributes.titles.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Títulos:</p>
                    {data.attributes.titles.map((title) => (
                      <li key={title}>{title}</li>
                    ))}
                  </div>
                )}
                {data.attributes.wands.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Varinhas:</p>
                    {data.attributes.wands.map((wand) => (
                      <li key={wand}>{wand}</li>
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
