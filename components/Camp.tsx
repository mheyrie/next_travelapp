import Image from "next/image";

interface CampProps  {
  subtitle: string;
   backgroundImage: string;
   peopleJoined: string;
   title: string;
}

const CampSite = ({subtitle, backgroundImage, peopleJoined, title}:(CampProps)) => {
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src='/folded-map.svg' alt='map' width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="bold-14 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Camp() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 border border-green-600">
      <div className="hide-scrollbar flex w-full items-start h-[340px] justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
        backgroundImage='bg-bg-img-1'
        title='Pamhaa Resort Corner'
        subtitle='Prigen, Pasuran'
        peopleJoined = '50+ Joined'
        >

        </CampSite>
      </div>
    </section>
  )
}