import { Token } from "./Constants.";

export default async function Fetchdata(poin: string) {
  const repeat = await fetch(`https://api.themoviedb.org/3${poin}`, {
    headers: {
      Authorization: `Bearer ${Token}`,
      "Content-Type": "application/json",
    },
  });
  const repeats = repeat.json();
  return repeats;
}
