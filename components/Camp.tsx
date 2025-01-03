import { PEOPLE_URL } from "@/const";
import Image from "next/image";

interface CampProps {
  subtitle: string;
  backgroundImage: string;
  peopleJoined: string;
  title: string;
}

const CampSite = ({
  subtitle,
  backgroundImage,
  peopleJoined,
  title,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="bold-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={url}
                src={url}
                alt="persons"
                width={50}
                height={50}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default function Camp() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex w-full items-start h-[340px] justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Pamhaa Resort Corner"
          subtitle="Prigen, Pasuran"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />{" "}
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing the way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facere quaerat illo possimus voluptatem magnam suscipit accusamus
            aspernatur rem dolores! Qui accusantium reiciendis deserunt ullam
            dolor, tempore dignissimos perspiciatis exercitationem.
          </p>
          <Image
            className="camp-quote"
            src="/quote.svg"
            alt="camp-2"
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
}
