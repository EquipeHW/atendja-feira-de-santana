'use client'

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

export function CarouselWithAutoplay() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/feira1.webp"
                alt="Atendja Feira de Santana"
                width={800}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
         
          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/feira5.jpg"
                alt="Atendja Feira de Santana"
                width={800}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/feira6.jpeg"
                alt="Atendja Feira de Santana"
                width={800}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/feira7.jpeg"
                alt="Atendja Feira de Santana"
                width={800}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="min-w-0 shrink-0 grow-0 basis-full">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/feira4.webp"
                alt="Atendja Feira de Santana"
                width={800}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "absolute h-8 w-8 -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white/90"
        )}
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Slide anterior</span>
      </button>
      <button
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "absolute h-8 w-8 -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white/90"
        )}
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Próximo slide</span>
      </button>
    </div>
  )
} 