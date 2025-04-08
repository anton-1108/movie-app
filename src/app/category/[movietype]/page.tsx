import { Card } from "@/app/_components/Card";
import { Token } from "@/app/_util/Constants.";
import { MovieType } from "@/app/_util/Type";

const MoviePage = async (props: {
  params: Promise<{ movietype: string; movieid: string }>;
}) => {
  const params = await props.params;
  const movietype = await params.movietype;
  //   /movie/${movietype}?language=en-US&page=1
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movietype}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  console.log(data);
  return (
    <div className="flex flex-col w-[1280px] m-auto  ">
      <div className="flex flex-wrap  gap-5 justify-center  ">
        {data.results?.map((movie: MovieType, index: number) => {
          return <Card movie={movie} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};
export default MoviePage;
