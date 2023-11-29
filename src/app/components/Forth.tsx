import React from "react";
import Image from "next/image";

function Forth() {
  return (
    <div className="bg-red-100 mt-10">
      <div className="pt-24">
        <p className=" text-center text-black font-bold text-2xl">
          Here Is Why Members Love
        </p>
        <p className=" text-center mt-3 text-red-700 text-4xl font-extrabold">
          Travelxp RED
        </p>
      </div>

      <div className="grid grid-rows-2 grid-flow-col justify-center gap-4 content-center m-14 pb-24">
        <div className="bg-red-600 text-white w-80 p-5">
          <h1 className="mb-2 font-semibold">Your Journey, Our Story</h1>
          <p className=" font-thin text-xs">
            Over 500 million viewers watch Travelxp every month to explore the
            world in stunning 4K HDR and plan their next favourite holiday.
          </p>
        </div>
        <div className="bg-red-600 text-white w-80 p-5">
          <h1 className="mb-2 font-semibold">Always About You</h1>
          <p className=" font-thin text-xs">
            Even during Covid, 83% of our customers trusted us for refund. We
            are Indias most trusted travel brand.
          </p>
        </div>
        <div className="bg-red-600 text-white w-80 p-5">
          <h1 className="mb-2 font-semibold">Make Trvel Your Lifestyle</h1>
          <p className=" font-thin text-xs">
            Get special documents on your hotel and flight bookings.
          </p>
        </div>
        <div className="bg-red-600 text-white w-80 p-5">
          <h1 className="mb-2 font-semibold">Share The Happiness</h1>
          <p className=" font-thin text-xs">
            Share your membership with your friends and family! One for all,
            Travelxp RED!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forth;