import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/globals.css'

/**
 * Предзагрузка PDF файла в кеш браузера
 */
const preloadPDF = () => {
  const pdfPath = '/parmaled.pdf';
  
  // Загружаем через fetch для гарантированного кеширования
  // Используем GET запрос для полной загрузки в кеш
  fetch(pdfPath, {
    method: 'GET',
    cache: 'force-cache',
  })
    .then(() => {
      console.log('PDF предзагружен в кеш браузера');
    })
    .catch((error) => {
      console.warn('Не удалось предзагрузить PDF:', error);
    });
};

// Предзагружаем PDF после загрузки критичных ресурсов
// Ждем немного, чтобы не блокировать первоначальную загрузку страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Небольшая задержка, чтобы дать приоритет критичным ресурсам
    setTimeout(preloadPDF, 500);
  });
} else {
  // Страница уже загружена или загружается
  setTimeout(preloadPDF, 500);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

