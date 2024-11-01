import Image from "next/image"

export const Hero = () => {
  return (
    <section className="border-2 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />
        {/* Left  */}

        <div className="relative z-20 flex flex-col flex-1 xl:w-1/2">
        <Image src='/camp.svg' alt="camp" width={50} height={50} className="absolute left-[-5px]" />
        </div>
    </section>
  )
}