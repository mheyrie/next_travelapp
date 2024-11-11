import Image from "next/image";

export default function Features() {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end">
        <div className="">
        <Image src="/phone.png" alt="phone" width={440} height={1000} className="feature-phone"/>
        </div>
      </div>
    </section>
  );
}
