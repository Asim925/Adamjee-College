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

const principals = [
  {
    image: "/principals/Hafiz Dr. Abdulbari indhar.jpeg",
    title: "Hafiz Dr. Abdulbari Indhar (Ex-Principal)",
  },
  {
    image: "/principals/mushtaq ahmed meher.jpeg",
    title: "Prof. Mushtaq Ahmed Meher (Ex-Principal)",
  },
  { image: "/principals/current.webp", title: "Prof. Nasir Iqbal (current)" },
  {
    image: "/principals/prof mustafa kamal.jpeg",
    title: "Prof. Mustafa Kamal (Ex-Principal)",
  },
  {
    image: "/principals/prof rumina akhtar.jpeg",
    title: "Prof. Rumina Akhtar (Ex-Principal)",
  },
  {
    image: "/principals/professor qamar m asif khan.jpeg",
    title: "Prof. Kanwar M Asif Khan (Ex-Principal)",
  },
];

export function PrincipalsCarousel() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })] as any}
      opts={{ align: "start", loop: true }}
      className="w-full max-w-6xl mx-auto my-4"
    >
      <CarouselContent>
        {principals.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3 ">
            <div className="rounded-xl overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className={`text-center mt-4 text-sm font-medium  ${index === 2 ? "text-accent" : "text-primary-foreground/70"}`}
            >
              {item.title}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="max-sm:hidden" />
      <CarouselNext className="max-sm:hidden" />
    </Carousel>
  );
}
