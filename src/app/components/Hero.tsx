import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" bg-[#C1DCDC] py-12 rounded-2xl relative flex justify-center xl:justify-start">
      <div className="w-full max-w-[500px] flex flex-col gap-8 p-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Buy your dream plants
        </h1>
        <div className="flex items-center gap-8 text-xl font-medium">
          <div className="flex flex-col">
            <p>50+</p>
            <p>Plant Species</p>
          </div>
          <div className="h-[3rem] border-black border-s-2"></div>
          <div className="flex flex-col">
            <p>100+</p>
            <p>Customers</p>
          </div>
        </div>
        <input
          type="text"
          name="search"
          placeholder="What are you looking for?"
          id=""
          className="w-full  p-4 rounded-lg"
        />
      </div>
      <Image
        src={"/hero__image.png"}
        alt="a hand holding a plant"
        width={650}
        height={650}
        className="absolute right-0 bottom-0 hidden xl:block"
      ></Image>
    </div>
  );
}
