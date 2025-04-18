/**
 * Основной файл JavaScript для портфолио команды
 * Содержит функции для переключения темы и другие интерактивные элементы
 */

// Константа для ключа localStorage
const THEME_KEY = 'portfolio-theme';

/**
 * Инициализация основных компонентов сайта
 */
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация темы
    initTheme();
    
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Обновление года
    updateYear();
    
    // Инициализация анимаций
    initAnimations();
    
    // Инициализация эффекта скролла для шапки
    initScrollEvents();
    
    // Инициализация вступительной анимации
    initRestartSplash();
    
    // Инициализация логина и статуса авторизации
    initLoginStatus();
});

/**
 * Инициализация темы
 */
function initTheme() {
    // Определяем текущую тему
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    document.documentElement.classList.add(savedTheme + '-theme');
    
    // Переключатель темы
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
}

/**
 * Переключение темы
 */
function toggleTheme() {
    // Проверяем текущую тему
    if (document.documentElement.classList.contains('light-theme')) {
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem(THEME_KEY, 'dark');
    } else {
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
        localStorage.setItem(THEME_KEY, 'light');
    }
}

/**
 * Обновление года в футере
 */
function updateYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

/**
 * Инициализация обработчиков событий
 */
function initEventListeners() {
    // Здесь могут быть различные обработчики событий
}

/**
 * Инициализация скролла навигации
 */
function initScrollNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Проверяем, что ссылка ведет на якорь внутри страницы
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Закрываем мобильное меню, если оно открыто
                    const mobileMenu = document.querySelector('.nav-links');
                    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                    
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        if (mobileMenuBtn) {
                            mobileMenuBtn.classList.remove('active');
                        }
                    }
                    
                    // Плавная прокрутка к элементу
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // 80px отступ для фиксированной шапки
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Создание мобильного меню если его нет в HTML
 */
function createMobileMenu() {
    // Проверка существования мобильного меню
    let mobileMenu = document.querySelector('.mobile-menu');
    
    if (!mobileMenu) {
        // Создаем мобильное меню
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        
        // Кнопка закрытия
        const closeButton = document.createElement('button');
        closeButton.className = 'mobile-menu-close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', toggleMobileMenu);
        
        // Копирование ссылок из основной навигации
        const navLinks = document.querySelector('.nav-links');
        let mobileLinks;
        
        if (navLinks) {
            mobileLinks = navLinks.cloneNode(true);
        } else {
            mobileLinks = document.createElement('ul');
            mobileLinks.className = 'nav-links';
        }
        
        // Собираем меню
        mobileMenu.appendChild(closeButton);
        mobileMenu.appendChild(mobileLinks);
        
        // Добавляем в body
        document.body.appendChild(mobileMenu);
        
        // Добавляем обработчики событий для ссылок мобильного меню
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });
    }
    
    return mobileMenu;
}

/**
 * Переключение мобильного меню
 */
function toggleMobileMenu() {
    const mobileMenu = createMobileMenu();
    mobileMenu.classList.toggle('active');
}

/**
 * Инициализация эффекта при скролле для навигации
 */
function initScrollNavigation() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

/**
 * Инициализация формы обратной связи
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

/**
 * Обработка отправки формы
 * @param {Event} e - Событие отправки формы
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Сбор данных из формы
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Имитация отправки данных на сервер
    console.log('Отправка формы:', formData);
    
    // Здесь можно добавить настоящую отправку данных через fetch или XMLHttpRequest
    
    // Оповещение пользователя
    const currentLang = document.documentElement.lang || 'ru';
    let message = '';
    
    // Проверяем наличие TranslationSystem перед его использованием
    if (window.TranslationSystem && window.TranslationSystem.translations && 
        window.TranslationSystem.translations['form-success']) {
        message = window.TranslationSystem.translations['form-success'][currentLang];
    } else {
        // Запасные сообщения, если TranslationSystem недоступен
    if (currentLang === 'ru') {
        message = 'Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.';
    } else if (currentLang === 'zh') {
        message = '感谢您的留言！我们将很快与您联系。';
        } else {
            message = 'Thank you for your message! We will contact you soon.';
        }
    }
    
    alert(message);
    
    // Сброс формы
    e.target.reset();
}

/**
 * Инициализация перезапуска вступительной анимации
 */
