import { MovieType } from "../_util/Type";
import Link from "next/link";

export const MoreLike = async ({
  result,
  index,
}: {
  result: MovieType;
  index: number;
}) => {
  return (
    <Link href={`/detail/${result.id}`} key={index}>
      <img
        className="h-[320px] w-[200px] rounded-t-lg "
        src={`https://image.tmdb.org/t/p/original/${result?.poster_path}`}
        alt=""
      />

      <div className="grid bg-secondary h-[95px] rounded-b-lg ">
        <div className="flex gap-2 pl-2">
          <img src="/star.svg" alt="" className="w-[16px] h-[16px] mt-1" />
          <p>{result?.vote_average.toFixed(1)}/10</p>
        </div>
        <div className="h-[56px] w-[200px]">
          <p className="truncate text-ellipsis  pl-2 inter  ">
            {result?.original_title}
          </p>
        </div>
      </div>
    </Link>
  );
};
