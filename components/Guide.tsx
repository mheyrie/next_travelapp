import Image from "next/image";

export default function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="border-1 border-red-600 padding-container max-container w-full p-24">
      <Image
            className="camp-quote"
            src="/quote.svg"
            alt="camp-2"
            width={50}
            height={50}
          />
      </div>
    </section>
  )
}