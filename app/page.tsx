import api from "@/api";
// import { BookCard } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Rotation } from "@/components/Rotation";

async function getBooks() {
  const res = await api.get("/books");

  if (!res.data) {
    console.log(res);
  }

  return res.data;
}

export default async function Home() {
  const books = await getBooks();

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2>Bem-vindo ao Portal Mágico</h2>
            <Rotation label="📜" className="text-2xl" />
            <p>
              Aqui, você entrará em um mundo encantado, repleto de magia,
              mistério e amizade, assim como os corredores de Hogwarts.
              Preparamos um lugar especial onde a magia é real e a aventura está
              sempre à espreita.
            </p>
            <p>
              Ao atravessar as portas deste site, você será recebido por
              encantadoras histórias sobre o Menino que Sobreviveu, seus amigos
              leais e os desafios que enfrentaram juntos. Explore os corredores
              da Escola de Magia e Bruxaria de Hogwarts, descubra segredos em
              Hogsmeade e mergulhe nas profundezas do Ministério da Magia.
            </p>
            <p>
              Desvende os mistérios por trás das lendas mágicas, conheça
              criaturas fantásticas e divirta-se com jogos e desafios que
              testarão sua habilidade bruxa. Este é um lugar para todos os
              apaixonados pela saga, dos bruxos mais experientes aos novatos que
              estão apenas começando sua jornada.
            </p>
            <p>
              Aqui, celebramos a coragem, a amizade e a magia que permeiam cada
              página dos livros de J.K. Rowling. Então, prepare sua varinha,
              ajuste seu chapéu seletor e embarque nessa jornada mágica conosco.
              Este site é mais do que um simples espaço virtual; é um refúgio
              para todos que acreditam que a magia está em cada um de nós.
            </p>
            <p>
              Seja bem-vindo ao nosso mundo, onde as palavras têm o poder de
              encantar, os feitiços ganham vida e a aventura nunca termina.
              Estamos ansiosos para compartilhar essa jornada mágica com você!
            </p>
          </div>
          <div>
            <h2>Livros</h2>
            {books.data.map((book: any) => (
              <p key={book.id}>{book.attributes.slug}</p>
            ))}
          </div>
        </div>
      </Navbar>
    </>
  );
}
