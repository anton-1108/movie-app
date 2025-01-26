import { Token } from "../_util/Constants.";
import { MovieType } from "../_util/Type";
import { Card } from "./Card";

export const TopRated = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
      <h1 className="text-[24px] font-semibold">Top Rated</h1>
      <div className="flex flex-wrap  gap-5 justify-center  ">
        {data.results?.map((movie: MovieType, index: number) => {
          return <Card movie={movie} index={index} />;
        })}
      </div>
    </div>
  );
};
