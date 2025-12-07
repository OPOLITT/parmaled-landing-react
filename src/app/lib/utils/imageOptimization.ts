/**
 * Утилиты для оптимизации изображений
 */

/**
 * Получает оптимизированный путь к изображению
 * Примечание: vite-imagetools работает только с импортированными изображениями.
 * Для изображений из public папки используется lazy loading и современные форматы через браузер.
 * 
 * @param src - исходный путь к изображению
 * @param options - опции оптимизации
 * @returns оптимизированный путь
 */
export const getOptimizedImageSrc = (
  src: string,
  options?: {
    format?: 'webp' | 'avif' | 'jpg' | 'png';
    quality?: number;
    width?: number;
    height?: number;
  }
): string => {
  // Для изображений из public папки (начинается с /)
  // В продакшене можно использовать CDN или серверную оптимизацию
  // Здесь возвращаем оригинальный путь, оптимизация происходит через lazy loading
  if (src.startsWith('/')) {
    // В будущем можно добавить параметры для CDN или серверной оптимизации
    // Например: return `/api/image?src=${encodeURIComponent(src)}&format=${options?.format || 'webp'}`;
    return src;
  }
  
  // Для импортированных изображений можно использовать параметры Vite
  if (options) {
    const params = new URLSearchParams();
    
    if (options.format) {
      params.set('format', options.format);
    }
    
    if (options.quality) {
      params.set('quality', options.quality.toString());
    }
    
    if (options.width) {
      params.set('w', options.width.toString());
    }
    
    if (options.height) {
      params.set('h', options.height.toString());
    }
    
    if (params.toString()) {
      return `${src}?${params.toString()}`;
    }
  }
  
  return src;
};

/**
 * Получает набор изображений для responsive loading
 * @param src - исходный путь к изображению
 * @param sizes - размеры для разных breakpoints
 * @returns объект с srcSet для разных размеров
 */
export const getResponsiveImageSrcSet = (
  src: string,
  sizes: { width: number; breakpoint?: string }[]
): string => {
  return sizes
    .map(({ width, breakpoint }) => {
      const optimizedSrc = getOptimizedImageSrc(src, {
        format: 'webp',
        quality: 80,
        width,
      });
      return breakpoint 
        ? `${optimizedSrc} ${width}w` 
        : `${optimizedSrc} ${width}w`;
    })
    .join(', ');
};

/**
 * Проверяет поддержку WebP в браузере
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Получает оптимальный формат изображения для текущего браузера
 */
export const getOptimalImageFormat = async (): Promise<'webp' | 'avif' | 'jpg'> => {
  // Проверяем поддержку AVIF
  const avifSupported = await new Promise<boolean>((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2);
    };
    avif.src =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });

  if (avifSupported) return 'avif';

  // Проверяем поддержку WebP
  const webpSupported = await supportsWebP();
  if (webpSupported) return 'webp';

  return 'jpg';
};

