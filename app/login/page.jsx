export default function Loginpage() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-white text-[#101010]">
      <div className="w-[400px] h-[484px] border py-11 px-4 rounded-xl">
        <form action="" className="flex justify-between items-center flex-col gap-y-6">
          <div className="flex flex-col">
            <label htmlFor="name">name</label>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              className="input input-bordered w-full max-w-xl text-[#dfdfdf] bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="prompt">Prompt</label>
            <input
              type="text"
              name="prompt"
              placeholder="Docker-101"
              className="input input-bordered w-full max-w-xl text-[#dfdfdf] bg-transparent"
            />
          </div>
          <div className="mt-4">
            <select className="select select-bordered text-[#dfdfdf] py-1">
              <option disabled selected>
                Pick category
              </option>
              <option className="text-inherit">Art</option>
              <option className="text-inherit">Coding</option>
              <option className="text-inherit">Technology</option>
            </select>
          </div>
          <button className="btn btn-wide text-[#dfdfdf]">Submit</button>
        </form>
      </div>
    </main>
  );
}
