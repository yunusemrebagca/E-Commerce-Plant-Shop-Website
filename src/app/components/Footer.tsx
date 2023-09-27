import tw from "tailwind-styled-components";
import Image from "next/image";

const Flex = tw.div`flex flex-col justify-between items-center py-8 px-4 font-poppins gap-2 lg:gap-4`;
const H2 = tw.h2`text-3xl font-bold mb-4`;
const H3 = tw.h3`text-md font-medium mb-4`;

export const Footer = () => {
  return (
    <footer className="bg-[#C1DCDC]">
      <Flex className="container mx-auto items-start justify-start  gap-4 lg:flex-row lg:gap-8">
        <Flex className="mr-auto max-w-[200px] items-start gap-4">
          <h2 className="font-bold">GREEMIND</h2>
          <p>We help you find your dream plant</p>
          <div className="flex items-center gap-4">
            <div className="rounded-full border border-slate-700 p-2">
              <Image
                src="/gg-facebook.svg"
                width={24}
                height={24}
                alt="facebook logo"
              />
            </div>
            <div className="rounded-full border border-slate-700 p-2">
              <Image
                src="/gg-facebook.svg"
                width={24}
                height={24}
                alt="facebook logo"
              />
            </div>
          </div>
        </Flex>
        <Flex className="items-start gap-8">
          <h2 className="font-bold">Information</h2>
          <ul className="flex flex-col gap-4">
            <li>About</li>
            <li>Product</li>
            <li>Blog</li>
          </ul>
        </Flex>
        <Flex className="items-start gap-8">
          <h2 className="font-bold">Company</h2>
          <ul className="flex flex-col gap-4">
            <li>Community</li>
            <li>Career</li>
            <li>Our story</li>
          </ul>
        </Flex>
        <Flex className="items-start gap-8">
          <h2 className="font-bold">Contact</h2>
          <ul className="flex flex-col gap-4">
            <li>Getting Started</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </Flex>
      </Flex>
      <Flex className="container mx-auto mt-8 items-start text-gray-600">
        2023 all Right Reserved Term of use GREENMIND
      </Flex>
    </footer>
  );
};
