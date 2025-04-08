import { Button } from "@/components/ui/button";
import response from "../_util/response";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

import Allgenres from "./Allgenres";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  console.log(genreMovies);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ChevronDown />
          Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[577px] p-[20px]">
        <Allgenres genreMovies={genreMovies} />
      </PopoverContent>
    </Popover>
  );
};
export default Genre;
