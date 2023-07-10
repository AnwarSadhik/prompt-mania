import { AiOutlineGoogle } from "react-icons/ai";
import Navbar from "@/components/Navbar";

export default function PromptPage() {
  return (
    <>
      <Navbar />
      <main className="w-full h-screen flex justify-center items-center bg-white gap-y-16 text-[#101010]">
        <div className="w-[330px] md:w-[400px] h-[535px] border py-14 px-4 rounded-xl">
          <div className="flex items-center justify-evenly mb-5">
            <p className="text-center text-md">
              Stay Anonymous <br /> and create a Prompt
            </p>
            <img
              src="https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0xb62f4afe8a5152d57b64b4d3b58470c09f41a185-1684143766733443750.png"
              alt="avatar"
              className="w-[55px] h-[55px] rounded-full"
            />
          </div>
          <form
            action=""
            className="flex justify-between items-center flex-col gap-y-6"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm">
                name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                className="input input-bordered w-full max-w-lg text-[#101010] bg-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="prompt" className="text-sm">
                Prompt
              </label>
              <input
                type="text"
                name="prompt"
                placeholder="Docker-101"
                className="input input-bordered w-full max-w-lg text-[#101010] bg-transparent"
              />
            </div>
            <div className="mt-4">
              <select
                className="text-[#101010] cursor-pointer px-2 bg-transparent border border-[#101010]"
                defaultValue="Pick a tag"
              >
                <option disabled>Pick a tag</option>
                <option className="text-inherit">Art</option>
                <option className="text-inherit">Coding</option>
                <option className="text-inherit">Technology</option>
              </select>
            </div>
            <button className="px-10 py-1 w-3/4 bg-[#1d1d1d] rounded-md text-[#fff] font-medium">
              Submit
            </button>
          </form>
          <div className="text-center mt-5">
            or SignIN with
            <hr className="w-1/2 mx-auto" />
            <AiOutlineGoogle
              size={30}
              className="cursor-pointer mx-auto mt-2"
            />
          </div>
        </div>
      </main>
    </>
  );
}
