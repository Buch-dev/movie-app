"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  return (
    <div className="container flex flex-col md:flex-row justify-between items-center py-3">
      <div className="flex items-center">
        <Image src="/img/Logo.png" alt="logo" width={168} height={50} />
        <div className="md:hidden ml-4 cursor-pointer">
          <Image
            src="/img/Menu.png"
            alt="menu"
            width={24}
            height={24}
            onClick={() => {
              // Handle mobile menu toggle
            }}
          />
        </div>
      </div>

      <form className="w-full mt-4 md:mt-0 md:w-[525px]" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder="What do you want to watch?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 text-white placeholder-white bg-[#111827] border border-[#D1D5DB] rounded-md outline-none"
          />
          <button
            type="submit"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 md:right-[20px] md:top-[20px]"
          >
            <Image
              src="/img/Search.png"
              alt="search"
              width={16}
              height={16}
            />
          </button>
        </div>
      </form>

      <div className="md:flex items-center space-x-6 mt-4 md:mt-0">
        <button className="text-white font-bold">Sign In</button>
        <div className="menu-btn hidden md:flex items-center justify-center bg-[#BE123C] rounded-[50%] w-9 h-9">
          <Image
            src="/img/Menu.png"
            alt="menu"
            width={24}
            height={24}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
