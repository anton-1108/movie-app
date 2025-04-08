import { CarouselDemo } from "./_components/MovieSlide";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { Upcoming } from "./_components/Upcoming";

export default async function Home() {
  return (
    <div>
      <CarouselDemo />
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
}
