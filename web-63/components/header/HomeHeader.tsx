'use client';
import { useAuth } from "@/lib/hook/useAuth";
import Image from "next/image";
import Link from "next/link";

export default function HomeHeader() {
  const {loggedInUser} = useAuth();

  return (
    <header className="bg-teal-50 text-black p-2 w-full shadow">
      <section className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={80}
            height={80}
            className="size-16 rounded-full"
          />
        </Link>
        <nav className="flex gap-5">
          <ul className="flex gap-10">
            <li className="text-lg font-semibold text-teal-900 text-shadow-sm hover:underline hover:scale-103">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-lg font-semibold text-teal-900 text-shadow-sm hover:underline hover:scale-103">
              <Link href={"/categories"}>Categroies</Link>
            </li>
            <li className="text-lg font-semibold text-teal-900 text-shadow-sm hover:underline hover:scale-103">
              <Link href={"/products"}>Shop Here</Link>
            </li>
            <li className="text-lg font-semibold text-teal-900 text-shadow-sm hover:underline hover:scale-103">
              <Link href={"/carts"}>Cart</Link>
            </li>
          </ul>

          <ul className="flex gap-3">
            {loggedInUser ? (
              <>
                <li className="text-sm flex items-center font-semibold text-amber-900 px-3 py rounded-lg text-shadow-sm hover:underline hover:scale-103">
                  <Link href={"/cms"}>{`${loggedInUser.name}`} </Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-sm flex items-center font-semibold text-white bg-amber-900 px-3 py rounded-lg text-shadow-sm hover:underline hover:scale-103">
                  <Link href={"/login"}>Sign in </Link>
                </li>
                <li className="text-sm flex items-center font-semibold text-white bg-amber-900 px-3 py rounded-lg text-shadow-sm hover:underline hover:scale-103">
                  <Link href={"/register"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </section>
    </header>
  );
}