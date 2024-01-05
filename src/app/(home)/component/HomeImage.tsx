"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeImage() {
  const router = useRouter();
  return (
    <div
      data-testid="homeImageComponent"
      className="home-screen relative w-full"
    >
      <Image
        onClick={() => {
          router.push("/today");
        }}
        src={"/home-screen.png"}
        alt="Home Screen Image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
