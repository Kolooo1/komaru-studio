/**
 * Система анимированных уведомлений
 * Заменяет стандартные alert на стилизованные уведомления с анимацией
 */

// Создаем контейнер для уведомлений при загрузке страницы и проверяем сохраненные уведомления
document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
    
    // Проверяем, есть ли сохраненные уведомления
    checkStoredNotifications();
});

// Переопределяем стандартный alert
window.originalAlert = window.alert;
window.alert = function(message) {
    showNotification(message, 'info');
};

/**
 * Проверяет наличие сохраненных уведомлений и отображает их
 */
function checkStoredNotifications() {
    const storedNotification = localStorage.getItem('pendingNotification');
    if (storedNotification) {
        try {
            const notificationData = JSON.parse(storedNotification);
            // Показываем сохраненное уведомление
            showNotification(notificationData.message, notificationData.type);
            // Удаляем из хранилища
            localStorage.removeItem('pendingNotification');
        } catch (e) {
            console.error('Ошибка при чтении сохраненного уведомления:', e);
            localStorage.removeItem('pendingNotification');
        }
    }
}

/**
 * Сохраняет уведомление для отображения после перезагрузки страницы
 * @param {string} message - Текст уведомления
 * @param {string} type - Тип уведомления (info, success, error)
 */
function storeNotification(message, type = 'info') {
    const notificationData = {
        message: message,
        type: type,
        timestamp: Date.now()
    };
    localStorage.setItem('pendingNotification', JSON.stringify(notificationData));
}

/**
 * Показывает уведомление с перенаправлением на другую страницу
 * @param {string} message - Текст уведомления
 * @param {string} type - Тип уведомления (info, success, error)
 * @param {string} redirectUrl - URL для перенаправления
 */
function showNotificationThenRedirect(message, type, redirectUrl) {
    // Сохраняем уведомление перед перенаправлением
    storeNotification(message, type);
    // Перенаправляем на указанную страницу
    window.location.href = redirectUrl;
}

/**
 * Показывает уведомление
 * @param {string} message - Текст уведомления
 * @param {string} type - Тип уведомления (info, success, error)
 * @param {number} duration - Длительность показа в миллисекундах (по умолчанию 7000)
 */
function showNotification(message, type = 'info', duration = 7000) {
    // Получаем или создаем контейнер для уведомлений
    let container = document.querySelector('.notification-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Создаем контент уведомления
    const content = document.createElement('div');
    content.className = 'notification-content';
    content.textContent = message;
    
    // Создаем кнопку закрытия
    const closeBtn = document.createElement('button');
    closeBtn.className = 'notification-close';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', function() {
        closeNotification(notification);
    });
    
    // Собираем уведомление
    notification.appendChild(content);
    notification.appendChild(closeBtn);
    
    // Добавляем в контейнер
    container.appendChild(notification);
    
    // Автоматическое закрытие через указанное время
    if (duration > 0) {
        setTimeout(function() {
            closeNotification(notification);
        }, duration);
    }
    
    return notification;
}

/**
 * Закрывает уведомление с анимацией
 * @param {HTMLElement} notification - Элемент уведомления
 */
function closeNotification(notification) {
    // Если уведомление уже закрывается, не делаем ничего
    if (notification.classList.contains('closing')) return;
    
    // Отмечаем, что уведомление закрывается
    notification.classList.add('closing');
    
    // Добавляем анимацию исчезновения
    notification.style.animation = 'fadeOut 0.3s ease forwards';
    
    // Удаляем элемент после завершения анимации
    setTimeout(function() {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

/**
 * Показывает успешное уведомление
 * @param {string} message - Текст уведомления
 * @param {number} duration - Длительность показа
 */
function showSuccessNotification(message, duration = 7000) {
    return showNotification(message, 'success', duration);
}

/**
 * Показывает уведомление об ошибке
 * @param {string} message - Текст уведомления
 * @param {number} duration - Длительность показа
 */
function showErrorNotification(message, duration = 7000) {
    return showNotification(message, 'error', duration);
}

// Экспорт функций
window.Notifications = {
    show: showNotification,
    success: showSuccessNotification,
    error: showErrorNotification,
    redirect: showNotificationThenRedirect,
    store: storeNotification
}; 