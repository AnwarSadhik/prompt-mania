"use client"
import Navbar from "@/components/Navbar";
import { CgHashtag } from "react-icons/cg";
import Typewriter from 'typewriter-effect';
import { AiFillCaretDown } from "react-icons/ai"


export default function Home() {
  return (
    // <main className="w-full bg-white">
      <div
        className="h-screen w-full "
        style={{
          backgroundImage: `url("https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png")`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center h-4/5 py-4 px-3 md:px-20 text-[#101010]">
        <Navbar />
          <div className="flex items-center flex-col gap-y-2 md:gap-y-8">
            <div className="flex items-center">
              <CgHashtag className="text-3xl md:text-4xl"/>
              <h1 className="text-xl md:text-5xl">Discover & Share your Next Prompt for</h1>
            </div>
            <h2 className="text-xl md:text-6xl font-bold">
              <Typewriter
                options={{
                  strings: ["AI ART", "CODING","DEBUGGING","FUNNIES"],
                  autoStart: true,
                  loop: true,
                  delay: 100
                }}
                />
            </h2>
          </div>
        <div className="absolute bottom-4 right-1/2 animate-bounce">
          <AiFillCaretDown size={20} color="black"/>
        </div>
        </div>
      </div> 
  );
}
