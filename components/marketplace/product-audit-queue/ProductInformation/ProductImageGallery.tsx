"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Props {
  images: string[];
}

export default function ProductImageGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full lg:w-[40%]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-gray-100">
        <Image
          src={images[current]}
          alt="Product"
          fill
          className="object-cover"
        />

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition hover:bg-gray-100"
        >
          <IoChevronBack size={20} className="text-gray-700" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition hover:bg-gray-100"
        >
          <IoChevronForward size={20} className="text-gray-700" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition

            ${current === index ? "border-brand-primary" : "border-transparent"}`}
          >
            <Image src={image} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
