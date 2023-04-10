import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-screen text-white relative scroll-smooth overflow-x-hidden"
    >
      <div className="absolute top-0 left-0 h-full w-full z-[1]">
        <Image
          src="/image/bgweb.jpg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <Navbar />
      <div className="relative h-[70%] z-[10] px-[8rem] py-[1rem] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl">SERVE YOU BETTER TASTE OF COFFEE</h1>
          <p className="text-2xl mt-2 mb-10 font-md tracking-wider">
            Fresh place to drink coffee
          </p>
          <Link
            href="#menu"
            className="bg-gray-800 px-[2rem] py-[8px] rounded-xl scroll-smooth"
          >
            <p className="font-semibold tracking-wider">MENU</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
