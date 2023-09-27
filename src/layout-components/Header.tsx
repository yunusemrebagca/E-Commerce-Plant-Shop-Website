import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-8 font-poppins">
      {/* <Image
        alt="logo Greenmind"
        src={"/greenmind__logo.png"}
        width={140}
        height={45}
        className="h-[32px] object-contain"
      ></Image> */}
      <span className="text-2xl font-bold">GREENMIND</span>
      <ul className="hidden items-center gap-8 lg:flex">
        <li className="transition-ease duration-300 hover:text-gray-500">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="transition-ease duration-300 hover:text-gray-500">
          <Link href={"/"}>Products</Link>
        </li>
        <li className="transition-ease duration-300 hover:text-gray-500">
          <Link href={"/"}>Contacts</Link>
        </li>
      </ul>
      <div className="flex items-center gap-0 md:gap-4">
        <Image
          src={"/cart__icon.svg"}
          width={32}
          height={32}
          alt="cart icon"
          className="h-[24px]"
        ></Image>
        <Image
          src={"/person__icon.svg"}
          width={32}
          height={32}
          className="h-[24px]"
          alt="person icon"
        ></Image>
        <Image
          src={"/vertical__line.svg"}
          width={16}
          height={32}
          alt=""
          className="h-[24px]"
        ></Image>
        <Image
          src={"/menu__icon.svg"}
          width={32}
          height={32}
          alt="menu icon"
          className="h-[24px]"
        ></Image>
      </div>
    </div>
  );
}
