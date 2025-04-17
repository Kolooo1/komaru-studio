/**
 * Основной файл JavaScript для портфолио команды
 * Содержит функции для переключения темы, языка и другие интерактивные элементы
 */

// Константы для ключей localStorage
const THEME_KEY = 'portfolio-theme';
const LANG_KEY = 'portfolio-lang';

// Словарь для многоязычности
const translations = {
    // Мета-данные
    'title': {
        'ru': 'KS | Портфолио',
        'en': 'KS | Portfolio',
        'zh': 'KS | 作品集'
    },
    'description': {
        'ru': 'Портфолио Komaru Studio - команды разработчиков',
        'en': 'Portfolio of Komaru Studio - a team of developers',
        'zh': 'Komaru Studio - 开发团队的作品集'
    },

    // Навигация
    'logo': {
        'ru': 'KS',
        'en': 'KS',
        'zh': 'KS'
    },
    'logo-full': {
        'ru': 'Komaru Studio',
        'en': 'Komaru Studio',
        'zh': 'Komaru Studio'
    },
    'nav-home': {
        'ru': 'Главная',
        'en': 'Home',
        'zh': '首页'
    },
    'nav-about': {
        'ru': 'О нас',
        'en': 'About',
        'zh': '关于我们'
    },
    'nav-projects': {
        'ru': 'Проекты',
        'en': 'Projects',
        'zh': '项目'
    },
    'nav-contact': {
        'ru': 'Контакт',
        'en': 'Contact',
        'zh': '联系我们'
    },
    'current-lang': {
        'ru': 'RU',
        'en': 'EN',
        'zh': 'ZH'
    },

    // Hero секция
    'hero-title': {
        'ru': 'Мы создаем современные цифровые решения',
        'en': 'We create modern digital solutions',
        'zh': '我们创造现代数字解决方案'
    },
    'hero-subtitle': {
        'ru': 'Команда креативных разработчиков, превращающая идеи в цифровые продукты',
        'en': 'A team of creative developers turning ideas into digital products',
        'zh': '一支将创意转化为数字产品的创意开发团队'
    },
    'hero-btn-1': {
        'ru': 'Наши проекты',
        'en': 'Our projects',
        'zh': '我们的项目'
    },
    'hero-btn-2': {
        'ru': 'Связаться',
        'en': 'Get in touch',
        'zh': '联系我们'
    },
    'hero-img-placeholder': {
        'ru': 'Изображение команды',
        'en': 'Team image',
        'zh': '团队图片'
    },

    // О нас
    'about-title': {
        'ru': 'О нашей команде',
        'en': 'About our team',
        'zh': '关于我们的团队'
    },
    'about-text-1': {
        'ru': 'Мы — команда талантливых разработчиков, дизайнеров и креативщиков, объединенных общей целью: создавать цифровые продукты, которые решают проблемы и приносят ценность.',
        'en': 'We are a team of talented developers, designers, and creatives united by a common goal: to create digital products that solve problems and bring value.',
        'zh': '我们是一支由才华横溢的开发人员、设计师和创意人员组成的团队，我们有着共同的目标：创造解决问题并带来价值的数字产品。'
    },
    'about-text-2': {
        'ru': 'Наш опыт охватывает широкий спектр технологий и отраслей, что позволяет нам находить инновационные решения для любых задач.',
        'en': 'Our experience spans a wide range of technologies and industries, allowing us to find innovative solutions for any task.',
        'zh': '我们的经验涵盖了广泛的技术和行业，使我们能够为任何任务找到创新的解决方案。'
    },
    'about-text-3': {
        'ru': 'Мы верим в простоту, функциональность и эстетику в каждом проекте, над которым работаем.',
        'en': 'We believe in simplicity, functionality, and aesthetics in every project we work on.',
        'zh': '我们相信在每个项目中都应该追求简洁、功能性和美学。'
    },
    'skills-title': {
        'ru': 'Наши навыки',
        'en': 'Our skills',
        'zh': '我们的技能'
    },
    
    // Навыки - переводы для тегов
    '3d-modeling': {
        'ru': '3D Моделирование',
        'en': '3D Modeling',
        'zh': '3D建模'
    },
    'gamedev': {
        'ru': 'Геймдев',
        'en': 'Game Development',
        'zh': '游戏开发'
    },
    'rust': {
        'ru': 'Rust',
        'en': 'Rust',
        'zh': 'Rust语言'
    },
    'map-design': {
        'ru': 'Мап-дизайн',
        'en': 'Map Design',
        'zh': '地图设计'
    },
    'animations': {
        'ru': 'Анимации',
        'en': 'Animations',
        'zh': '动画制作'
    },
    'unreal-engine': {
        'ru': 'Unreal Engine',
        'en': 'Unreal Engine',
        'zh': '虚幻引擎'
    },
    'web-dev': {
        'ru': 'Разработка сайтов',
        'en': 'Web Development',
        'zh': '网站开发'
    },
    
    // Члены команды
    'member-1-name': {
        'ru': 'Имя Участника 1',
        'en': 'Team Member 1',
        'zh': '团队成员 1'
    },
    'member-1-role': {
        'ru': 'Должность',
        'en': 'Position',
        'zh': '职位'
    },
    'member-2-name': {
        'ru': 'Имя Участника 2',
        'en': 'Team Member 2',
        'zh': '团队成员 2'
    },
    'member-2-role': {
        'ru': 'Должность',
        'en': 'Position',
        'zh': '职位'
    },
    'member-3-name': {
        'ru': 'Имя Участника 3',
        'en': 'Team Member 3',
        'zh': '团队成员 3'
    },
    'member-3-role': {
        'ru': 'Должность',
        'en': 'Position',
        'zh': '职位'
    },

    // Проекты
    'projects-title': {
        'ru': 'Наши проекты',
        'en': 'Our projects',
        'zh': '我们的项目'
    },
    'project-1-title': {
        'ru': 'Название Проекта 1',
        'en': 'Project 1 Title',
        'zh': '项目1标题'
    },
    'project-1-description': {
        'ru': 'Краткое описание проекта. Расскажите о целях, технологиях и результатах.',
        'en': 'Short project description. Describe the goals, technologies, and results.',
        'zh': '项目简介。描述目标、技术和成果。'
    },
    'project-2-title': {
        'ru': 'Название Проекта 2',
        'en': 'Project 2 Title',
        'zh': '项目2标题'
    },
    'project-2-description': {
        'ru': 'Краткое описание проекта. Расскажите о целях, технологиях и результатах.',
        'en': 'Short project description. Describe the goals, technologies, and results.',
        'zh': '项目简介。描述目标、技术和成果。'
    },
    'project-3-title': {
        'ru': 'Название Проекта 3',
        'en': 'Project 3 Title',
        'zh': '项目3标题'
    },
    'project-3-description': {
        'ru': 'Краткое описание проекта. Расскажите о целях, технологиях и результатах.',
        'en': 'Short project description. Describe the goals, technologies, and results.',
        'zh': '项目简介。描述目标、技术和成果。'
    },
    'project-img-placeholder': {
        'ru': 'Изображение проекта',
        'en': 'Project image',
        'zh': '项目图片'
    },
    'project-live-link': {
        'ru': 'Сайт',
        'en': 'Live Site',
        'zh': '网站'
    },
    'project-code-link': {
        'ru': 'Код',
        'en': 'Code',
        'zh': '代码'
    },

    // Контакт
    'contact-title': {
        'ru': 'Связаться с нами',
        'en': 'Contact us',
        'zh': '联系我们'
    },
    'contact-text': {
        'ru': 'Готовы обсудить ваш проект? Свяжитесь с нами через форму или используйте другие способы связи.',
        'en': 'Ready to discuss your project? Get in touch through the form or use other contact methods.',
        'zh': '准备讨论您的项目了吗？通过表单联系我们或使用其他联系方式。'
    },
    'contact-email-title': {
        'ru': 'Электронная почта',
        'en': 'Email',
        'zh': '电子邮件'
    },
    'contact-phone-title': {
        'ru': 'Телефон',
        'en': 'Phone',
        'zh': '电话'
    },
    'contact-location-title': {
        'ru': 'Локация',
        'en': 'Location',
        'zh': '位置'
    },
    'contact-location': {
        'ru': 'Москва, Россия',
        'en': 'Moscow, Russia',
        'zh': '莫斯科，俄罗斯'
    },
    'form-name': {
        'ru': 'Имя',
        'en': 'Name',
        'zh': '姓名'
    },
    'form-email': {
        'ru': 'Электронная почта',
        'en': 'Email',
        'zh': '电子邮件'
    },
    'form-subject': {
        'ru': 'Тема',
        'en': 'Subject',
        'zh': '主题'
    },
    'form-message': {
        'ru': 'Сообщение',
        'en': 'Message',
        'zh': '留言'
    },
    'form-submit': {
        'ru': 'Отправить',
        'en': 'Submit',
        'zh': '提交'
    },

    // Футер
    'footer-copyright': {
        'ru': 'Komaru Studio. Все права защищены.',
        'en': 'Komaru Studio. All rights reserved.',
        'zh': 'Komaru Studio. 版权所有。'
    },

    // Вступительная анимация
    'splash-welcome': {
        'ru': 'Добро пожаловать в Komaru Studio',
        'en': 'Welcome to Komaru Studio',
        'zh': '欢迎来到 Komaru Studio'
    }
};

