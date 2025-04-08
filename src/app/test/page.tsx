import { ArrowRight } from "lucide-react";
import { Token } from "../_util/Constants.";
import { MovieType } from "../_util/Type";
import { Card } from "../_components/Card";
import Link from "next/link";
const Upcoming = async () => {
  const response = await fetch("http://localhost:4000/");
  const data = await response.json();
  console.log("aaaaa", data);
  return (
    <div className="flex flex-col w-[1280px] m-auto  ">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-semibold">Upcoming</h1>
        <Link href="/category/upcoming" className="flex">
          See more <ArrowRight />
        </Link>
      </div>
      <div className="flex flex-wrap  gap-5 justify-center  ">
        {data?.map((movie: MovieType, index: number) => {
          return <Card movie={movie} index={index} />;
        })}
      </div>
    </div>
  );
};
export default Upcoming;
