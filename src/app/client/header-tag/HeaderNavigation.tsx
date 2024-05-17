"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IoSearchSharp } from "react-icons/io5";

export default function HeaderNavigation() {
  return (
    <nav className="w-fulll h-full absolute inset-0 md:text-xl bg-transparent text-2xl p-4 flex">
      {/** Logo and big corner title */}
      <div className="w-1/3">
        <Link
          href="/"
          className="flex w-max justify-start items-center hover:cursor-pointer "
        >
          <Image
            src="/TransparentLogo.webp"
            alt="Modern Manners Logo"
            width={75}
            height={70}
            style={{ borderRadius: "50%" }}
          />
          <span className="text-md font-medium "></span>
        </Link>
      </div>

      {/** Navigation Link dropdown into categorized parts of site */}
      <section className="w-1/3">
        <div className="h-full grid grid-cols-5 w-max gap-x-6">
          <Link
            className="duration-150 flex justify-center items-center text-[16px] font-light hover:text-zinc-500 hover:underline hover:underline-offset-3"
            href="/about"
          >
            Cotillion
          </Link>
          <Link
            href="/contact"
            className="duration-150 flex justify-center items-center text-[16px] font-light hover:text-zinc-500 hover:underline hover:underline-offset-3"
          >
            Gallery
          </Link>
          <Link
            href="/nothgng"
            className="duration-150 flex justify-center items-center text-[16px] font-light hover:text-zinc-500 hover:underline hover:underline-offset-3"
          >
            Company
          </Link>
        </div>
      </section>

      {/** Click to open SearchBar tab */}
      <div className="w-1/3">
        <div className="flex h-full justify-end pr-8 items-center hover:cursor-pointer">
          <IoSearchSharp className="text-2xl hover:text-zinc-500" />
          {/** OpenAI's search looks awesome am gonna steal  */}
        </div>
      </div>
    </nav>
  );
}
