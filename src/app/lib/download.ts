/**
 * Проверяет, является ли устройство мобильным
 */
const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Утилита для скачивания файла из public папки
 * @param pathFromPublic - путь к файлу от корня public (например: '/parmaled.pdf')
 * @param downloadName - имя файла, как увидит пользователь
 */
const downloadFileFromPublic = async (
  pathFromPublic: string,
  downloadName: string
): Promise<void> => {
  const fileUrl = pathFromPublic;

  if (isMobileDevice()) {
    // На мобильных устройствах открываем файл в новом окне
    window.open(fileUrl, '_blank');
  } else {
    // На десктопе скачиваем файл
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Ошибка при скачивании файла:', error);
      // В случае ошибки пробуем открыть в новом окне
      window.open(fileUrl, '_blank');
    }
  }
};

/**
 * Утилита для скачивания каталога PDF
 */
export const downloadCatalog = async (): Promise<void> => {
  await downloadFileFromPublic('/parmaled.pdf', 'parmaled.pdf');
};
