import Image from "next/image";

export function AppQR() {
  return (
    <div data-testid="appQR" className="flex gap-4 p-4 bg-stone-100">
      <div className=" w-1/2 grow">
        <h1 className="text-2xl font-bold">Download the Island App to explore the Island</h1>
        <div>
          <button className="mt-4 w-24 font-bold  py-2 bg-white border-2 text-center border-black rounded-full">
            ENTER
          </button>
        </div>
      </div>
      <div data-testid="qR" className="w-1/2 relative">
        <Image alt="get the app" src={"/qrcode.jpeg"} fill />
      </div>
    </div>
  );
}
