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

const staff = [
  { image: "/staff/Teaching Staff.webp", title: "Teaching Staff" },
  { image: "/staff/Non-Teaching Staff.webp", title: "Non-Teaching Staff" },
  { image: "/staff/Staff Room Faculty.webp", title: "Staff Room Faculty" },
  {
    image: "/staff/Physics Department Faculty.webp",
    title: "Physics Department Faculty",
  },
  {
    image: "/staff/Mathematics Department Faculty.webp",
    title: "Mathematics Department Faculty",
  },
  {
    image: "/staff/Chemistry Department Faculty.webp",
    title: "Chemistry Department Faculty",
  },
  {
    image: "/staff/Urdu Department Faculty.webp",
    title: "Urdu Department Faculty",
  },
  {
    image: "/staff/Bio-Chemsitry Department Faculty.webp",
    title: "Bio-Chemsitry Department Faculty",
  },
  {
    image: "/staff/Botany Department Faculty.webp",
    title: "Botany Department Faculty",
  },
  {
    image: "/staff/English Department Faculty.webp",
    title: "English Department Faculty",
  },
  {
    image: "/staff/Computer Science Department Faculty.webp",
    title: "Computer Science Department Faculty",
  },
  {
    image: "/staff/Pakistan Studies Department Faculty.webp",
    title: "Pakistan Studies Department Faculty",
  },
  {
    image: "/staff/Islamic Studies Department Faculty.webp",
    title: "Islamic Studies Department Faculty",
  },
  {
    image: "/staff/Sindhi Department Faculty.webp",
    title: "Sindhi Department Faculty",
  },
  {
    image: "/staff/Zoology Department Faculty.webp",
    title: "Zoology Department Faculty",
  },
  { image: "/staff/Admin Staff.webp", title: "Admin Staff" },
  { image: "/staff/Library Staff.webp", title: "Library Staff" },
];

export function StaffCarousel() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })] as any}
      opts={{ align: "start", loop: true }}
      className="w-full max-w-6xl mx-auto my-4"
    >
      <CarouselContent className="flex items-center">
        {staff.map((item, index) => (
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
            <p className="text-center text-primary-foreground/70 mt-4 text-sm font-medium">
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
