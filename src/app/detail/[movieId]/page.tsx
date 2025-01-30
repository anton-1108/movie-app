import { MovieType } from "@/app/_util/Type";
import { Token } from "../../_util/Constants.";

export default async function MovieSlide(props: {
  params: Promise<{ movieId: MovieType }>;
  //   params: { movieId },
  // }: {
  //   params: { movieId: string };
}) {
  const { movieId } = await props.params;
  const response = await fetch(
    ` https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Countent-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Countent-Type": "application/json",
      },
    }
  );
  const type = await result.json();
  console.log("demo", type);
  return (
    <div className="w-full flex-col items-center">
      <div className="flex justify-between">
        <div className="p-10">
          <p className="font-bold text-[36px]">{data?.original_title}</p>
          <p className="text-[18px]">{data?.release_date}</p>
        </div>
        <div>
          <p className="font-medium">Rating</p>
          <div className="flex gap-[4px]">
            <img
              src="/star.svg"
              alt=""
              className="w-[28px] h-[28px] mt-[10px]"
            />
            <div>
              <p className="text-[18px] font-semibold">
                {data?.vote_average.toFixed(1)}/10
              </p>
              <p className="text-[12px] text-[#71717A font-normal]">
                {data?.vote_count}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[428px] gap-[32px] justify-center">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          alt=""
          className="w-[290px]"
        />
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt=""
          className="w-[760px]"
        />
      </div>
      <div className="flex gap-[20px]">
        {data?.genres?.map((genre: MovieType, index: number) => (
          <p
            className="border-[#E4E4E7] border-2 rounded-full p-[2px]"
            key={genre.id}
          >
            {genre.name}
          </p>
        ))}
      </div>
      <div className="">
        <p className="text-[#09090B]">{data?.overview}</p>
      </div>
      <div className="gap-5 flex ">
        <p className="text-[#09090B] font-bold">Stars</p>
        {type.cast?.slice(0, 5).map((actor: MovieType, index: number) => {
          return <p key={index}>{actor.name}</p>;
        })}
      </div>
      <div className="gap-5 flex">
        <p className="text-[#09090B] font-bold">Director</p>
        {type.crew.slice(0, 1).map((director: MovieType, index: number) => {
          return <p key={index}>{director.name}</p>;
        })}
      </div>
    </div>
  );
}
