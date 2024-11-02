"use client";
import { NAV_LINKS } from "@/const";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleHamburger = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        {/* Hamburger  */}
        <button
          className={`inline-block hamburger lg:hidden ${
            isSidebarOpen ? "open" : ""
          }`}
          onClick={toggleHamburger}
        >
          <span className="top-ham"></span>
          <span className="middle-ham"></span>
          <span className="bottom-ham"></span>
        </button>
      </nav>
      {isSidebarOpen ? (
        <div className="lg:hidden bg-slate-500 w-1/2 fixed top-20 h-dvh z-50">
          <div className="flex flex-col my-10 justify-center space-y-6 font-bold left-2 right-2">
            <ul className="flex flex-col gap-6 mt-8 px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="font-bold regular-16 text-gray-700 cursor-pointer transition-all hover:font-bold"
                  onClick={toggleHamburger} // Close sidebar on link click
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Navbar;
