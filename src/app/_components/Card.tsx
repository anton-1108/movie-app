import { Token } from "../_util/Constants.";
import { MovieType } from "../_util/Type";

export const Card = async ({
  movie,
  index,
}: {
  movie: MovieType;
  index: number;
}) => {
  return (
    <div key={index}>
      <div className="">
        <img
          className="h-[340x] w-[230px] rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </div>
      <div className=" flex gap-2 bg-secondary rounded-b-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="none"
        >
          <path
            fill="#FDE047"
            stroke="#FDE047"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8 1.333 2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.847l-4.12 2.166.787-4.586L1.333 6.18l4.607-.673L8 1.333Z"
          />
        </svg>
        <div className="h-[79px] w-[200px]">
          <p>{movie?.vote_average.toFixed(1)}/10</p>
          <p className="truncate text-ellipsis ">{movie?.original_title}</p>
        </div>
      </div>
    </div>
  );
};
