import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-[#B91C1C]">
        There was a problem.
      </h2>
      <p className="my-4">We could not find the page you were looking for</p>
      <p>
        Go back to the{" "}
        <Link
          href="/"
          className="bg-[#f0cbcb] px-4 py-2 text-[#B91C1C] rounded"
        >
          Home Page
        </Link>
      </p>
    </main>
  );
}
