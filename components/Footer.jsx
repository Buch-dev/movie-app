import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='container text-center mt-[147px]'>
        <div className="icons grid grid-cols-4 w-[240px] gap-12 mx-auto">
            <Image src='/img/fa-brands_facebook-square.png' alt='facebook' width={24} height={27.427} />
            <Image src='/img/fa-brands_instagram.png' alt='instagram' width={24} height={27.427} />
            <Image src='/img/fa-brands_twitter.png' alt='facebook' width={24} height={24} />
            <Image src='/img/fa-brands_youtube.png' alt='facebook' width={24} height={21.333} />
        </div>
        <div className="my-9 grid border md:grid-cols-3 gap-12 md:w-[492px] mx-auto">
            <p className='text-lg font-bold'>Conditions of Use</p>
            <p className='text-lg font-bold'>Privacy & Policy</p>
            <p className='text-lg font-bold'>Press Room</p>
        </div>
        <div className="copyright pb-5">
            <Image src='/img/copyright.png' alt='copyright' width={366} height={23} className='mx-auto' />
        </div>
    </div>
  )
}

export default Footer