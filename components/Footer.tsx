import { FOOTER_LINKS } from "@/const"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href='/' className="mb-10">
          <Image
          className=""
          src="hilink-logo.svg"
          alt="boat"
          width={74}
          height={29}
        />
          </Link>
          <div className="flex flex-wrap sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns)=>(
              <FooterColumn></FooterColumn>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer


type FooterColumnProps={
  title:string;
  children:string;
}

const FooterColumn = ({title, children}:FooterColumnProps)=>{
<div className="">
  <h4 className="">{title}</h4>
</div>
}