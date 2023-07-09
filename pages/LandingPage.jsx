"use client"
import Navbar from "@/app/components/Navbar"
import { CgHashtag } from "react-icons/cg";
import Typewriter from 'typewriter-effect';
import { AiOutlineDown } from "react-icons/ai"

export default function LandingPage() {
  return (
    <div
        className="h-screen w-full "
        style={{
          backgroundImage: `url("https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png")`,
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="flex justify-center items-center h-3/4 py-4 px-3 md:px-20 text-[#101010]">
          <div className="flex items-center flex-col gap-y-8">
            <div className="flex items-center">
              <CgHashtag size={40} />
              <h1 className="text-2xl md:text-4xl ">Find your Next Prompt for</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              <Typewriter
                options={{
                  strings: ["CHATGPT", "DALL-E","BARD","FIREFLY"],
                  autoStart: true,
                  loop: true,
                  delay: 100
                }}
              />
            </h2>
          </div>
        </div>
        <div className="absolute bottom-4 right-1/2 animate-bounce">
          <AiOutlineDown size={20} color="black"/>
        </div>
      </div>
  )
}
