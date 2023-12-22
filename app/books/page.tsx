import api from "@/api";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MdCalendarToday, MdPerson } from "react-icons/md";

async function getData() {
  const res = await api.get("/books");

  if (res == null) {
    return null;
  }

  return res.data.data;
}

export default async function Books() {
  const data = await getData();

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="max-w-[1440px] 2xl:self-center">
            <div className="flex flex-col gap-4">
              <h2>Livros</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {data.map((book: BookProps) => (
                  <Link href={`/books/${book.attributes.slug}`} key={book.id}>
                    <Image
                      src={book.attributes.cover}
                      alt={book.attributes.slug}
                      width={300}
                      height={300}
                      className="w-full rounded-xl object-cover object-top"
                    />
                    <p>{book.attributes.title}</p>
                    <div className="flex flex-row items-center gap-2">
                      <MdPerson />
                      <p>{book.attributes.author}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <MdCalendarToday />
                      <p>
                        {new Date(
                          book.attributes.release_date
                        ).toLocaleDateString("pt-br")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
