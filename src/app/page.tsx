/* eslint-disable @next/next/no-img-element */
import AboutUs from "./client/about-us/AboutUs";
import PhotoCards from "./client/about-us/PhotoCards";
import HeaderNavigation from "./client/hero-section/HeaderNavigation";
import MannersIntroductionParent from "./client/hero-section/MannersIntroductionParent";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

/**
 * Homepage of ModernManners of Tulsa website
 */
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-800 text-gray-200 ">
      {/** Navbar & Logo & Search icon */}
      <span className="fixed inset-0 z-20 h-16 ">
        <HeaderNavigation />
      </span>

      {/** Hero section with graphic */}
      <header className="relative flex flex-col items-center md:min-h-[55vh] min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover hidden md:flex"
          style={{ backgroundImage: "url('/DevHeroUpped.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-cover bg-zinc-900/80 bg-opacity-80"></div>
        <MannersIntroductionParent />
      </header>

      {/** About Us section with Photo Carousel */}
      <section className="relative flex flex-col items-center w-full min-h-[60vh] gap-y-24 bg-zinc-950/75">
        <AboutUs />
        <PhotoCards />
      </section>

      {/** Footer with Social links */}
      <footer className="relative flex flex-col min-h-[6vh] bg-transparent">
        <div className="flex items-center">
          <div className="w-full text-sm flex pl-32 pt-2 justify-start items-center gap-x-2 font-extralight">
            Modern Manners of Tulsa &copy; 2016 - 2024
          </div>
          <div className="w-full flex pr-32 pt-2 justify-end items-center gap-x-2">
            <FaFacebookSquare className="text-xl rounded-lg text-zinc-200" />
            <FaInstagram className="text-xl rounded-lg text-zinc-200" />
          </div>
        </div>
      </footer>
    </main>
  );
}
