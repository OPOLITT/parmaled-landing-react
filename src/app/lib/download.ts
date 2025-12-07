/**
 * Утилита для скачивания файла из public папки
 * @param pathFromPublic - путь к файлу от корня public (например: '/parmaled.pdf')
 */
const downloadFileFromPublic = async (
  pathFromPublic: string,
): Promise<Window | null> => {
  // Используем прямой переход для более быстрого открытия
  // Браузер может использовать предзагруженный файл из prefetch
  const link = document.createElement('a');
  link.href = pathFromPublic;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return null;
};

export const downloadCatalog = async (): Promise<Window | null> => downloadFileFromPublic('/parmaled.pdf');
