import HeaderNavigation from "./client/HeaderNavigation";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-zinc-800 text-gray-200 ">
      {/** Navigation Component will be within our HeaderHero component */}
      <header className="relative flex flex-col items-center md:h-1/2 h-full w-full">
        <div
          className="absolute inset-0 bg-cover hidden md:flex"
          style={{ backgroundImage: "url('/DevHeroUpped.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-cover bg-zinc-900/70 bg-opacity-80"></div>
        <HeaderNavigation />
        <p className="absolute text-4xl w-[90%] md:w-[460px] top-[350px] md:top-[170px] lg:top-[140px] font-medium md:left-6 lg:left-10 leading-snug md:p-4">
          We&apos;re pretty confident you&apos;ll need them one day. <br />
          <span className="text-2xl ml-2 w-full font-normal ">
            - Modern Manners of Tulsa
          </span>
        </p>
      </header>
    </div>
  );
}
