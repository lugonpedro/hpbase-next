import api from "@/api";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default async function BookDetail(props: IPageProps) {
  async function getData() {
    const res = await api.get(`/books/${props.params.slug}`);

    if (res == null) {
      return null;
    }

    return res.data.data;
  }

  async function getChapters() {
    const res = await api.get(`/books/${props.params.slug}/chapters`);

    if (res == null) {
      return null;
    }

    return res.data.data;
  }

  const data: BookProps = await getData();
  const chapters: ChapterProps[] = await getChapters();

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="max-w-[1200px] xl:self-center 2xl:w-[1200px]">
            {data && (
              <>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <Image
                    src={data.attributes.cover ?? "/dementor.png"}
                    alt={data.attributes.slug}
                    width={300}
                    height={300}
                    className="w-full rounded-3xl object-cover object-top md:object-contain"
                  />
                  <div className="flex flex-col gap-4 mt-4 md:mt-0">
                    <h2>{data.attributes.title}</h2>
                    <p>{data.attributes.summary}</p>
                    <p>Autor: {data.attributes.author}</p>
                    <p>Páginas: {data.attributes.pages}</p>
                    <p>
                      Data de Lançamento:{" "}
                      {new Date(
                        data.attributes.release_date
                      ).toLocaleDateString("pt-br")}
                    </p>
                    <p>Dedicatória: {data.attributes.dedication}</p>
                    <a href={data.attributes.wiki} className="textLink">
                      Wiki
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-bold">Capítulos:</p>
                  {chapters.map((chapter, index) => (
                    <p key={chapter.id}>
                      {index + 1}. {chapter.attributes.title}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
}
