/**
 * Утилита для скачивания каталога PDF
 * Поддерживает различные браузеры и устройства
 */
export const downloadCatalog = async (): Promise<void> => {
  const CATALOG_PATH = "/parmaled.pdf";
  const FILENAME = "parmaled.pdf";
  
  // Определяем тип устройства и браузер
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Для iOS и Safari на мобильных - используем прямой переход
  // так как они блокируют программное скачивание
  if (isIOS || (isSafari && isMobile)) {
    window.open(CATALOG_PATH, "_blank");
    return;
  }
  
  try {
    // Проверяем поддержку fetch API
    if (!window.fetch) {
      throw new Error("Fetch API не поддерживается");
    }
    
    const response = await fetch(CATALOG_PATH, {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Проверяем размер файла (если доступен)
    const contentLength = response.headers.get('content-length');
    const fileSize = contentLength ? parseInt(contentLength, 10) : null;
    
    // Для очень больших файлов (>100MB) на мобильных устройствах
    // используем прямой переход вместо blob
    if (fileSize && fileSize > 100 * 1024 * 1024 && isMobile) {
      window.open(CATALOG_PATH, "_blank");
      return;
    }
    
    // Загружаем файл как blob
    const blob = await response.blob();
    
    // Проверяем поддержку createObjectURL
    if (!window.URL || !window.URL.createObjectURL) {
      throw new Error("URL.createObjectURL не поддерживается");
    }
    
    const url = window.URL.createObjectURL(blob);
    
    // Создаем ссылку для скачивания
    const link = document.createElement("a");
    link.href = url;
    link.download = FILENAME;
    
    // Устанавливаем атрибуты для лучшей совместимости
    link.style.display = "none";
    link.setAttribute("download", FILENAME);
    
    // Добавляем в DOM (некоторые браузеры требуют этого)
    document.body.appendChild(link);
    
    // Программный клик
    link.click();
    
    // Очистка с небольшой задержкой для обеспечения скачивания
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
    
  } catch (error) {
    console.error("Ошибка при скачивании каталога:", error);
    
    // Fallback 1: Прямой переход (работает везде)
    try {
      window.open(CATALOG_PATH, "_blank");
    } catch (fallbackError) {
      console.error("Ошибка при открытии файла:", fallbackError);
      
      // Fallback 2: Прямое перенаправление
      try {
        window.location.href = CATALOG_PATH;
      } catch (finalError) {
        console.error("Критическая ошибка при скачивании:", finalError);
        alert("Не удалось скачать файл. Пожалуйста, попробуйте открыть ссылку вручную.");
      }
    }
  }
};

