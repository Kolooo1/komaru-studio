/**
 * Файл с анимациями для портфолио команды
 * Реализует плавные анимации появления элементов при скролле
 */

// Ждем полной загрузки DOM перед инициализацией анимаций
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация анимаций появления
    initFadeInAnimations();

    // Инициализация плавных анимаций для hero секции
    initHeroAnimations();

    // Инициализация анимаций для карточек проектов
    initProjectCardAnimations();
});

/**
 * Инициализация анимаций появления элементов при скролле
 */
function initFadeInAnimations() {
    // Добавление класса fade-in ко всем нужным элементам
    const elementsToAnimate = [
        '.section-title',
        '.about-text p',
        '.team-member',
        '.skills',
        '.project-card',
        '.contact-method',
        '.contact-form'
    ];

    // Объединяем все селекторы и находим элементы
    const elements = document.querySelectorAll(elementsToAnimate.join(', '));
    
    // Добавляем класс fade-in ко всем найденным элементам
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Создаем и настраиваем IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс visible для запуска анимации
                entry.target.classList.add('visible');
                // Прекращаем наблюдение после первого появления
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // используем viewport как контейнер
        threshold: 0.1, // анимация начнется, когда 10% элемента видимы
        rootMargin: '0px 0px -50px 0px' // начинаем анимацию немного раньше
    });
    
    // Начинаем наблюдение за всеми элементами
    elements.forEach(element => {
        observer.observe(element);
    });
    
    // Добавляем интервал между анимациями для элементов в одном контейнере
    addStaggeredAnimations('.team-member', 150);
    addStaggeredAnimations('.project-card', 200);
    addStaggeredAnimations('.about-text p', 100);
    addStaggeredAnimations('.contact-method', 100);
}

/**
 * Добавление задержки для последовательных анимаций
 * @param {string} selector - CSS селектор элементов
 * @param {number} delay - Задержка в мс между элементами
 */
function addStaggeredAnimations(selector, delay) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        element.style.transitionDelay = `${index * delay}ms`;
    });
}

/**
 * Инициализация специальных анимаций для hero секции
 */
function initHeroAnimations() {
    // Добавляем анимацию для заголовка
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-20px)';
        heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Запускаем анимацию с небольшой задержкой после загрузки
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(-20px)';
        heroSubtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(-20px)';
        heroButtons.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 700);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(20px)';
        heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 900);
    }
}

/**
 * Инициализирует анимации для карточек проектов
 */
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Добавляем обработчики для hover-эффекта
        card.addEventListener('mouseenter', (e) => {
            // Легкое увеличение карточки
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            
            // Подсветка заголовка
            const title = e.currentTarget.querySelector('h3');
            if (title) {
                title.style.color = 'var(--color-primary)';
            }
        });
        
        card.addEventListener('mouseleave', (e) => {
            // Возврат к исходному состоянию
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            
            // Возврат цвета заголовка
            const title = e.currentTarget.querySelector('h3');
            if (title) {
                title.style.color = '';
            }
        });
    });
}

/**
 * Эффект волны при клике на кнопки
 * Добавляет анимированный круг-волну при нажатии на кнопки
 */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Создаем элемент круга
            const circle = document.createElement('span');
            
            // Получаем координаты клика относительно кнопки
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            // Устанавливаем стили для круга
            circle.style.position = 'absolute';
            circle.style.top = `${y}px`;
            circle.style.left = `${x}px`;
            circle.style.width = '0';
            circle.style.height = '0';
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            circle.style.transform = 'translate(-50%, -50%)';
            circle.style.animation = 'ripple 0.6s ease-out';
            
            // Добавляем стиль анимации, если его еще нет
            if (!document.querySelector('#ripple-animation')) {
                const style = document.createElement('style');
                style.id = 'ripple-animation';
                style.textContent = `
                    @keyframes ripple {
                        0% {
                            width: 0;
                            height: 0;
                            opacity: 0.5;
                        }
                        100% {
                            width: 500px;
                            height: 500px;
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Проверяем и устанавливаем position: relative для кнопки
            if (getComputedStyle(this).position !== 'relative') {
                this.style.position = 'relative';
            }
            
            // Добавляем overflow: hidden для кнопки
            this.style.overflow = 'hidden';
            
            // Добавляем круг к кнопке
            this.appendChild(circle);
            
            // Удаляем круг после завершения анимации
            setTimeout(() => {
                circle.remove();
            }, 600);
        });
    });
}); 