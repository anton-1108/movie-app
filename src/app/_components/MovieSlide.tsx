import * as React from "react";
import { MovieType } from "../_util/Type";
import { Token } from "../_util/Constants.";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

export async function CarouselDemo() {
  const nowPlayingResponse = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const nowPlayingData = await nowPlayingResponse.json();
  return (
    <Carousel className="w-full max-w-xs" opts={{ loop: true }}>
      <CarouselContent>
        {nowPlayingData.results.slice(0, 10).map((d: MovieType) => {
          return (
            <CarouselItem key={d.id}>
              <Card className="relative">
                <CardContent className="">
                  {/* <image
                  width={1000}
                  height={1000}
                  className="object-cover h-[620px] w-full relative"
                  src={`https://image.tmdb.org/t/p/`+ "original"+`${d.backdrop_path}`}
                  alt={{d.original_title}}
                  ></image> */}
                  <div className="absolute left-[140px] bottom-[158px] w-[302px] text-[#FAFAFA]">
                    <p className="">Now Playing:</p>
                    {d.original_title}
                    <p className="flex text-[16px] items-center gap-1">
                      <img className="size-7" src="star.svg" alt="" />
                      <span className="text-[18px] font-bold flex">
                        {d.vote_average.toFixed(1)}/10
                      </span>
                    </p>
                    <p className="text-wrap">{d.overview}</p>
                    <Button variant={"secondary"}>
                      <PlayIcon />
                      Watch Trailer
                    </Button>
                  </div>
                </CardContent>
                <CarouselPrevious className="absolute top-1/2 translate-y-1/2 left-11" />
                <CarouselItem className="absolute top-1/2 translate-y-1/2 right-11" />
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
