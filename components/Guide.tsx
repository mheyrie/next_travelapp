import Image from "next/image";

export default function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Lorem ipsum dolor sit.
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consectetur libero nemo, cum neque excepturi dolorem quas aperiam?
            Labore nam rem iusto officia perferendis voluptates cumque obcaecati
            asperiores accusamus rerum. Asperiores facilis veniam architecto
            culpa quidem, ipsam iusto cupiditate nostrum quae assumenda.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          className="w-full object-cover object-center 2xl:rounded-5xl"
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
        <Image
          className="w-auto h-full"
          src="/meter.svg"
          alt="meter"
          width={16}
          height={158}
        />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20 mr-4">Destination</p>
                <p className="bold-16 text-green-50">48 mins</p>
              </div>
              <p className="mt-2 bold-20">Agus Calintine</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="mt-2 bold-20 whitespace-nowrap">Mauritus</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
