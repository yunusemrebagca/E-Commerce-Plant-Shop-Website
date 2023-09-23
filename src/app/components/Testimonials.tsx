"use client";

import React from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { useScrollContainer } from "react-indiana-drag-scroll";
const Flex = tw.div`flex justify-between items-center py-8 px-8 font-poppins gap-8`;

export default function Testimonials() {
  const { ref } = useScrollContainer();

  return (
    <Flex
      ref={ref}
      className="scrollbar-hidden overflow-x-hidden hover:overflow-x-scroll  hover:scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thumb-gray-500 scrollbar-track-gray-100"
    >
      <Flex className="flex-col min-w-[800px] border items-start bg-[#C1DCDC] rounded-lg">
        <p>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Flex className="w-full justify-start">
          <Image src={"/quote.png"} width={48} height={48} alt="quote symbol" />
          <Flex className="flex-col gap-0 mr-auto items-start py-2 px-2">
            <p className="font-bold text-base">John Doe</p>
            <p className="text-sm">Youtuber</p>
          </Flex>
          <p className="text-sm space-x-2 flex items-center font-bold self-start">
            <img className="inline" src="/star-icon.png" alt="star icon" />
            <span>4.5</span>
          </p>
        </Flex>
      </Flex>
      <Flex className="flex-col min-w-[800px] border items-start bg-[#C1DCDC] rounded-lg">
        <p>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Flex className="w-full justify-start">
          <Image src={"/quote.png"} width={48} height={48} alt="quote symbol" />
          <Flex className="flex-col gap-0 mr-auto items-start py-2 px-2">
            <p className="font-bold text-base">John Doe</p>
            <p className="text-sm">Youtuber</p>
          </Flex>
          <p className="text-sm space-x-2 flex items-center font-bold self-start">
            <img className="inline" src="/star-icon.png" alt="star icon" />
            <span>4.5</span>
          </p>
        </Flex>
      </Flex>
      <Flex className="flex-col min-w-[800px] border items-start bg-[#C1DCDC] rounded-lg">
        <p>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Flex className="w-full justify-start">
          <Image src={"/quote.png"} width={48} height={48} alt="quote symbol" />
          <Flex className="flex-col gap-0 mr-auto items-start py-2 px-2">
            <p className="font-bold text-base">John Doe</p>
            <p className="text-sm">Youtuber</p>
          </Flex>
          <p className="text-sm space-x-2 flex items-center font-bold self-start">
            <img className="inline" src="/star-icon.png" alt="star icon" />
            <span>4.5</span>
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
}
