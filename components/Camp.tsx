interface CampProps  {
  subtitle: string;
   backgroundImage: string;
   peopleJoined: string;
   title: string;
}

const CampSite = ({subtitle, backgroundImage, peopleJoined, title}:(CampProps)) => {
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}`}>
      <div className="flex h-full"></div>
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