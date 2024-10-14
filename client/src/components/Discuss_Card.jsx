import React from "react";
import "./Discuss_Card.css";

function Discuss_Card() {
  return (
    <section className="shadow-lg rounded-md bg-white p-6 space-y-5 sticky top-20">
      <header className="text-left p-1 ">
        <hr />
        <p className="text-2xl font-bold px-1 ">#Discuss</p>
        <p className="text-start font-thin text-sm ">
          Discussion threads targetting the whole community
        </p>
      </header>
      <main className="flex flex-col space-y-5 text-start ">
        <span className="px-3 py-2 bg-[#fff5ee] hover:shadow-md hover:cursor-pointer new ">
          Lorem ipsum dolor sit amet consectetur adipis
        </span>
        <span className="px-2 bg-[#fff5ee] hover:shadow-md hover:cursor-pointer ">
          Lorem ipsum dolor sit amet consectetur adipis
        </span>
        <span className="px-2 bg-[#fff5ee] hover:shadow-md hover:cursor-pointer new ">
          Lorem ipsum dolor sit amet consectetur adipis1
        </span>
        <span className="px-2 bg-[#fff5ee] hover:shadow-md hover:cursor-pointer ">
          Lorem ipsum dolor sit amet consectetur adipis
        </span>
        <span className="px-2 bg-[#fff5ee] hover:shadow-md hover:cursor-pointer ">
          Lorem ipsum dolor sit amet consectetur adipis
        </span>
      </main>
    </section>
  );
}

export default Discuss_Card;
