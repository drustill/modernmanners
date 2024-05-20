"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IoSearchSharp } from "react-icons/io5";

export default function HeaderNavigation() {
  return (
    <nav className="w-full h-16 sticky top-0 inset-0 text-lg bg-transparent flex px-4 py-2">
      {/** Logo and big corner title */}
      <div className="w-1/3 relative">
        <Link
          href="/"
          className="flex w-max justify-start pl-8 items-center hover:cursor-pointer"
        >
          <Image
            src="/TransparentLogo.webp"
            alt="Modern Manners Logo"
            width={75}
            height={70}
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>

      {/** Navigation Link dropdown into categorized parts of site */}
      <section className="w-1/3">
        <div className="h-full flex justify-center gap-x-8 items-center pt-4 text-[16px] font-light">
          <Link
            className="duration-150  hover:text-zinc-500 hover:underline hover:underline-offset-3"
            href="/about"
          >
            Cotillion
          </Link>
          <Link
            href="/contact"
            className="duration-150 flex justify-center items-center text-md font-light hover:text-zinc-500 hover:underline hover:underline-offset-3"
          >
            Gallery
          </Link>
          <Link
            href="/nothgng"
            className="duration-150 flex justify-center items-center text-md font-light hover:text-zinc-500 hover:underline hover:underline-offset-3"
          >
            Company
          </Link>
        </div>
      </section>

      {/** Click to open SearchBar tab */}
      <div className="w-1/3">
        <div className="absolute flex right-0 justify-end items-center pr-16 pt-4 hover:cursor-pointer">
          <IoSearchSharp className="text-2xl hover:text-zinc-500" />
          {/** OpenAI's search blur modal looks awesome am gonna steal  */}
        </div>
      </div>
    </nav>
  );
}
