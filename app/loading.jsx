import React from "react";

export default function Loading() {
  return (
    <main className="text-center flex flex-col items-center justify-center h-screen">
      <h2>Loading...</h2>
      <p>Hopefully not for too long :)</p>
      <div class="lds-ellipsis">
        <div className="text-black"></div>
        <div className="text-black"></div>
        <div className="text-black"></div>
        <div className="text-black"></div>
      </div>
    </main>
  );
}
