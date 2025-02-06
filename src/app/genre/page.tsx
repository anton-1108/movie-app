import { Token } from "../_util/Constants.";
import { Card } from "../_components/Card";
import { MovieType } from "../_util/Type";
import Allgenres from "../_components/Allgenres";

import response from "../_util/response";

export default async function Popular({ searchParams }: { searchParams: any }) {
  const { genreIds, page } = searchParams;

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
  return (
    <div>
      <p className="text-[30px]">Search filter</p>
      <div className="flex gap-5">
        <div className="">
          <Allgenres genreMovies={genreMovies} />
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
