"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PhotoCards() {
  const images = [
    "/bigsmile-dance.jpeg",
    "/mom-son-dance.jpeg",
    "/boys-smile.jpeg",
    "/dance-cover.jpeg",
    "/eating-cover.jpeg",
    "/smilinggroup.jpeg",
    "/table-dinner-2.jpeg",
    "/wide-dinner.jpeg",
    "/wide-group.jpeg",
    "/wide-tabledinner.jpeg",
    "/wide-walking.jpeg",
  ];

  return (
    <div className="flex w-[68%] h-[45vh] mb-16 ">
      <Carousel>
        <CarouselContent className=" p-0 -ml-0">
          {images.map((img, index) => (
            <CarouselItem className="basis-3/4" key={index}>
              <Image src={img} alt="photo" width={700} height={454} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
