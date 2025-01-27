import { ArrowRight } from "lucide-react";
import { Token } from "../_util/Constants.";
import { MovieType } from "../_util/Type";
import { Card } from "./Card";
import Link from "next/link";
export const Upcoming = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return (
    <div className="flex flex-col w-[1280px] m-auto  ">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-semibold">Upcoming</h1>
        <Link href="/category/upcoming">
          See more <ArrowRight />
        </Link>
      </div>
      <div className="flex flex-wrap  gap-5 justify-center  ">
        {data.results?.map((movie: MovieType, index: number) => {
          return <Card movie={movie} index={index} />;
        })}
      </div>
    </div>
  );
};
