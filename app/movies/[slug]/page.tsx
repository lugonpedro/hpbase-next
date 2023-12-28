import api from "@/api";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default async function MovieDetail(props: IPageProps) {
  async function getData() {
    const res = await api.get(`/movies/${props.params.slug}`);

    if (res == null) {
      return null;
    }

    return res.data.data;
  }

  const data: MovieProps = await getData();

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="max-w-[1200px] xl:self-center 2xl:w-[1200px]">
            {data && (
              <>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <Image
                    src={data.attributes.poster ?? "/dementor.png"}
                    alt={data.attributes.slug}
                    width={300}
                    height={300}
                    className="w-full rounded-3xl object-cover object-top md:object-contain"
                  />
                  <div className="flex flex-col gap-4 mt-4 md:mt-0">
                    <h2>{data.attributes.title}</h2>
                    {data.attributes.release_date && (
                      <p>Data de Lançamento: {data.attributes.release_date}</p>
                    )}
                    {data.attributes.box_office && (
                      <p>Bilheteria: {data.attributes.box_office}</p>
                    )}
                    {data.attributes.budget && (
                      <p>Budget: {data.attributes.budget}</p>
                    )}
                    {data.attributes.rating && (
                      <p>Classificação: {data.attributes.rating}</p>
                    )}
                    {data.attributes.summary && (
                      <p>Resumo: {data.attributes.summary}</p>
                    )}
                    <a href={data.attributes.wiki} className="textLink">
                      Wiki
                    </a>
                  </div>
                </div>
                {data.attributes.cinematographers.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Cineastas:</p>
                    {data.attributes.cinematographers.map((cinematographer) => (
                      <li key={cinematographer}>{cinematographer}</li>
                    ))}
                  </div>
                )}
                {data.attributes.directors.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Diretores:</p>
                    {data.attributes.directors.map((director) => (
                      <li key={director}>{director}</li>
                    ))}
                  </div>
                )}
                {data.attributes.editors.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Editores:</p>
                    {data.attributes.editors.map((editor) => (
                      <li key={editor}>{editor}</li>
                    ))}
                  </div>
                )}
                {data.attributes.music_composers.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Compositores das Músicas:</p>
                    {data.attributes.music_composers.map((music_composer) => (
                      <li key={music_composer}>{music_composer}</li>
                    ))}
                  </div>
                )}
                {data.attributes.producers.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Produtores:</p>
                    {data.attributes.producers.map((producer) => (
                      <li key={producer}>{producer}</li>
                    ))}
                  </div>
                )}
                {data.attributes.screenwriters.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    <p className="font-bold">Roteiristas:</p>
                    {data.attributes.screenwriters.map((screenwriter) => (
                      <li key={screenwriter}>{screenwriter}</li>
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
