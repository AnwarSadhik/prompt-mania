import Home from "@/pages/Home";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-full bg-white">
      {/* <div className="flex flex-wrap"> */}
      <Home />
      <div className="flex justify-center items-center w-full h-screen">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/022/135/034/original/ai-image-generator-line-concept-spot-illustration-editable-2d-flat-colour-cartoon-character-on-white-for-web-design-artificial-intelligence-art-creative-lineart-idea-for-website-mobile-blog-vector.jpg"
          alt="hero"
          width={550}
          height={550}
          className="hidden md:flex"
          style={{
            objectFit: "contain",
          }}
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam asperiores accusantium quas maiores molestias dicta optio mollitia recusandae ipsam. Reprehenderit illo, fugiat natus illum odit atque facilis rerum ipsam.
        </div>

      </div>
    </main>
  );
}
