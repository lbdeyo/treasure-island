"use client";

import Image from "next/image";
import { useState } from "react";
import type { ShopifyImage } from "@/lib/shopify";

type ProductImageGalleryProps = {
  images: ShopifyImage[];
  productTitle: string;
};

export default function ProductImageGallery({
  images,
  productTitle,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="w-full">
      <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 aspect-[2/3] bg-black/5 shadow-lg border border-black/10">
        <Image
          key={activeImage.id}
          src={activeImage.url}
          alt={activeImage.altText || productTitle}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 90vw, 320px"
          priority={activeIndex === 0}
        />
      </div>

      {images.length > 1 && (
        <ul className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start list-none p-0 m-0">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={image.id}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View image ${index + 1} of ${images.length}`}
                  aria-pressed={isActive}
                  className={`relative block h-16 w-12 overflow-hidden border-2 transition-colors ${
                    isActive
                      ? "border-black"
                      : "border-black/20 hover:border-black/60"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.altText || `${productTitle} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
