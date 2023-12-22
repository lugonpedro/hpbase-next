import api from "@/api";
import {
  BookCard,
  CharacterCard,
  MovieCard,
  PotionCard,
  SpellCard,
} from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { shuffleArray } from "@/utils/shuffle";
import Link from "next/link";

async function getBooks() {
  const res = await api.get("/books");

  if (res == null) {
    return null;
  }

  const shuffledArray = shuffleArray(res.data.data);

  return shuffledArray;
}

async function getCharacters() {
  const res = await api.get("/characters");

  if (res == null) {
    return null;
  }

  const shuffledArray = shuffleArray(res.data.data);

  return shuffledArray;
}

async function getMovies() {
  const res = await api.get("/movies");

  if (res == null) {
    return null;
  }

  const shuffledArray = shuffleArray(res.data.data);

  return shuffledArray;
}

async function getPotions() {
  const res = await api.get("/potions");

  if (res == null) {
    return null;
  }
  const shuffledArray = shuffleArray(res.data.data);

  return shuffledArray;
}

async function getSpells() {
  const res = await api.get("/spells");

  if (res == null) {
    return null;
  }

  const shuffledArray = shuffleArray(res.data.data);

  return shuffledArray;
}

export default async function Home() {
  const books = await getBooks();
  const characters = await getCharacters();
  const movies = await getMovies();
  const potions = await getPotions();
  const spells = await getSpells();

  return (
    <>
      <Navbar>
        <div className="defaultContainer flex flex-col gap-8 bg-[url('/castle.jpg')] bg-no-repeat bg-bottom bg-cover 2xl:bg-center">
          <div className="max-w-[1440px] 2xl:self-center">
            <div className="flex flex-col gap-4 glassEffect">
              <h2>Bem-vindo ao Portal da Magia</h2>
              <p>
                Aqui, você entrará em um mundo encantado, repleto de magia,
                mistério e amizade, assim como os corredores de Hogwarts.
                Preparamos um lugar especial onde a magia é real e a aventura
                está sempre à espreita.
              </p>
              <p>
                Ao atravessar as portas deste site, você será recebido por
                encantadoras histórias sobre o Menino que Sobreviveu, seus
                amigos leais e os desafios que enfrentaram juntos. Explore os
                corredores da Escola de Magia e Bruxaria de Hogwarts, descubra
                segredos em Hogsmeade e mergulhe nas profundezas do Ministério
                da Magia.
              </p>
              <p>
                Desvende os mistérios por trás das lendas mágicas, conheça
                criaturas fantásticas e divirta-se com jogos e desafios que
                testarão sua habilidade bruxa. Este é um lugar para todos os
                apaixonados pela saga, dos bruxos mais experientes aos novatos
                que estão apenas começando sua jornada.
              </p>
              <p>
                Aqui, celebramos a coragem, a amizade e a magia que permeiam
                cada página dos livros de J.K. Rowling. Então, prepare sua
                varinha, ajuste seu chapéu seletor e embarque nessa jornada
                mágica conosco. Este site é mais do que um simples espaço
                virtual; é um refúgio para todos que acreditam que a magia está
                em cada um de nós.
              </p>
              <p>
                Seja bem-vindo ao nosso mundo, onde as palavras têm o poder de
                encantar, os feitiços ganham vida e a aventura nunca termina.
                Estamos ansiosos para compartilhar essa jornada mágica com você!
              </p>
            </div>
            {books && (
              <div className="mt-6 glassEffect">
                <div className="mb-4 flex flex-row items-center justify-between">
                  <h2>Livros</h2>
                  <Link href="/" className="textLink">
                    Ver Todos
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {books.slice(0, 4).map((book: BookProps) => (
                    <BookCard key={book.id} {...book} />
                  ))}
                </div>
              </div>
            )}

            {characters && (
              <div className="mt-6 glassEffect">
                <div className="mb-4 flex flex-row items-center justify-between">
                  <h2>Personagens</h2>
                  <Link href="/" className="textLink">
                    Ver Todos
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {characters.slice(0, 4).map((character: CharacterProps) => (
                    <CharacterCard key={character.id} {...character} />
                  ))}
                </div>
              </div>
            )}

            {movies && (
              <div className="mt-6 glassEffect">
                <div className="mb-4 flex flex-row items-center justify-between">
                  <h2>Filmes</h2>
                  <Link href="/" className="textLink">
                    Ver Todos
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {movies.slice(0, 4).map((movie: MovieProps) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
                </div>
              </div>
            )}

            {potions && (
              <div className="mt-6 glassEffect">
                <div className="mb-4 flex flex-row items-center justify-between">
                  <h2>Poções</h2>
                  <Link href="/" className="textLink">
                    Ver Todos
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {potions.slice(0, 4).map((potion: PotionProps) => (
                    <PotionCard key={potion.id} {...potion} />
                  ))}
                </div>
              </div>
            )}

            {spells && (
              <div className="mt-6 glassEffect">
                <div className="mb-4 flex flex-row items-center justify-between">
                  <h2>Magias</h2>
                  <Link href="/" className="textLink">
                    Ver Todos
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {spells.slice(0, 4).map((spell: SpellProps) => (
                    <SpellCard key={spell.id} {...spell} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
}
