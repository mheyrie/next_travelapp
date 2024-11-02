import Image from "next/image";

export const Hero = () => {
  return (
    <section className="border-2 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      {/* Left  */}

      <div className="relative z-20 flex flex-col flex-1 xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">
          Welcome to <em className="text-orange-700">Mhey</em>
          <em className="text-neutral-500">rie</em> Camping Area
        </h1>
      </div>
    </section>
  );
};
