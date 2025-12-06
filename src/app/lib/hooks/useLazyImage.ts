import { useState, useEffect, useRef } from "react";

/**
 * Хук для lazy loading изображений через Intersection Observer
 * @param src - URL изображения
 * @param options - Опции для Intersection Observer
 * @returns объект с imageSrc (URL изображения) и imgRef (ref для элемента)
 */
export const useLazyImage = (
  src: string,
  options?: IntersectionObserverInit
): { imageSrc: string; imgRef: React.RefObject<HTMLDivElement> } => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgRef.current || isLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Загружаем изображение
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              // В случае ошибки все равно устанавливаем src
              setImageSrc(src);
              setIsLoaded(true);
            };
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Начинаем загрузку за 50px до появления в viewport
        threshold: 0.01,
        ...options,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src, isLoaded, options]);

  return { imageSrc, imgRef };
};

