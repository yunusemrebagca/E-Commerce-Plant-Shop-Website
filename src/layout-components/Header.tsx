import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center py-8 px-4 font-poppins">
      <Image
        alt="logo Greenmind"
        src={"/greenmind__logo.png"}
        width={140}
        height={45}
        className="h-[32px] object-contain"
      ></Image>
      <ul className="gap-8 items-center hidden lg:flex">
        <li className="hover:text-gray-500 transition-ease duration-300">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-gray-500 transition-ease duration-300">
          <Link href={"/"}>Products</Link>
        </li>
        <li className="hover:text-gray-500 transition-ease duration-300">
          <Link href={"/"}>Contacts</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
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
          width={32}
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
