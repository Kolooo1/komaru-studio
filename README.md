# Сайт-портфолио команды

Адаптивный одностраничный сайт-портфолио команды разработчиков с переключением тем и поддержкой нескольких языков (русский/английский).

## Особенности

- Адаптивный дизайн (мобильные устройства, планшеты, десктоп)
- Светлая и темная темы
- Многоязычность (русский и английский языки)
- Плавные анимации при прокрутке
- Интерактивные элементы интерфейса
- Форма обратной связи (модуль для будущей интеграции с бэкендом)

## Структура проекта

```
portfolio-website/
├── index.html          # Главная страница сайта
├── css/
│   ├── style.css       # Основные стили
│   ├── themes.css      # Темы (светлая и темная)
├── js/
│   ├── main.js         # Основной скрипт (темы, язык, взаимодействие)
│   ├── animations.js   # Анимации элементов
└── assets/
    ├── images/         # Изображения (добавьте свои)
    └── fonts/          # Шрифты (если нужны)
```

## Как использовать

### Персонализация информации

1. **Редактирование общей информации:**
   - Откройте `index.html` и отредактируйте теги с атрибутами `data-lang` для добавления своего контента.
   - В `js/main.js` обновите объект `translations` с переводами на русский и английский.

2. **Добавление участников команды:**
   ```html
   <div class="team-member">
       <div class="member-photo-placeholder"></div>
       <h3 data-lang="member-4-name">Имя Участника 4</h3>
       <p data-lang="member-4-role">Должность</p>
   </div>
   ```
   Добавьте новые ключи в объект `translations` в `main.js`:
   ```javascript
   'member-4-name': {
       'ru': 'Имя Участника 4',
       'en': 'Team Member 4'
   },
   'member-4-role': {
       'ru': 'Должность',
       'en': 'Position'
   },
   ```

3. **Добавление проектов:**
   Скопируйте и настройте блок с проектом в разделе `projects`:
   ```html
   <div class="project-card">
       <div class="project-image">
           <div class="image-placeholder">
               <span data-lang="project-img-placeholder">Изображение проекта</span>
           </div>
       </div>
       <div class="project-info">
           <h3 data-lang="project-4-title">Название Проекта 4</h3>
           <p data-lang="project-4-description">Краткое описание проекта.</p>
           <div class="project-tags">
               <span class="project-tag">HTML/CSS</span>
               <span class="project-tag">JavaScript</span>
           </div>
           <div class="project-links">
               <a href="#" class="btn btn-small" data-lang="project-live-link">Сайт</a>
               <a href="#" class="btn btn-small btn-secondary" data-lang="project-code-link">Код</a>
           </div>
       </div>
   </div>
   ```

4. **Добавление изображений:**
   - Замените плейсхолдеры `.image-placeholder` своими изображениями:
   ```html
   <div class="hero-image">
       <img src="assets/images/team-photo.jpg" alt="Наша команда">
   </div>
   ```

### Настройка тем

Вы можете изменить цвета тем в файле `css/themes.css`. Настройте цветовую палитру под ваш бренд, изменив значения CSS-переменных:

```css
.light-theme {
    --color-primary: #0284c7;  /* Измените на ваш основной цвет */
    --color-secondary: #f1f5f9;  /* Измените на ваш вторичный цвет */
    /* Другие цвета */
}

.dark-theme {
    --color-primary: #0ea5e9;  /* Основной цвет для темной темы */
    /* Другие цвета темной темы */
}
```

## Публикация сайта

1. Загрузите все файлы на ваш хостинг через FTP или систему управления версиями.
2. В качестве альтернативы, вы можете использовать сервисы:
   - GitHub Pages
   - Netlify
   - Vercel

## Дополнительные настройки

### Добавление аналитики

Добавьте Google Analytics или Яндекс.Метрику, вставив соответствующий код перед закрывающим тегом `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### Настройка формы обратной связи

Для настройки отправки данных формы на реальный сервер, отредактируйте функцию `handleFormSubmit` в файле `js/main.js`:

```javascript
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Используйте fetch API для отправки данных на ваш сервер
    fetch('https://your-api-endpoint.com/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.');
        e.target.reset();
    })
    .catch(error => {
        console.error('Ошибка отправки формы:', error);
        alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова позже.');
    });
}
```

## Лицензия

Этот проект доступен для свободного использования и модификации.

---

Создано с ❤️ нашей командой, 2025