/**
 * Инициализация приложения
 */
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация вступительной анимации
    initSplashScreen();
    
    // Инициализация темы
    initTheme();
    
    // Инициализация языка
    initLanguage();
    
    // Установка текущего года
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Инициализация событий скролла
    initScrollEvents();
    
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Инициализация анимаций
    initAnimations();
    
    // Инициализация перезапуска анимации по клику на логотип
    initRestartSplash();
});

/**
 * Инициализация вступительной анимации
 */
function initSplashScreen() {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');
    
    // Задержка для запуска анимаций и появления основного контента
    setTimeout(() => {
        if (splashScreen) {
            splashScreen.style.opacity = '0';
            splashScreen.style.visibility = 'hidden';
        }
        
        if (mainContent) {
            mainContent.classList.add('visible');
        }
    }, 1000); // Время задержки для анимации (2.0 секунды)
}

/**
 * Инициализация темы
 */
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    document.body.className = `${savedTheme}-theme`;
    
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
}

/**
 * Переключение темы
 */
function toggleTheme() {
    const currentTheme = document.body.className.includes('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.className = `${newTheme}-theme`;
    localStorage.setItem(THEME_KEY, newTheme);
}

/**
 * Инициализация языка
 */
function initLanguage() {
    const savedLang = localStorage.getItem(LANG_KEY) || 'ru';
    
    // Установка языка
    updateLanguage(savedLang);
    
    // Добавление обработчиков событий для выпадающего меню языков
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langToggleBtn) {
        // Обработчик клика по кнопке для открытия/закрытия меню
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
            langToggleBtn.classList.toggle('active');
        });
        
        // Закрытие меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
                langToggleBtn.classList.remove('active');
            }
        });
        
        // Обработчики для опций языка
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const langCode = option.getAttribute('data-lang-code');
                updateLanguage(langCode);
                localStorage.setItem(LANG_KEY, langCode);
                
                // Закрытие меню после выбора
                langDropdown.classList.remove('active');
                langToggleBtn.classList.remove('active');
            });
        });
    }
}

/**
 * Обновление текстов на странице в соответствии с выбранным языком
 * @param {string} lang - Код языка ('ru', 'en' или 'zh')
 */
function updateLanguage(lang) {
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
        currentLangElement.innerText = translations['current-lang'][lang];
    }
    
    // Подсветка активного языка в меню
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        if (option.getAttribute('data-lang-code') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Установка атрибута lang у html
    document.documentElement.lang = lang;
    
    // Обновление всех элементов с атрибутом data-lang
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        
        if (translations[key] && translations[key][lang]) {
            // Обработка различных типов элементов
            if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
                element.setAttribute('content', translations[key][lang]);
            } else if (element.tagName === 'TITLE') {
                element.innerText = translations[key][lang];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[key][lang]);
            } else {
                element.innerText = translations[key][lang];
            }
        }
    });
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
    const currentLang = document.documentElement.lang;
    let message = 'Thank you for your message! We will contact you soon.';
    
    if (currentLang === 'ru') {
        message = 'Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.';
    } else if (currentLang === 'zh') {
        message = '感谢您的留言！我们将很快与您联系。';
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

// Экспорт функций для тестирования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme,
        toggleLanguage,
        updateLanguage
    };
} 