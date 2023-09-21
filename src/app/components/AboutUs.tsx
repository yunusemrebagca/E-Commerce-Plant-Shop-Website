import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-8 items-center ">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="text-gray-500">
        Order now and appreciate the beauty of nature
      </p>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex basis-1/3 flex-col gap-4 items-center text-center">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-[75px] bg-[#C1DCDC]">
            <Image
              src={"/plant__icon.png"}
              height={40}
              width={40}
              alt="plant icon"
            ></Image>
          </div>
          <h3 className="font-medium text-xl">Large Assortment</h3>
          <p className="text-gray-500">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>
        <div className="flex basis-1/3 flex-col gap-4 items-center text-center">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-[75px] bg-[#C1DCDC]">
            <Image
              src={"/shipment__icon.png"}
              height={40}
              width={40}
              alt="plant icon"
            ></Image>
          </div>
          <h3 className="font-medium text-xl">Fast & Free Shipping</h3>
          <p className="text-gray-500">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>
        <div className="flex basis-1/3 flex-col gap-4 items-center text-center">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-[75px] bg-[#C1DCDC]">
            <Image
              src={"/call__icon.png"}
              height={40}
              width={40}
              alt="plant icon"
            ></Image>
          </div>
          <h3 className="font-medium text-xl">24/7 Support</h3>
          <p className="text-gray-500">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}
