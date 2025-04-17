/**
 * Система аутентификации для публикаций
 */

// Ключи для localStorage
const AUTH_KEY = 'komaru-auth';
const AUTH_USERS_KEY = 'komaru-users';

// Базовый набор тестовых пользователей
const defaultUsers = [
    {
        username: 'admin',
        password: '11rree',
        role: 'admin', // Администратор может управлять пользователями и всеми публикациями
        name: 'Администратор'
    },
    {
        username: 'author1',
        password: 'author123',
        role: 'author', // Автор может создавать и редактировать собственные публикации
        name: 'Автор 1'
    },
    {
        username: 'author2',
        password: 'author123',
        role: 'author',
        name: 'Автор 2'
    }
];

// Текущий пользователь
let currentUser = null;

/**
 * Инициализация системы аутентификации
 */
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация пользователей при первом запуске
    initializeUsers();
    
    // Проверка авторизации пользователя
    checkAuthentication();
    
    // Обработчик для формы входа
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Обработчик для ссылки входа/выхода
    updateLoginStatus();
});

/**
 * Проверка наличия пользователей и создание дефолтных если нужно
 */
function initializeUsers() {
    const users = localStorage.getItem(AUTH_USERS_KEY);
    if (!users) {
        localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(defaultUsers));
    }
}

/**
 * Получение текущего пользователя из localStorage
 */
function checkAuthentication() {
    const authData = localStorage.getItem(AUTH_KEY);
    if (authData) {
        try {
            currentUser = JSON.parse(authData);
            
            // Проверка доступа к редактору, если мы на соответствующей странице
            if (window.location.pathname.includes('edit-post.html')) {
                checkEditorAccess();
            }
            
            // Показать элементы управления автора на странице публикаций
            if (window.location.pathname.includes('posts.html')) {
                showAuthorControls();
            }
        } catch (e) {
            console.error('Ошибка авторизации:', e);
            localStorage.removeItem(AUTH_KEY);
            currentUser = null;
        }
    } else {
        // Пользователь не авторизован, проверяем доступ
        if (window.location.pathname.includes('edit-post.html')) {
            document.getElementById('editor-container').style.display = 'none';
            document.getElementById('unauthorized-message').style.display = 'block';
        }
    }
}

/**
 * Проверка доступа к редактору публикаций
 */
function checkEditorAccess() {
    if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'author')) {
        document.getElementById('editor-container').style.display = 'none';
        document.getElementById('unauthorized-message').style.display = 'block';
    }
}

/**
 * Показать элементы управления для авторов на странице публикаций
 */
function showAuthorControls() {
    if (currentUser && (currentUser.role === 'admin' || currentUser.role === 'author')) {
        const authorControls = document.getElementById('author-controls');
        if (authorControls) {
            authorControls.style.display = 'block';
        }
    }
}

/**
 * Обработка отправки формы входа
 * @param {Event} e - Событие отправки формы
 */
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('auth-message');
    
    // Загрузка пользователей из localStorage
    const users = JSON.parse(localStorage.getItem(AUTH_USERS_KEY));
    
    // Поиск пользователя
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Сохранение данных авторизации без пароля
        const authData = {
            username: user.username,
            role: user.role,
            name: user.name
        };
        
        localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
        currentUser = authData;
        
        // Перенаправление на страницу публикаций
        messageElement.textContent = 'Успешный вход. Перенаправление...';
        messageElement.className = 'auth-message success';
        setTimeout(() => {
            window.location.href = 'posts.html';
        }, 1000);
    } else {
        messageElement.textContent = 'Неверное имя пользователя или пароль';
        messageElement.className = 'auth-message error';
    }
}

/**
 * Обновление состояния ссылки входа/выхода
 */
function updateLoginStatus() {
    const loginStatusElement = document.getElementById('login-status');
    if (loginStatusElement) {
        if (currentUser) {
            loginStatusElement.textContent = 'Выйти';
            loginStatusElement.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem(AUTH_KEY);
                window.location.reload();
            });
        } else {
            loginStatusElement.textContent = 'Войти';
            loginStatusElement.href = 'login.html';
        }
    }
}

/**
 * Получение текущего пользователя
 * @returns {Object|null} - Объект с данными пользователя или null
 */
function getCurrentUser() {
    return currentUser;
}

// Экспорт функций
window.AuthSystem = {
    getCurrentUser,
    isAdmin: () => currentUser && currentUser.role === 'admin',
    isAuthor: () => currentUser && (currentUser.role === 'admin' || currentUser.role === 'author')
}; 