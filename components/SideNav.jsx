import Image from 'next/image'
import React from 'react'

const SideNav = () => {
  return (
    <div className='hidden md:block'>
        <div className="w-[226px] h-[982px] rounded-r-[45px] border">
        <div className="flex gap-3 items-center w-[186px] mx-auto mt-[52px]">
          <Image src="/img/tv.png" alt="logo" width={50} height={50} />
          <label className="text-[#333] text-2xl font-bold">MovieBox</label>
        </div>
        <div className="mt-[107px]">
          <div className="flex items-center justify-center hover:border-r-8 hover:bg-[#BE123C1A] hover:border-[#BE123C]">
            <Image src="/img/Home.png" alt="home" width={25} height={25} />
            <p className="text-[#666] text-xl font-semibold ml-[15px] py-7 hover:text-[#BE123C]">
              Home
            </p>
          </div>
          <div className="flex items-center justify-center hover:border-r-8 hover:bg-[#BE123C1A] hover:border-[#BE123C]">
            <Image src="/img/TV-show.png" alt="tv" width={25} height={25} />
            <p className="text-[#666] text-xl font-semibold ml-[15px] py-7 hover:text-[#BE123C]">
              TV Series
            </p>
          </div>
          <div className="flex items-center justify-center hover:border-r-8 hover:bg-[#BE123C1A] hover:border-[#BE123C]">
            <Image
              src="/img/Calendar.png"
              alt="calendar"
              width={25}
              height={25}
            />
            <p className="text-[#666] text-xl font-semibold ml-[15px] py-7 hover:text-[#BE123C]">
              Upcoming
            </p>
          </div>
        </div>
        <div className="pt-[42px] pb-4 px-4 mt-[78px] w-[170px] mx-auto rounded-[20px] border-[#BE123CB2] border">
          <p className="text-[#333333CC] text-[15px] font-semibold items-center flex flex-col justify-center">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[#666] text-xs font-medium mt-[9px] mb-2">
            50k people are playing now
          </p>
          <button className="text-[#BE123C] text-xs font-medium px-[17px] py-[6px] bg-[#BE123C33] rounded-[30px]">
            Start playing
          </button>
        </div>
        <div className="flex items-center justify-center hover:border-r-8 hover:bg-[#BE123C1A] hover:border-[#BE123C] mt-[44px]">
            <Image
              src="/img/Logout.png"
              alt="calendar"
              width={30}
              height={30}
            />
            <p className="text-[#666] text-xl font-semibold ml-[15px] py-7 hover:text-[#BE123C]">
              Log Out
            </p>
          </div>
      </div>
    </div>
  )
}

export default SideNav