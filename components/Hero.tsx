"use client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { Media } from "./Media";

export const Hero = () => {
  const [watchVideo, setWatchVideo] = useState(false);

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Conditionally Render Media */}
      {watchVideo && <Media close={() => setWatchVideo(false)} />}

      {/* Hero Image or Map */}
      <div className="hero-map" />

      {/* Left Content */}
      <div className="relative z-20 flex flex-col flex-1 xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">
          Welcome to <em className="text-orange-700">Mhey</em>
          <em className="text-neutral-500">rie</em> Camping Area
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          dolorum magnam ab eaque? Eius sint quisquam tempore. Autem
          necessitatibus perspiciatis nobis, cumque sit molestiae! Qui tempora
          non delectus necessitatibus placeat! Tempore, non nobis voluptatum
          cumque fugiat perspiciatis quae animi! Laborum dolor distinctio
          tempora eaque, a excepturi fugit maxime! Suscipit facilis repellendus
          nulla rerum voluptatem cum dolore officia odit animi esse?
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  src="/star.svg"
                  key={i}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70/50">
            198k{" "}
            <span className="regular-16 lg:regular-20 ml-1 underline cursor-pointer text-blue-70">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How We Work?"
            variant="btn_white_text"
            icon="/play.svg"
            onClick={() => setWatchVideo(true)}
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="text-gray-20 regular-16">Location</p>
              <Image src="/close.svg" alt="Close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Crescent Avenue</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="text-gray-20 regular-16 block">Distance</p>
              <p className="text-white regular-16 bold-16">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-20 regular-16 block">Elevation</p>
              <p className="text-white regular-16 bold-16">2.004 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
