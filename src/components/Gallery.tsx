import "photoswipe/style.css";

import { useGallery } from "@/hooks/useGallery";
import "@/components/styles/Gallery.css";

export default function Gallery() {
  const { first, photos } = useGallery();

  return (
    <div class="max-w-8xl mx-auto md:py-5 px-4">
      <masonry-layout
        gap="25"
        maxcolwidth="500"
        class="lg:mx-auto mx-4 mb-20 mt-8"
        id="gallery"
      >
        {photos.map(({ height, width }, i) => (
          <a
            class="group rounded-xl hover:scale-105 hover:contrast-[110%] transition-all relative"
            href={`/archivo-page/gallery/img-${i + 1}.webp`}
            target="_blank"
            data-cropped="true"
            data-pswp-width={width}
            data-pswp-height={height}
            ref={!first.current ? first : undefined}
          >
            <img
              class="rounded-xl object-cover w-full h-auto"
              loading="lazy"
              src={`/archivo-page/gallery/thumbnails/img-${i + 1}.webp`}
              alt="Fotografía de los premios ESLAND"
            />
            <img
              class="blur-md opacity-0 group-hover:opacity-100 absolute inset-0 transition contrast-150 -z-10 object-cover"
              loading="lazy"
              src={`/archivo-page/gallery/thumbnails/img-${i + 1}.webp`}
              alt="Imagen con efecto blur para hacer de sombra de una fotografía de los premios ESLAND"
            />
          </a>
        ))}
      </masonry-layout>
    </div>
  );
}
