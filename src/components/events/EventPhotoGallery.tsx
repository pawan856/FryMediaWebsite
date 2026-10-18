"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { EventPhoto } from "@/data/events";

interface EventPhotoGalleryProps {
  photos: EventPhoto[];
  eventName: string;
}

export function EventPhotoGallery({
  photos,
  eventName,
}: EventPhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const isOpen = activeIndex !== null;
  const currentPhoto = activeIndex !== null ? photos[activeIndex] : null;

  const openLightbox = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    // Restore focus to triggering thumbnail button
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  }, []);

  const goToNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => ((prev ?? 0) + 1) % photos.length);
  }, [activeIndex, photos.length]);

  const goToPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      ((prev ?? 0) - 1 + photos.length) % photos.length
    );
  }, [activeIndex, photos.length]);

  // Lock body scroll and set focus when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox, goToNext, goToPrev]);

  // Mobile Touch / Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Minimum swipe threshold 45px & horizontal movement dominates
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <>
      {/* Responsive Gallery Grid — Equal Treatment for All Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {photos.map((photo, index) => {
          const isAboveTheFold = index < 3;
          return (
            <figure
              key={photo.id}
              className="group relative flex flex-col rounded-sm border border-border bg-background-elevated/70 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:bg-background-surface hover:shadow-card-hover"
            >
              <button
                type="button"
                onClick={(e) => openLightbox(index, e)}
                className="relative aspect-[4/3] w-full overflow-hidden bg-background-surface text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-haspopup="dialog"
                aria-label={`Open photo ${index + 1} of ${photos.length}: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={isAboveTheFold}
                  loading={isAboveTheFold ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-background/90 text-foreground text-xs font-mono shadow-md backdrop-blur-sm">
                    <Maximize2 className="h-3.5 w-3.5 text-accent" />
                    <span>Expand</span>
                  </span>
                </div>
              </button>

              {/* Caption & Index Footer */}
              <figcaption className="flex items-center justify-between border-t border-border p-3.5 md:p-4 text-xs font-mono text-foreground-subtle bg-background-elevated/40">
                <span className="truncate pr-3 text-foreground-muted">
                  {photo.caption || photo.alt}
                </span>
                <span className="shrink-0 text-[11px] text-foreground-dim">
                  {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {isOpen && currentPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${eventName} photograph viewer`}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md text-white select-none animate-fade-in"
          onClick={(e) => {
            // Close if backdrop clicked directly
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Event Name, Counter, and Close Button */}
          <header className="relative z-10 flex items-center justify-between px-4 py-4 md:px-8 border-b border-white/10 bg-black/40">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                {eventName}
              </span>
              <span
                aria-live="polite"
                className="text-xs font-mono text-accent/90"
              >
                Photo {activeIndex + 1} of {photos.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] font-mono text-white/40">
                [Esc to close]
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                className="inline-flex items-center justify-center h-10 w-10 rounded-sm border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Main Stage: Prev Button, Image Display, Next Button */}
          <div
            className="relative flex flex-1 items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 sm:left-4 md:left-8 z-10 inline-flex items-center justify-center h-11 w-11 md:h-12 md:w-12 rounded-sm border border-white/20 bg-black/60 text-white hover:bg-white/20 hover:border-white/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Previous photo (Left arrow key)"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Active Photograph Display */}
            <div
              className="relative flex max-h-[68vh] md:max-h-[74vh] max-w-[88vw] md:max-w-[82vw] items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                width={currentPhoto.width}
                height={currentPhoto.height}
                priority
                sizes="(max-width: 1024px) 95vw, 1200px"
                className="max-h-[68vh] md:max-h-[74vh] w-auto h-auto max-w-full object-contain rounded-sm shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-4 md:right-8 z-10 inline-flex items-center justify-center h-11 w-11 md:h-12 md:w-12 rounded-sm border border-white/20 bg-black/60 text-white hover:bg-white/20 hover:border-white/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Next photo (Right arrow key)"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption and Thumbnail Navigation Strip */}
          <footer className="relative z-10 flex flex-col items-center gap-3 border-t border-white/10 bg-black/60 px-4 py-4 md:px-8">
            {/* Caption & Alt Text */}
            <p className="text-center text-xs md:text-sm text-white/80 max-w-2xl px-2 font-sans font-normal leading-relaxed">
              {currentPhoto.caption || currentPhoto.alt}
            </p>

            {/* Thumbnail Strip */}
            <div
              className="flex items-center gap-2 overflow-x-auto py-1 max-w-full px-2"
              role="tablist"
              aria-label="Photo thumbnails"
            >
              {photos.map((photo, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={`thumb-${photo.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-11 w-11 md:h-13 md:w-13 shrink-0 rounded-sm overflow-hidden border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isSelected
                        ? "border-accent ring-2 ring-accent/60 opacity-100 scale-105"
                        : "border-white/20 opacity-50 hover:opacity-90"
                    }`}
                    aria-label={`View photo ${index + 1}: ${photo.alt}`}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
