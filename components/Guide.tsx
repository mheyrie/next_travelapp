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
          <div className="flex flex-wrap"></div>
      </div>
    </section>
  )
}