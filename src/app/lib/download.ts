/**
 * Утилита для скачивания каталога PDF
 */
export const downloadCatalog = async (): Promise<void> => {
  const CATALOG_PATH = "/parmaled.pdf";
  
  try {
    const response = await fetch(CATALOG_PATH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "parmaled.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Ошибка при скачивании каталога:", error);
    // Fallback: открываем файл в новой вкладке
    window.open(CATALOG_PATH, "_blank");
  }
};

