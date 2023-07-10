import Home from "@/pages/Home";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-full bg-white">
      <div className="flex">
        <Home />
        <Image
          src="https://static.vecteezy.com/system/resources/previews/022/135/034/original/ai-image-generator-line-concept-spot-illustration-editable-2d-flat-colour-cartoon-character-on-white-for-web-design-artificial-intelligence-art-creative-lineart-idea-for-website-mobile-blog-vector.jpg"
          alt="hero"
          width={800}
          height={850}
          quality={100}
          className="hidden md:flex"
          style={{
            objectFit: "contain"
          }}
        />
      </div>
    </main>
  );
}
