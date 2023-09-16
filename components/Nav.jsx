"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  console.log(searchText);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchText) {
        router.push(`/movies/search?query=${searchText}`)
    }
  }

  return (
    <div className="container flex justify-between items-center pt-[15px]">
      <div className="logo">
        <Image src="/img/Logo.png" alt="logo" width={168} height={50} />
      </div>

      <form className="relative" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="What do you want to watch?"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="w-[525px] border-2 border-[#D1D5DB] px-[10px] py-[6px] rounded-md outline-none bg-transparent placeholder:text-white text-white"
        />
        <button type="submit" className="absolute top-[10px] right-[10px]">
          <Image src="/img/Search.png" alt="search" width={16} height={16} />
        </button>
      </form>

      <div className="signin flex">
        <button className="mr-[27px] text-white font-bold">Sign In</button>
        <div className="menu-btn flex items-center justify-center bg-[#BE123C] rounded-[50%] w-9 h-9">
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
