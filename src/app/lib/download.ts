/**
 * Утилита для скачивания файла из public папки
 * @param pathFromPublic - путь к файлу от корня public (например: '/parmaled.pdf')
 */
const downloadFileFromPublic = async (
  pathFromPublic: string,
): Promise<Window | null> => window.open(pathFromPublic, '_blank');

export const downloadCatalog = async (): Promise<Window | null> => downloadFileFromPublic('/parmaled.pdf');
