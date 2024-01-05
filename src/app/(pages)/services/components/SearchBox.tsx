import { CiSearch } from "react-icons/ci";
import { TbMapSearch } from "react-icons/tb";
export default function SearchBox() {
  return (
    <div
      className="flex items-center justify-center gap-4 mt-4
     border-b border-stone-400 pb-4"
    >
      <div className="ml-4 w-10/12 flex justify-between border border-stone-400 p-2 rounded-full">
        <CiSearch className="w-6 h-6 mr-4" />
        <input
          type="text"
          placeholder="search..."
          className="w-full focus:outline-none"
        />
      </div>
      <div className="mr-4 w-2/12">
        <TbMapSearch className="w-8 h-8" />
      </div>
    </div>
  );
}
