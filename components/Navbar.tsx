import { NAV_LINKS } from "@/const";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link,key)=>(
                <li key={key}>{link.label}</li>
            ))}
        </ul>
      </Link>
    </nav>
  );
};
export default Navbar;
