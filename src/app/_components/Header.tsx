import { ChevronDown, Film } from "lucide-react";
import { ModeToggle } from "../../components/ui/theme-toggle";
import Genre from "./Genre";

export default async function Header() {
  return (
    <div className="flex items-center justify-around sticky top-0 bg-secondary">
      <div className="flex  ">
        <img src="./film.svg" alt="" />
        <p className="text-[#4338CA] italic font-bold">Movie Z</p>
      </div>
      <div className="flex">
        <Genre />

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
