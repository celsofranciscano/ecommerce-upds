"use client";
// components/SideBar.js
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import DarkMode from "@/components/common/DarkMode";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "@/components/common/NavLink";

function SideBar() {
  const pathname = usePathname();

  const isActive = "/dashboard" === pathname;

  const { data: session } = useSession();

  function handlebtnclick() {
    document.getElementById("sidebar")?.classList.toggle("hidden");
    // document.getElementById("capa-sidebar")?.classList.toggle("hidden");
  }

  function btnclickperfil() {
    document.getElementById("card-perfil")?.classList.toggle("hidden");
  }

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.getItem("theme") === "dark"
    );
  }, []);

  function toggleTheme() {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "light" ? "dark" : "light"
    );
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <header className="bg-white dark:bg-zinc-900 h-16 shadow-sm dark:text-white fixed w-full flex items-center justify-between px-4 md:px-8">
        <a className="flex gap-1 items-center" href="/dashboard">
          {/* <img className="w-8" src="/logo.png" alt="logo sneakers" /> */}
          <span className="text-2xl font-extrabold dark:text-white text-black">
          RESTAURANT COMEME
          </span>
        </a>

        <div className="flex items-center justify-center gap-4">
          <DarkMode />

          {session?.user?.image ? (
            <Image
              onClick={btnclickperfil}
              className="w-9 h-9 rounded-full cursor-pointer"
              src={session?.user?.image}
              width={24}
              height={24}
              alt="perfil"
            />
          ) : (
            <div
              onClick={btnclickperfil}
              className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center"
            >
              {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
              <h1 className="text-center text-xl"></h1>
            </div>
          )}

          <button
            onClick={handlebtnclick}
            className="md:hidden bg-zinc-100 dark:bg-zinc-800 rounded-full p-0.5"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-zinc-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </header>

      <div
        onClick={handlebtnclick}
        id="capa-sidebar"
        className="hidden bg-zinc-900 h-screen top-16 fixed w-full dark:opacity-60 opacity-30"
      ></div>

      <aside
        id="sidebar"
        className="bg-white  dark:bg-zinc-900 w-72 md:w-60 border-r dark:border-none h-screen dark:text-white text-black fixed top-16 hidden md:block px-4 py-8"
      >
        <nav>
          <ul className="grid pt-8 font-medium">
            <li
              className={`hover:text-blue-500 rounded-md px-4 py-2 ${
                isActive ? "text-blue-500" : ""
              }`}
              onClick={handlebtnclick}
            >
              <Link href={"/dashboard"} className="flex items-center gap-3">
                Inicio
              </Link>
            </li>

            <NavLink
              path="/dashboard/clientes"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Clientes"}
            />

            <NavLink
              path="/dashboard/roles"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Roles"}
            />

            <NavLink
              path="/dashboard/productos"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Productos"}
            />
            <NavLink
              path="/dashboard/ventas"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Ventas"}
            />
            <NavLink
              path="/dashboard/administradores"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Administradores"}
            />
            <NavLink
              path="/dashboard/envios"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Envios"}
            />
            <NavLink
              path="/dashboard/finanzas"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Finanzas"}
            />
          </ul>
        </nav>
        <button
          onClick={() => signOut()}
          className="text-red-500 flex absolute md:bottom-20 bottom-36 items-center gap-3 hover:bg-blue-200 dark:hover:bg-zinc-800 px-4 py-2 rounded-md"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
            />
          </svg>
          <span>Cerrar sesión</span>
        </button>
      </aside>

      <div
        id="card-perfil"
        className="fixed hidden w-fit h-fit bg-white text-sm dark:bg-zinc-900 rounded-b-md top-16 right-4 p-4 md:right-10 shadow-md"
      >
        <div className="flex items-center">
          {session?.user?.image ? (
            <Image
              width={40}
              height={40}
              className="w-10 m-auto h-10 rounded-full"
              src={session.user.image}
              alt="profile image"
            />
          ) : (
            <div className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
              {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
            </div>
          )}

          <div className="p-2">
            <p className="text-white">{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
        </div>
        <ul onClick={btnclickperfil} className="grid gap-2">
          <li onClick={btnclickperfil}>
            <Link
              href="/dashboard/profile"
              onClick={btnclickperfil}
              className="flex items-center"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-zinc-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>Tu perfil</span>
            </Link>
          </li>

          <li
            onClick={toggleTheme}
            className="cursor-pointer flex items-center"
          >
            <DarkMode />
            Dark mode
          </li>
          <li onClick={() => signOut()} className="cursor-pointer">
            <button className="text-red-500 flex items-center">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>
              <span>Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
