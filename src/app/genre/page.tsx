import { Token } from "../_util/Constants.";
import { Card } from "../_components/Card";
import { MovieType } from "../_util/Type";
import Allgenres from "../_components/Allgenres";

import response from "../_util/response";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Popular({ searchParams }: { searchParams: any }) {
  const { genreIds } = searchParams;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=1`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log("GENRE", data);
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  console.log("genre moveis", genreMovies);

  //Handle genre selection

  return (
    <div className="max-w-[1280px] m-auto flex flex-col gap-8 ">
      <p className="text-[30px] font-semibold">Search filter</p>

      <div className="flex gap-7">
        <div className="rounded-md w-[360px] h-[260px] border-none">
          <div className="flex flex-wrap gap-4">
            <Allgenres genreMovies={genreMovies} />
          </div>
        </div>
        <div className="flex flex-wrap gap-12 justify-end  ">
          {data.results?.map((movie: MovieType, index: number) => {
            return <Card key={index} movie={movie} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
