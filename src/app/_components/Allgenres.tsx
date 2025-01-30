import { Toggle } from "@radix-ui/react-toggle";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GenreType } from "../_util/Type";
const Allgenres = ({ genreMovies }: { genreMovies: GenreType[] }) => {
  return (
    <Card className="-left-9 p-5 absolute rounded-md w-[537px] h-[260px] ">
      <h3 className="text-[24px]">Genres</h3>
      <div>See list of movies by genre</div>
      <div className="border border-[#27272A] my-2"></div>
      <div className="flex flex-wrap gap-4">
        {genreMovies?.map((genre: GenreType, index: number) => {
          return (
            <Link href={`/genre/${genre.id}`} key={genre.id}>
              <Toggle className="flex text-[12px] rounded-full border justify-center items-center border-[#27272A] py-[2px] px-[2px]">
                {genre.name} <ChevronRight className=" w-4 h-4" />
              </Toggle>
            </Link>
          );
        })}
      </div>
    </Card>
  );
};
export default Allgenres;
