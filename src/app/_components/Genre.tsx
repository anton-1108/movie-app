import { Button } from "@/components/ui/button";
import response from "../_util/response";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GenreType } from "../_util/Type";
import { Card } from "./Card";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";
import Allgenres from "./Allgenres";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  console.log(genreMovies);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {" "}
          <ChevronDown />
          Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Allgenres genreMovies={genreMovies} />
      </PopoverContent>
    </Popover>
  );
};
export default Genre;
