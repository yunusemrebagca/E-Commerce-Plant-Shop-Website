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
      className="scrollbar-hidden overflow-x-hidden scrollbar-track-gray-100  scrollbar-thumb-gray-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md hover:overflow-x-scroll hover:scrollbar-thin"
    >
      <Flex className="w-full min-w-[500px] flex-col items-start rounded-lg border bg-[#C1DCDC] md:min-w-[700px] lg:min-w-[900]">
        <p>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Flex className="w-full justify-start">
          <Image src={"/quote.png"} width={48} height={48} alt="quote symbol" />
          <Flex className="mr-auto flex-col items-start gap-0 px-2 py-2">
            <p className="text-base font-bold">John Doe</p>
            <p className="text-sm">Youtuber</p>
          </Flex>
          <p className="flex items-center space-x-2 self-start text-sm font-bold">
            <img className="inline" src="/star-icon.png" alt="star icon" />
            <span>4.5</span>
          </p>
        </Flex>
      </Flex>
      <Flex className="w-full min-w-[500px] flex-col items-start rounded-lg border bg-[#C1DCDC] md:min-w-[700px] lg:min-w-[900]">
        <p>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Flex className="w-full justify-start">
          <Image src={"/quote.png"} width={48} height={48} alt="quote symbol" />
          <Flex className="mr-auto flex-col items-start gap-0 px-2 py-2">
            <p className="text-base font-bold">John Doe</p>
            <p className="text-sm">Youtuber</p>
          </Flex>
          <p className="flex items-center space-x-2 self-start text-sm font-bold">
            <img className="inline" src="/star-icon.png" alt="star icon" />

            <span>4.5</span>
          </p>
        </Flex>
      </Flex>
      <Flex className="w-full min-w-[500px] flex-col items-start rounded-lg border bg-[#C1DCDC] md:min-w-[700px] lg:min-w-[900]">
        <p>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Flex className="w-full justify-start">
          <Image src={"/quote.png"} width={48} height={48} alt="quote symbol" />
          <Flex className="mr-auto flex-col items-start gap-0 px-2 py-2">
            <p className="text-base font-bold">John Doe</p>
            <p className="text-sm">Youtuber</p>
          </Flex>
          <p className="flex items-center space-x-2 self-start text-sm font-bold">
            <img className="inline" src="/star-icon.png" alt="star icon" />
            <span>4.5</span>
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
}
