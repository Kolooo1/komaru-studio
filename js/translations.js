/**
 * Система многоязычности для сайта Komaru Studio
 * Содержит все переводы и функции для переключения языков
 */

// Константа для ключа localStorage
const LANG_KEY = 'portfolio-lang';

// Словарь переводов для всего сайта
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
    'nav-posts': {
        'ru': 'Публикации',
        'en': 'Posts',
        'zh': '文章'
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
        'ru': 'Приключенческая игра на UE5',
        'en': 'Adventure Game on UE5',
        'zh': 'UE5冒险游戏'
    },
    'project-1-description': {
        'ru': 'Наш первый проект, трёхмерный моба шутер, вдохновлённый игрой Deadlock.',
        'en': 'Our first project, a 3D mob shooter inspired by the game Deadlock.',
        'zh': '我们的第一个项目，一款基于虚幻引擎5开发的3D僵尸射击游戏，灵感来源于游戏Deadlock。'
    },
    'project-2-title': {
        'ru': 'Интерактивный учебник по Rust',
        'en': 'Interactive Rust Learning Platform',
        'zh': 'Rust交互式学习平台'
    },
    'project-2-description': {
        'ru': 'Образовательная платформа для изучения языка программирования Rust с интерактивными упражнениями, подробными уроками и встроенным компилятором для выполнения кода прямо в браузере.',
        'en': 'Educational platform for learning the Rust programming language with interactive exercises, detailed lessons, and an embedded compiler for running code directly in the browser.',
        'zh': '用于学习Rust编程语言的教育平台，具有交互式练习、详细课程和内置编译器，可直接在浏览器中运行代码。'
    },
    'project-3-title': {
        'ru': 'Эволюция: Игра-кликер',
        'en': 'Evolution: Clicker Game',
        'zh': '进化：点击游戏'
    },
    'project-3-description': {
        'ru': 'Увлекательная браузерная игра-кликер, где игроки развивают свою форму жизни от одноклеточного организма до сложной цивилизации. Включает более 100 уровней эволюции и уникальную систему достижений.',
        'en': 'An engaging browser-based clicker game where players evolve their life form from a single-cell organism to a complex civilization. Features over 100 evolution levels and a unique achievement system.',
        'zh': '一款引人入胜的基于浏览器的点击游戏，玩家可以将他们的生命形式从单细胞生物进化为复杂的文明。包含100多个进化级别和独特的成就系统。'
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
    'project-demo-link': {
        'ru': 'Демо',
        'en': 'Demo',
        'zh': '演示'
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
        'ru': 'Есть вопросы или предложения? Напишите нам, и мы свяжемся с вами как можно скорее.',
        'en': 'Have questions or suggestions? Write to us, and we will get back to you as soon as possible.',
        'zh': '有问题或建议？给我们写信，我们会尽快回复您。'
    },
    'contact-method-1-title': {
        'ru': 'Электронная почта',
        'en': 'Email',
        'zh': '电子邮件'
    },
    'contact-method-1-text': {
        'ru': 'info@komarustudio.com',
        'en': 'info@komarustudio.com',
        'zh': 'info@komarustudio.com'
    },
    'contact-method-2-title': {
        'ru': 'Социальные сети',
        'en': 'Social Media',
        'zh': '社交媒体'
    },
    'contact-method-2-text': {
        'ru': 'Мы в Twitter, Instagram, GitHub',
        'en': 'We are on Twitter, Instagram, GitHub',
        'zh': '我们在Twitter、Instagram、GitHub上'
    },
    'contact-form-title': {
        'ru': 'Форма обратной связи',
        'en': 'Contact Form',
        'zh': '联系表单'
    },
    'form-name': {
        'ru': 'Ваше имя',
        'en': 'Your Name',
        'zh': '您的姓名'
    },
    'form-email': {
        'ru': 'Email',
        'en': 'Email',
        'zh': '电子邮件'
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
    'form-success': {
        'ru': 'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
        'en': 'Thank you! Your message has been sent. We will get back to you shortly.',
        'zh': '谢谢！您的消息已发送。我们会尽快与您联系。'
    },

    // Вступительный экран
    'splash-welcome': {
        'ru': 'Добро пожаловать в Komaru Studio',
        'en': 'Welcome to Komaru Studio',
        'zh': '欢迎来到Komaru Studio'
    },
    
    // Подвал
    'footer-copyright': {
        'ru': 'Komaru Studio. Все права защищены.',
        'en': 'Komaru Studio. All rights reserved.',
        'zh': 'Komaru Studio. 保留所有权利。'
    },
    
    // Система публикаций
    'posts-title': {
        'ru': 'Публикации команды',
        'en': 'Team Posts',
        'zh': '团队文章'
    },
    'new-post': {
        'ru': 'Новая публикация',
        'en': 'New Post',
        'zh': '新文章'
    },
    'loading-posts': {
        'ru': 'Загрузка публикаций...',
        'en': 'Loading posts...',
        'zh': '加载文章...'
    },
    'no-posts': {
        'ru': 'Публикации не найдены',
        'en': 'No posts found',
        'zh': '未找到文章'
    },
    'edit-post': {
        'ru': 'Редактировать',
        'en': 'Edit',
        'zh': '编辑'
    },
    'delete-post': {
        'ru': 'Удалить',
        'en': 'Delete',
        'zh': '删除'
    },
    'confirm-delete-title': {
        'ru': 'Подтверждение удаления',
        'en': 'Confirm Deletion',
        'zh': '确认删除'
    },
    'confirm-delete-text': {
        'ru': 'Вы действительно хотите удалить эту публикацию? Это действие нельзя отменить.',
        'en': 'Are you sure you want to delete this post? This action cannot be undone.',
        'zh': '您确定要删除这篇文章吗？此操作无法撤消。'
    },
    'confirm-delete-yes': {
        'ru': 'Да, удалить',
        'en': 'Yes, delete',
        'zh': '是的，删除'
    },
    'confirm-delete-cancel': {
        'ru': 'Отмена',
        'en': 'Cancel',
        'zh': '取消'
    },
    'post-delete-success': {
        'ru': 'Публикация успешно удалена',
        'en': 'Post successfully deleted',
        'zh': '文章已成功删除'
    },
    
    // Авторизация
    'login-title': {
        'ru': 'Вход в систему',
        'en': 'Login',
        'zh': '登录'
    },
    'login-username': {
        'ru': 'Имя пользователя',
        'en': 'Username',
        'zh': '用户名'
    },
    'login-password': {
        'ru': 'Пароль',
        'en': 'Password',
        'zh': '密码'
    },
    'login-button': {
        'ru': 'Войти',
        'en': 'Login',
        'zh': '登录'
    },
    'login-success': {
        'ru': 'Успешный вход. Перенаправление...',
        'en': 'Login successful. Redirecting...',
        'zh': '登录成功。重定向中...'
    },
    'login-error': {
        'ru': 'Неверное имя пользователя или пароль',
        'en': 'Invalid username or password',
        'zh': '用户名或密码无效'
    },
    'login-link': {
        'ru': 'Войти',
        'en': 'Login',
        'zh': '登录'
    },
    'logout-link': {
        'ru': 'Выйти',
        'en': 'Logout',
        'zh': '登出'
    },
    
    // Редактор публикаций
    'editor-title': {
        'ru': 'Редактор публикаций',
        'en': 'Post Editor',
        'zh': '文章编辑器'
    },
    'editor-new-post': {
        'ru': 'Новая публикация',
        'en': 'New Post',
        'zh': '新文章'
    },
    'editor-edit-post': {
        'ru': 'Редактирование публикации',
        'en': 'Edit Post',
        'zh': '编辑文章'
    },
    'editor-post-title': {
        'ru': 'Заголовок',
        'en': 'Title',
        'zh': '标题'
    },
    'editor-post-image': {
        'ru': 'URL изображения',
        'en': 'Image URL',
        'zh': '图片URL'
    },
    'editor-post-content': {
        'ru': 'Содержание',
        'en': 'Content',
        'zh': '内容'
    },
    'editor-save': {
        'ru': 'Сохранить',
        'en': 'Save',
        'zh': '保存'
    },
    'editor-cancel': {
        'ru': 'Отмена',
        'en': 'Cancel',
        'zh': '取消'
    },
    'editor-unauthorized': {
        'ru': 'Доступ запрещен',
        'en': 'Access Denied',
        'zh': '拒绝访问'
    },
    'editor-unauthorized-message': {
        'ru': 'У вас нет прав для доступа к этой странице. Пожалуйста, войдите в систему.',
        'en': 'You do not have permission to access this page. Please log in.',
        'zh': '您无权访问此页面。请登录。'
    },
    'post-save-success': {
        'ru': 'Публикация успешно сохранена',
        'en': 'Post saved successfully',
        'zh': '文章已成功保存'
    },
    'post-detail-title': {
        'ru': 'Публикация | Komaru Studio',
        'en': 'Post | Komaru Studio',
        'zh': '文章 | Komaru Studio'
    },
    'loading-post': {
        'ru': 'Загрузка публикации...',
        'en': 'Loading post...',
        'zh': '加载文章...'
    },
    'post-not-found-title': {
        'ru': 'Публикация не найдена',
        'en': 'Post not found',
        'zh': '文章未找到'
    },
    'post-not-found-message': {
        'ru': 'Запрашиваемая публикация не существует или была удалена.',
        'en': 'The requested post does not exist or has been deleted.',
        'zh': '请求的文章不存在或已被删除。'
    },
    'back-to-posts': {
        'ru': 'К публикациям',
        'en': 'Back to posts',
        'zh': '返回文章列表'
    },
    'post-author': {
        'ru': 'Автор',
        'en': 'Author',
        'zh': '作者'
    },
    'post-date': {
        'ru': 'Дата публикации',
        'en': 'Publication date',
        'zh': '发布日期'
    },
    'no-image': {
        'ru': 'Изображение отсутствует',
        'en': 'No image',
        'zh': '无图片'
    },
    'post-read': {
        'ru': 'Читать',
        'en': 'Read',
        'zh': '阅读'
    },
    'posts-description': {
        'ru': 'Публикации команды Komaru Studio',
        'en': 'Posts from Komaru Studio team',
        'zh': 'Komaru Studio团队的文章'
    }
};

/**
 * Инициализация языка
 */
function initLanguage() {
    // Получаем сохраненный язык из localStorage или используем русский по умолчанию
    const savedLang = localStorage.getItem(LANG_KEY) || 'ru';
    
    // Устанавливаем атрибут lang для HTML-элемента
    document.documentElement.setAttribute('lang', savedLang);
    
    // Обновляем текущий язык на странице
    updateLanguage(savedLang);
    
    // Инициализируем переключатель языка
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langToggleBtn) {
        // Обработчик клика по кнопке переключения языка
        langToggleBtn.addEventListener('click', function() {
            const langDropdown = document.querySelector('.lang-dropdown');
            langDropdown.classList.toggle('active');
        });
        
        // Закрытие выпадающего списка при клике вне его
        document.addEventListener('click', function(e) {
            const langDropdown = document.querySelector('.lang-dropdown');
            if (!e.target.closest('.lang-dropdown') && langDropdown && langDropdown.classList.contains('active')) {
                langDropdown.classList.remove('active');
            }
        });
    }
    
    // Обработчики для опций выбора языка
    if (langOptions.length > 0) {
        langOptions.forEach(option => {
            // Помечаем текущий язык как активный
            if (option.getAttribute('data-lang-code') === savedLang) {
                option.classList.add('active');
            }
            
            // Обработчик клика по опции языка
            option.addEventListener('click', function() {
                const langCode = this.getAttribute('data-lang-code');
                if (langCode) {
                    // Обновляем язык
                    updateLanguage(langCode);
                    
                    // Сохраняем выбранный язык
                    localStorage.setItem(LANG_KEY, langCode);
                    
                    // Обновляем HTML атрибут
                    document.documentElement.setAttribute('lang', langCode);
                    
                    // Обновляем активную опцию
                    document.querySelectorAll('.lang-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Закрываем выпадающий список
                    const langDropdown = document.querySelector('.lang-dropdown');
                    if (langDropdown) {
                        langDropdown.classList.remove('active');
                    }
                }
            });
        });
    }
}

/**
 * Обновление языка на странице
 * @param {string} lang - Код языка (ru, en, zh)
 */
function updateLanguage(lang) {
    // Обновляем все элементы с атрибутом data-lang
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[key] && translations[key][lang]) {
            // Для мета-тегов обновляем content
            if (el.tagName === 'META') {
                el.setAttribute('content', translations[key][lang]);
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                // Для полей ввода обновляем placeholder
                el.setAttribute('placeholder', translations[key][lang]);
            } else {
                // Для обычных элементов обновляем текстовое содержимое
                el.textContent = translations[key][lang];
            }
        }
    });
    
    // Обновляем текущий язык в кнопке переключения
    const currentLangEl = document.getElementById('current-lang');
    if (currentLangEl && translations['current-lang'] && translations['current-lang'][lang]) {
        currentLangEl.textContent = translations['current-lang'][lang];
    }
}

// Экспортируем функции для использования в других файлах
window.TranslationSystem = {
    initLanguage,
    updateLanguage,
    translations
}; 