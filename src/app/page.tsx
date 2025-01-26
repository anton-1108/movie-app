import Header from "./_components/Header";
import { CarouselDemo } from "./_components/Movieslide";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { Upcoming } from "./_components/Upcoming";

export default async function Home() {
  return (
    <div>
      <Header />

      <CarouselDemo />
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
}