function initRestartSplash() {
    const restartButton = document.getElementById('restart-splash');
    if (restartButton) {
        restartButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Получаем элементы для управления анимацией
            const splashScreen = document.querySelector('.splash-screen');
            const mainContent = document.querySelector('.main-content');
            
            // Если элементы существуют
            if (splashScreen && mainContent) {
                // Скрываем основной контент
                mainContent.classList.remove('visible');
                
                // Показываем splash screen
                splashScreen.style.opacity = '1';
                splashScreen.style.visibility = 'visible';
                
                // Сбрасываем анимации в splash screen
                const splashContent = splashScreen.querySelector('.splash-content');
                const splashText = splashScreen.querySelector('.splash-text');
                const splashLoader = splashScreen.querySelector('.splash-loader');
                
                if (splashContent) {
                    // Сброс анимации
                    splashContent.style.animation = 'none';
                    
                    // Вызываем reflow для перезапуска анимации
                    void splashContent.offsetWidth;
                    
                    // Запускаем анимацию заново
                    splashContent.style.animation = 'fadeInUp 1s ease-out forwards';
                }
                
                if (splashText) {
                    splashText.style.animation = 'none';
                    void splashText.offsetWidth;
                    splashText.style.animation = 'fadeInUpText 1s ease-out 0.5s forwards';
                }
                
                if (splashLoader) {
                    splashLoader.style.animation = 'none';
                    void splashLoader.offsetWidth;
                    splashLoader.style.animation = 'fadeIn 0.6s ease-out 1.2s forwards';
                }
                
                // Через 2.0 секунды скрываем splash screen и показываем контент
                setTimeout(() => {
                    splashScreen.style.opacity = '0';
                    splashScreen.style.visibility = 'hidden';
                    mainContent.classList.add('visible');
                    
                    // Прокрутка страницы вверх
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, 2000);
            }
        });
    }
}

/**
 * Инициализация событий скролла
 */
function initScrollEvents() {
    // Инициализация обработчиков событий
    initEventListeners();
    
    // Инициализация скролла навигации
    initScrollNavigation();
}

/**
 * Инициализация мобильного меню
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

/**
 * Инициализация анимаций
 */
function initAnimations() {
    // Инициализация формы обратной связи
    initContactForm();
    
    // Здесь могут быть другие анимации
}

/**
 * Инициализация логина и статуса авторизации
 */
function initLoginStatus() {
    // Ссылка в шапке
    const loginStatusElement = document.getElementById('login-status');
    // Ссылка в подвале
    const footerLoginStatusElement = document.getElementById('footer-login-status');
    
    // Проверяем, авторизован ли пользователь
    const isLoggedIn = localStorage.getItem('komaru-auth') !== null;
    
    // Функция обновления текста и поведения ссылки
    const updateLoginLink = (element) => {
        if (!element) return;
        
        if (isLoggedIn) {
            // Изменяем текст на "Выйти"
            const lang = document.documentElement.lang || 'ru';
            let logoutText = 'Выйти';
            
            if (window.TranslationSystem && 
                window.TranslationSystem.translations &&
                window.TranslationSystem.translations['logout-link']) {
                logoutText = window.TranslationSystem.translations['logout-link'][lang];
            }
            
            element.textContent = logoutText;
            
            // Добавляем обработчик для выхода
            element.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('komaru-auth');
                window.location.reload();
            });
        } else {
            // Устанавливаем ссылку на страницу логина
            element.href = 'login.html';
        }
    };
    
    // Обновляем обе ссылки
    updateLoginLink(loginStatusElement);
    updateLoginLink(footerLoginStatusElement);
}

// Экспорт функций для тестирования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme
    };
} 