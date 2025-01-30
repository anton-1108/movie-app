import { Token } from "./Constants.";

export default async function response(endpoints: string) {
  const response = await fetch(`https://api.themoviedb.org/3${endpoints}`, {
    headers: {
      Authorization: `Bearer ${Token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
