"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IoSearchSharp } from "react-icons/io5";

export default function HeaderNavigation() {
  return (
    <nav className="w-full absolute md:text-xl text-2xl p-4 flex">
      {/** Logo and big corner title */}
      <div className="w-1/3">
        <Link
          href="/"
          className="flex w-max justify-start items-center hover:cursor-pointer "
        >
          <Image
            src="/TransparentLogo.webp"
            alt="Modern Manners Logo"
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
          <span className="text-xl font-medium pr-2 ">Modern Manners</span>
        </Link>
      </div>

      {/** Navigation Links */}
      <section className="w-1/3">
        <div className="h-full grid grid-cols-2 w-max gap-x-8">
          <Link
            className="duration-150 flex justify-center items-center font-light hover:text-zinc-500 hover:underline hover:underline-offset-3"
            href="/about"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="duration-150 flex justify-center items-center font-light hover:text-zinc-500 hover:underline hover:underline-offset-3"
          >
            Contact
          </Link>
        </div>
      </section>

      {/** Click to open SearchBar tab */}
      <div className="w-1/3">
        <div className="flex h-full justify-end pr-8 items-center hover:cursor-pointer">
          Icon
        </div>
      </div>
    </nav>
  );
}
