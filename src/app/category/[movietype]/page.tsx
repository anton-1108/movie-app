import { Token } from "@/app/_util/Constants.";
const MoviePage = async ({
  params: { movietype },
}: {
  params: { movietype: string };
}) => {
  // /movie/${movietype}?language=en-US&page=1
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
  return <div>{movietype}</div>;
};
export default MoviePage;
