"use client";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useContext, useEffect, useState } from "react";
import { BiBook, BiBookReader, BiHome, BiMovie, BiUser } from "react-icons/bi";
import { BsMagic, BsMortarboard, BsPeople } from "react-icons/bs";
import { GiStandingPotion } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  MdBookmark,
  MdClose,
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdOutlineBookmark,
} from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export function Navbar({ children }: any) {
  const [opened, setOpened] = useState<boolean>(false);

  const [windowSize, setWindowSize] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  useEffect(() => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

    const handleWindowResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <div className="w-screen overflow-x-hidden fixed z-50 h-16 bg-[#c39a1c] flex flex-row items-center justify-between px-4 xl:hidden">
        <h1 className="text-[#000] drop-shadow-md">🧙‍♀️ Portal Mágico</h1>
        <MdMenu
          className="h-8 w-8 text-[#000] cursor-pointer"
          onClick={() => setOpened(true)}
        />
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ y: -windowSize.height, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -windowSize.height, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed bg-[#000] h-screen w-screen left-0 top-0 z-50"
            >
              <div className="w-screen h-16 px-4 flex flex-row items-center justify-between mb-6">
                <h1 className="text-[#c39a1c] drop-shadow-md">
                  🧙‍♀️ Portal Mágico
                </h1>
                <MdClose
                  className="h-8 w-8 text-[#efeee9] cursor-pointer"
                  onClick={() => setOpened(false)}
                />
              </div>

              <div className="flex flex-col px-4 gap-2">
                <DarkModeButton />

                <div className="mb-6"></div>

                <NavbarItem
                  link="/"
                  icon={<BiHome className="h-6 w-6" />}
                  title="Início"
                />

                <NavbarItem
                  link="/books"
                  icon={<BiBook className="h-6 w-6" />}
                  title="Livros"
                />

                <NavbarItem
                  link="/chapters"
                  icon={<MdOutlineBookmark className="h-6 w-6" />}
                  title="Capítulos"
                />

                <NavbarItem
                  link="/characters"
                  icon={<BsPeople className="h-6 w-6" />}
                  title="Personagens"
                />

                <NavbarItem
                  link="/movies"
                  icon={<BiMovie className="h-6 w-6" />}
                  title="Filmes"
                />

                <NavbarItem
                  link="/potions"
                  icon={<GiStandingPotion className="h-6 w-6" />}
                  title="Poções"
                />

                <NavbarItem
                  link="/potions"
                  icon={<BsMagic className="h-6 w-6" />}
                  title="Magias"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-row">
        <div className="bg-[#000] p-4 hidden flex-col gap-2 h-screen w-[300px] xl:flex fixed">
          <h1 className="text-[#c39a1c] drop-shadow-md px-4 mb-6">
            🧙‍♀️ Portal Mágico
          </h1>
          <div className="flex flex-col px-4 gap-2">
            <DarkModeButton />

            <div className="mb-6"></div>

            <NavbarItem
              link="/"
              icon={<BiHome className="h-6 w-6" />}
              title="Início"
            />

            <NavbarItem
              link="/books"
              icon={<BiBook className="h-6 w-6" />}
              title="Livros"
            />

            <NavbarItem
              link="/chapters"
              icon={<MdOutlineBookmark className="h-6 w-6" />}
              title="Capítulos"
            />

            <NavbarItem
              link="/characters"
              icon={<BsPeople className="h-6 w-6" />}
              title="Personagens"
            />

            <NavbarItem
              link="/movies"
              icon={<BiMovie className="h-6 w-6" />}
              title="Filmes"
            />

            <NavbarItem
              link="/potions"
              icon={<GiStandingPotion className="h-6 w-6" />}
              title="Poções"
            />

            <NavbarItem
              link="/potions"
              icon={<BsMagic className="h-6 w-6" />}
              title="Magias"
            />
          </div>
        </div>
        <div className="w-screen h-screen pt-16 xl:pt-0 xl:pl-[300px]">
          {children}
        </div>
      </div>
    </div>
  );
}

interface NavbarItemProps {
  icon?: ReactNode;
  title: string;
  link: string;
}

function NavbarItem(props: NavbarItemProps) {
  const [actualPage, setActualPage] = useState<string>("");

  useEffect(() => {
    setActualPage(window.location.pathname);
  }, []);

  return (
    <Link
      href={props.link}
      className={`flex flex-row items-center gap-2 text-[#efeee9] text-[14px] font-semibold xl:text-[18px] xl:w-max duration-300 hover:text-[#c39a1c]/80 ${
        actualPage === props.link ? "text-[#c39a1c] hover:text-[#c39a1c]" : ""
      }`}
    >
      {props.icon}
      {props.title}
    </Link>
  );
}

function DarkModeButton() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <div
      onClick={toggleDarkMode}
      className="cursor-pointer flex flex-row items-center gap-2 text-[#efeee9] text-[14px] font-semibold xl:text-[18px] xl:w-max duration-300 hover:text-[#c39a1c]/80"
    >
      {darkMode ? (
        <>
          <MdLightMode className="h-6 w-6" />
          <p className="text-[#efeee9]">Modo Claro</p>
        </>
      ) : (
        <>
          <MdDarkMode className="h-6 w-6" />
          <p className="text-[#efeee9]">Modo Escuro</p>
        </>
      )}
    </div>
  );
}
