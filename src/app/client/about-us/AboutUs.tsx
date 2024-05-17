export interface AboutUs {
  (): JSX.Element;
}

export default function AboutUsBase() {
  return (
    <>
      {" "}
      <div className="text-6xl absolute font-normal text-zinc-800 p-8 left-0">
        About
      </div>
      <p className="text-gray-800">
        We are a group of people who are passionate about teaching manners and
        etiquette. We believe that manners are important in today&apos;s society
        and that they can make a big difference in how people interact with each
        other. Our goal is to help people learn the skills they need to be
        polite, respectful, and considerate in all situations.
      </p>
    </>
  );
}

export async function AboutUs() {
  return <AboutUsBase />;
}
