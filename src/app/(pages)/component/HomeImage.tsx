import Image from "next/image";

export default function HomeImage() {
  return (
    <div data-testid="homeImageComponent" className="home-screen relative m-4">
      <Image
        src={"/home-screen.png"}
        alt="Home Screen Image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
