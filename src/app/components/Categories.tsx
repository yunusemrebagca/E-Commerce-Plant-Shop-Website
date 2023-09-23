import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const Flex = tw.div`flex flex-col justify-between items-center py-8 px-4 font-poppins gap-2 lg:gap-4`;
const H2 = tw.h2`text-3xl font-bold mb-4`;
const H3 = tw.h3`text-md font-medium mb-4`;

export default function Categories() {
  return (
    <Flex className="lg:flex-row">
      <Flex className="flex-col gap-4 lg:mt-[-12rem] basis-1/3">
        <Image
          src={"/plant__category.png"}
          height={600}
          width={400}
          alt="plant image"
        />
        <H3>Artificial Plants</H3>
      </Flex>
      <Flex className="flex-col gap-4 basis-1/3">
        <Image
          src={"/plant__category-2.png"}
          height={600}
          width={400}
          alt="plant image"
        />
        <H3>Artificial Plants</H3>
      </Flex>
      <Flex className="flex-col gap-4 lg:mt-[-12rem] basis-1/3">
        <Image
          src={"/plant__category-3.png"}
          height={600}
          width={400}
          alt="plant image"
        />
        <H3>Artificial Plants</H3>
      </Flex>
    </Flex>
  );
}
