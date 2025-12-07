/**
 * Утилита для скачивания файла из public папки
 * @param pathFromPublic - путь к файлу от корня public (например: '/parmaled.pdf')
 * @param downloadName - имя файла, как увидит пользователь
 */
async function downloadFileFromPublic(
  pathFromPublic: string,
  downloadName?: string
): Promise<void> {
  // В Vite файлы из public папки доступны напрямую по корневому пути
  const url = pathFromPublic;
  const fileName = downloadName || pathFromPublic.split('/').pop() || 'file';

  // Детект iOS (там атрибут download почти не работает)
  const ua = navigator.userAgent || navigator.vendor;
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);

  // iOS + Safari: лучше открыть в новой вкладке — пользователь сам сохранит PDF
  if (isIOS && isSafari) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  try {
    // Скачиваем файл как Blob — это даёт больше контроля и работает в старых браузерах
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка загрузки файла: ${response.status}`);
    }

    const blob = await response.blob();

    // Спец-кейс для старых Edge/IE (если вдруг)
    const anyNavigator: any = window.navigator;
    if (anyNavigator && typeof anyNavigator.msSaveOrOpenBlob === 'function') {
      anyNavigator.msSaveOrOpenBlob(blob, fileName);
      return;
    }

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.setAttribute('download', fileName);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Освобождаем память
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error(error);
    // На всякий случай fallback — просто открываем файл
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Утилита для скачивания каталога PDF
 */
export const downloadCatalog = async (): Promise<void> => {
  await downloadFileFromPublic('/parmaled.pdf', 'parmaled.pdf');
};
