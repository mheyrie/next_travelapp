import Image from "next/image";

export default function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="border-1 border-red-600 padding-container max-container w-full p-24">
        <Image
          className="camp-quote"
          src="/camp.svg"
          alt="camp-2"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}
