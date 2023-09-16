import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className="text-center flex items-center justify-center">
        <h2 className='text-3xl font-bold text-[#B91C1C]'>We Hit a Brickwall.</h2>
        <p>We could not find the movie you were looking for</p>
        <p>Go back to the <Link href="/" className='bg-[#f0cbcb]'>Home Page</Link></p>
    </main>
  )
}
