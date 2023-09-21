import React from "react";
import Image from "next/image";

export default function BestSelling() {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-4">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-4 max-w-[300px] lg:max-w-[200px] pr-2">
        <h2 className="text-3xl font-bold">Best Selling Plants</h2>
        <p className="text-lg">
          Easiest way to healthy life by buying your favorite plants
        </p>
        <button className="bg-[#C1DCDC] py-2 px-4 max-w-[150px] flex items-center justify-center rounded-md">
          <span>See more</span>
          <Image
            className="inline pl-2"
            src={"/ArrowRight.svg"}
            width={24}
            height={24}
            alt="arrow"
          ></Image>
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <Image src={"/plant1.png"} height={600} width={400} alt="plant"></Image>
        <h3 className="font-medium">Natural Plants</h3>
        <p className="text-gray-500">₱ 1,400.00</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <Image src={"/plant2.png"} height={600} width={400} alt="plant"></Image>
        <h3 className="font-medium">Artificial Plants</h3>
        <p className="text-gray-500">₱ 900.00</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <Image src={"/plant3.png"} height={600} width={400} alt="plant"></Image>
        <h3 className="font-medium">Artificial Plants</h3>
        <p className="text-gray-500">₱ 3,500.00</p>
      </div>
    </div>
  );
}
