import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { CarouselDemo } from "./_components/MovieSlide";
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
      <Footer />
    </div>
  );
}
