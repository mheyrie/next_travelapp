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
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolorum magnam ab eaque? Eius sint quisquam tempore. Autem necessitatibus perspiciatis nobis, cumque sit molestiae! Qui tempora non delectus necessitatibus placeat!
        Tempore, non nobis voluptatum cumque fugiat perspiciatis quae animi! Laborum dolor distinctio tempora eaque, a excepturi fugit maxime! Suscipit facilis repellendus nulla rerum voluptatem cum dolore officia odit animi esse?</p>
      </div>
    </section>
  );
};
