import { ChevronDown, Film } from "lucide-react";
import { ModeToggle } from "../../components/ui/theme-toggle";

export default async function Header() {
  return (
    <div className="flex items-center justify-center sticky top-0 bg-secondary">
      <div className="flex  ">
        <img src="./film.svg" alt="" />
        <p className="text-[#4338CA] italic font-bold">Movie Z</p>
      </div>
      <div className="flex">
        <button className="flex items-center px-4 py-2 broder border-[#27272A] border-solid rounded-md gap-2">
          <span className="text-14px font-medium">Genre</span>
          <ChevronDown />
        </button>
        <div className="">
          <input
            type="text"
            className=" px-3 py-2 bg-transparent text-[#A1A1A1] placeholder:text-[14px] rounded-lg "
            placeholder="Search"
          />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}
