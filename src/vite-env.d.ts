/// <reference types="vite/client" />

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}

// Декларации для vite-imagetools
declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=avif' {
  const src: string;
  export default src;
}

declare module '*?w=*' {
  const src: string;
  export default src;
}

