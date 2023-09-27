import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" relative flex justify-center rounded-2xl bg-[#C1DCDC] py-12 xl:justify-start">
      <div className="relative z-10 flex w-full max-w-[500px] flex-col gap-8 p-12">
        <h1 className="text-[2.5rem] font-bold md:text-5xl">
          Buy your dream plants
        </h1>
        <div className="flex items-center gap-8 text-xl font-medium">
          <div className="flex flex-col">
            <p>50+</p>
            <p>Plant Species</p>
          </div>
          <div className="h-[3rem] border-s-2 border-black"></div>
          <div className="flex flex-col">
            <p>100+</p>
            <p>Customers</p>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="What are you looking for?"
            id=""
            className="w-full rounded-lg p-4 pr-14"
          />
          <div className="absolute bottom-2 right-2 top-2 flex w-10 items-center justify-center rounded-lg bg-[#C1DCDC]">
            <Image
              src={"/search__icon.png"}
              width={18}
              height={18}
              alt="search icon"
            ></Image>
          </div>
        </div>
      </div>
      <Image
        src={"/hero__image.png"}
        alt="a hand holding a plant"
        width={650}
        height={650}
        className="absolute bottom-0 right-0 hidden xl:block"
      ></Image>
    </div>
  );
}
