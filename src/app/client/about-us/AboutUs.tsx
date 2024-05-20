export interface AboutUs {
  (): JSX.Element;
}

function AboutUsBase() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-y-16">
      <div className="text-5xl text-center font-normal text-zinc-200 leading-relaxed pt-32">
        About Us
      </div>
      <p className="text-lg text-zinc-100 font-light text-center max-w-[60%] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
        amet accumsan risus. Mauris tincidunt, sapien ac viverra scelerisque.
      </p>
    </div>
  );
}

export default function AboutUs() {
  return <AboutUsBase />;
}
