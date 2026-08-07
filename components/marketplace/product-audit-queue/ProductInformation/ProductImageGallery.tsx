"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Props {
  image: string;
  groupImages: string[];
}

export default function ProductImageGallery({
  image,
  groupImages,
}: Props) {
  const images = useMemo(() => {
    const allImages = [image, ...(groupImages || [])];

    return [...new Set(allImages)];
  }, [image, groupImages]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  const nextImage = () => {
    if (!images.length) return;

    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!images.length) return;

    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  console.log(images, 'imagesss')

  return (
    <div className="w-full lg:w-[40%]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-gray-100">
        <Image
          src={images[current]}
          alt="Product"
          fill
          className="object-fit"
        />

        {images.length > 1 && (
          <>
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
          </>
        )}
      </div>

      {images?.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images?.map((img: string, index: number) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition ${current === index
                ? "border-brand-primary"
                : "border-transparent"
                }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}