"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const committee = [
  {
    image: "/committee/Character Builiding Society (CBS).webp",
    title: "Character Builiding Society (CBS)",
  },
  {
    image: "/committee/Discipline Committee.webp",
    title: "Discipline Committee",
  },
  {
    image: "/committee/Building Maintenance Committee.webp",
    title: "Building Maintenance Committee",
  },
  { image: "/committee/Magazine Committee.webp", title: "Magazine Committee" },
  {
    image: "/committee/Sports Society staff.webp",
    title: "Sports Society staff",
  },
  { image: "/committee/STEAM Club Members.webp", title: "STEAM Club Members" },
  { image: "/committee/Admission Cell.webp", title: "Admission Cell" },
  { image: "/committee/Examination Cell.webp", title: "Examination Cell" },
];

export function CommitteeCarousel() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })] as any}
      opts={{ align: "start", loop: true }}
      className="w-full max-w-6xl mx-auto my-4"
    >
      <CarouselContent className="flex items-center">
        {committee.map((item, index) => (
          <CarouselItem key={index} className="sm:basis-1/2">
            <div className="rounded-xl overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center mt-4 text-sm font-medium">{item.title}</p>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="max-sm:hidden" />
      <CarouselNext className="max-sm:hidden" />
    </Carousel>
  );
}
