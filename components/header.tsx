import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="relative bg-black z-50">
      <div className="flex min-h-[67px] justify-between items-center container mx-auto">
        <a href="#">
          <Image src="/logo-removebg.png" alt="logo" width={100} height={100} />
        </a>
        <div>Menu</div>
      </div>
    </header>
  );
};
