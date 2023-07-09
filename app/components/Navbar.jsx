import { SiProbot } from "react-icons/si";

export default function Navbar() {
  return (
    <div className="w-full py-4 px-3 md:px-12 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center md:px-8 gap-8">
            <SiProbot size={40} color="black" className="mb-2"/>
            <h1 className="hidden md:flex text-3xl font-medium text-[#101010]">
          PromptMania
        </h1>
        </div>
        <button className="py-1 px-6 bg-[#101010] font-medium text-[#fff] rounded-md hover:bg-transparent hover:border-2 border-black hover:text-black">Create</button>
      </div>
    </div>
  );
}
