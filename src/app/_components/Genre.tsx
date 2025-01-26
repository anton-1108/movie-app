import { Button } from "@/components/ui/button";
import response from "../_util/response";
import { GenreType } from "../_util/Type";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Genre</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Card className="-left-9 p-5 absolute rounded-md w-[537px] h-[260px]">
          <h1 className="text-[24px]">Genres</h1>
          <div>See lists of movies by genre</div>
          <div className="border border-[#27272A] my-2"></div>
          <div className="flex flex-wrap gap-4">
            {genreMovies?.map((genre: GenreType, index: number) => {
              return (
                <button
                  key={index}
                  className="flex text-[12px] rounded-full border justify-center items-center border-[#27272A] py-[2px] px-2"
                >
                  {genre.name} <ChevronRight className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
export default Genre;
