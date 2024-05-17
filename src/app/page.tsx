import AboutUs from "./client/about-us/AboutUs";
import HeaderNavigation from "./client/header-tag/HeaderNavigation";
import HomePageInterestButtons from "./client/header-tag/HomePageInterestButtons";
import MannersIntroductionParent from "./client/header-tag/MannersIntroductionParent";

/**
 *
 * @returns d
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen bg-zinc-800 text-gray-200 ">
      {/** First part of the website which doesn't haev colir and is most is updated to in here should also Navigation and Headers */}
      <header className="relative flex flex-col items-center md:h-1/2 h-full w-full">
        <div
          className="absolute inset-0 bg-cover hidden md:flex"
          style={{ backgroundImage: "url('/DevHeroUpped.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-cover bg-zinc-900/70 bg-opacity-80"></div>
        <HeaderNavigation />
        {/** Wrapper for the main content in the Hero */}
        <MannersIntroductionParent />
      </header>
      <section className="relative flex flex-col items-center w-full md:h-1/2 bg-zinc-400/60">
        <AboutUs />
      </section>
    </main>
  );
}
