/**
 * Прокручивает страницу к элементу с указанным ID
 * @param elementId - ID элемента для прокрутки
 * @param offset - Отступ сверху в пикселях (по умолчанию 150px)
 */
export const scrollToElement = (elementId: string, offset: number = 150): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

/**
 * Прокручивает страницу к категории каталога
 * @param categoryId - ID категории для прокрутки
 */
export const scrollToCategory = (categoryId: string): void => {
  scrollToElement(categoryId, 150);
};

