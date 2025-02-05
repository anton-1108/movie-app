import { ChevronDown, Film } from "lucide-react";
import { ModeToggle } from "../../components/ui/theme-toggle";
import Genre from "./Genre";
import Link from "next/link";
import SearchInput from "./Search";

export default async function Header() {
  return (
    <div className="flex items-center z-10 justify-around sticky top-0 bg-secondary">
      <Link href="/">
        <div className="flex  ">
          <img src="/film.svg" alt="" />{" "}
          <p className="text-[#4338CA] italic font-bold">Movie Z</p>
        </div>
      </Link>
      <div className="flex">
        <Genre />

        <div className="">
          <SearchInput />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}
