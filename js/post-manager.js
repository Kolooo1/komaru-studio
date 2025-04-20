/**
 * Система управления публикациями
 */

// Ключи для localStorage
const POSTS_KEY = 'komaru-posts';

// Пример постов для инициализации
const defaultPosts = [
    {
        id: '1',
        title: 'Первый пост команды',
        preview: 'Добро пожаловать в нашу систему публикаций. Это первый пост для демонстрации!',
        content: 'Добро пожаловать в нашу систему публикаций Komaru Studio. Эта система позволяет авторизованным пользователям создавать и управлять публикациями. Вы можете создавать, редактировать и просматривать публикации, в зависимости от ваших прав доступа.',
        author: 'admin',
        authorName: 'Администратор',
        date: '2024-06-01',
        imageUrl: ''
    },
    {
        id: 'permanent',
        title: 'Заголовок постоянной публикации',
        preview: 'Краткое описание постоянной публикации. Этот пост всегда будет отображаться на странице.',
        content: 'Полное содержание постоянной публикации. Вы можете отредактировать заголовок и описание по вашему усмотрению.',
        author: 'admin',
        authorName: 'Администратор',
        date: '2025-06-15',
        imageUrl: 'https://i.yapx.ru/Yvio3.png'
    }
];

/**
 * Инициализация системы публикаций
 */
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация постов при первом запуске
    initializePosts();
    
    // Обработчик формы публикации, если на странице редактирования
    const postForm = document.getElementById('post-form');
    if (postForm) {
        postForm.addEventListener('submit', handlePostSubmit);
        loadPostForEditing();
    }
    
    // Загрузка публикаций, если на странице публикаций
    if (window.location.pathname.includes('posts.html')) {
        loadPosts();
    }
});

/**
 * Проверка наличия постов и создание дефолтных если нужно
 */
function initializePosts() {
    let posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    let modified = false;
    
    // Если нет постов, используем дефолтные
    if (posts.length === 0) {
        posts = [...defaultPosts];
        modified = true;
    } else {
        // Проверяем наличие постоянной публикации
        const permanentPostExists = posts.some(post => post.id === 'permanent');
        
        // Если постоянной публикации нет, добавляем её
        if (!permanentPostExists) {
            const permanentPost = defaultPosts.find(post => post.id === 'permanent');
            if (permanentPost) {
                posts.push(permanentPost);
                modified = true;
            }
        }
    }
    
    // Сохраняем посты, если были изменения
    if (modified) {
        localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    }
}

/**
 * Загрузка публикаций на страницу
 */
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;
    
    // Загрузка публикаций из localStorage
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    
    // Очистка контейнера
    postsContainer.innerHTML = '';
    
    if (posts.length === 0) {
        postsContainer.innerHTML = '<div class="no-posts">Публикации отсутствуют</div>';
        return;
    }
    
    // Сортировка по дате (новые сначала)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Получение текущего пользователя
    const currentUser = window.AuthSystem ? window.AuthSystem.getCurrentUser() : null;
    const isAdmin = window.AuthSystem ? window.AuthSystem.isAdmin() : false;
    
    // Отображение каждой публикации
    posts.forEach(post => {
        // Проверка, может ли пользователь редактировать публикацию
        const canEdit = isAdmin || (currentUser && currentUser.username === post.author);
        
        // Форматирование даты
        const formattedDate = formatDate(post.date);
        
        // Создание карточки публикации
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        
        // HTML для карточки
        postCard.innerHTML = `
            <div class="post-image" style="${post.imageUrl ? `background-image: url(${post.imageUrl})` : ''}">
                ${!post.imageUrl ? '<div class="post-image-placeholder">Изображение отсутствует</div>' : ''}
            </div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <div class="post-preview">${post.preview}</div>
                <div class="post-meta">
                    <div class="post-info">
                        <span class="post-author">${post.authorName}</span> &bull; 
                        <span class="post-date">${formattedDate}</span>
                    </div>
                    <div class="post-actions">
                        <a href="post-detail.html?id=${post.id}" class="btn btn-small">Читать</a>
                        ${canEdit ? `<a href="edit-post.html?id=${post.id}" class="btn btn-small btn-secondary">Редактировать</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        postsContainer.appendChild(postCard);
    });
}

/**
 * Обработка отправки формы публикации
 * @param {Event} e - Событие отправки формы
 */
function handlePostSubmit(e) {
    e.preventDefault();
    
    // Проверка авторизации
    if (!window.AuthSystem || !window.AuthSystem.isAuthor()) {
        alert('У вас нет прав для создания публикаций');
        return;
    }
    
    const currentUser = window.AuthSystem.getCurrentUser();
    
    // Получение данных из формы
    const postId = document.getElementById('post-id').value;
    const title = document.getElementById('post-title').value;
    const preview = document.getElementById('post-preview').value;
    const content = document.getElementById('post-content').value;
    const imageUrl = document.getElementById('post-image').value;
    
    // Загрузка существующих публикаций
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    
    if (postId) {
        // Редактирование существующей публикации
        const postIndex = posts.findIndex(p => p.id === postId);
        
        // Проверка прав доступа
        if (postIndex !== -1) {
            const post = posts[postIndex];
            
            if (currentUser.username !== post.author && !window.AuthSystem.isAdmin()) {
                alert('У вас нет прав для редактирования этой публикации');
                return;
            }
            
            // Особая обработка для постоянной публикации
            if (postId === 'permanent') {
                // Сохраняем id и изображение, обновляем остальные поля
                posts[postIndex] = {
                    ...post,
                    title,
                    preview,
                    content,
                    // Не меняем изображение для постоянной публикации
                    imageUrl: post.imageUrl,
                    lastEdited: new Date().toISOString().split('T')[0]
                };
            } else {
                // Обычное обновление публикации
                posts[postIndex] = {
                    ...post,
                    title,
                    preview,
                    content,
                    imageUrl,
                    lastEdited: new Date().toISOString().split('T')[0]
                };
            }
        }
    } else {
        // Создание новой публикации
        const newPost = {
            id: Date.now().toString(),
            title,
            preview,
            content,
            imageUrl,
            author: currentUser.username,
            authorName: currentUser.name,
            date: new Date().toISOString().split('T')[0]
        };
        
        posts.push(newPost);
    }
    
    // Сохранение публикаций
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    
    // Перенаправление на страницу публикаций
    alert(postId ? 'Публикация обновлена' : 'Публикация создана');
    window.location.href = 'posts.html';
}

/**
 * Загрузка публикации для редактирования
 */
function loadPostForEditing() {
    // Получение ID публикации из URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) return; // Новая публикация
    
    // Изменение заголовка страницы
    const editorTitle = document.getElementById('editor-title');
    if (editorTitle) {
        editorTitle.textContent = 'Редактирование публикации';
    }
    
    // Загрузка публикаций
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        alert('Публикация не найдена');
        window.location.href = 'posts.html';
        return;
    }
    
    // Проверка прав доступа
    const currentUser = window.AuthSystem ? window.AuthSystem.getCurrentUser() : null;
    const isAdmin = window.AuthSystem ? window.AuthSystem.isAdmin() : false;
    
    if (!currentUser || (currentUser.username !== post.author && !isAdmin)) {
        document.getElementById('editor-container').style.display = 'none';
        document.getElementById('unauthorized-message').style.display = 'block';
        return;
    }
    
    // Заполнение формы данными публикации
    document.getElementById('post-id').value = post.id;
    document.getElementById('post-title').value = post.title;
    document.getElementById('post-preview').value = post.preview;
    document.getElementById('post-content').value = post.content;
    
    const imageUrlInput = document.getElementById('post-image');
    imageUrlInput.value = post.imageUrl || '';
    
    // Особая обработка для постоянной публикации
    if (postId === 'permanent') {
        // Блокируем поле изображения для постоянной публикации
        imageUrlInput.disabled = true;
        imageUrlInput.title = 'Изображение нельзя изменить для этой публикации';
        
        // Добавляем поясняющее сообщение
        const imageGroup = imageUrlInput.closest('.form-group');
        if (imageGroup) {
            const helpText = document.createElement('div');
            helpText.className = 'form-help-text';
            helpText.style.fontSize = '0.85em';
            helpText.style.marginTop = '5px';
            helpText.style.color = 'var(--color-text-secondary)';
            helpText.textContent = 'Изображение для этой публикации не может быть изменено.';
            imageGroup.appendChild(helpText);
        }
        
        // Также скроем кнопку удаления, если она есть
        const deleteBtn = document.getElementById('delete-post-btn');
        if (deleteBtn) {
            deleteBtn.style.display = 'none';
        }
    }
}

/**
 * Форматирование даты в удобочитаемый вид
 * @param {string} dateString - Строка с датой
 * @returns {string} - Отформатированная дата
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Удаление публикации
 * @param {string} postId - ID публикации для удаления
 * @param {Function} callback - Функция обратного вызова после удаления
 */
function deletePost(postId, callback) {
    // Проверка авторизации
    if (!window.AuthSystem) return;
    
    const currentUser = window.AuthSystem.getCurrentUser();
    const isAdmin = window.AuthSystem.isAdmin();
    
    if (!currentUser) {
        if (window.Notifications) {
            window.Notifications.error('Необходимо войти в систему');
        } else {
            alert('Необходимо войти в систему');
        }
        return;
    }
    
    // Защита постоянной публикации от удаления
    if (postId === 'permanent') {
        if (window.Notifications) {
            window.Notifications.error('Эта публикация не может быть удалена');
        } else {
            alert('Эта публикация не может быть удалена');
        }
        return;
    }
    
    // Загрузка публикаций
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    
    // Поиск индекса публикации
    const postIndex = posts.findIndex(p => p.id === postId);
    
    if (postIndex === -1) {
        if (window.Notifications) {
            window.Notifications.error('Публикация не найдена');
        } else {
            alert('Публикация не найдена');
        }
        return;
    }
    
    const post = posts[postIndex];
    
    // Проверка прав доступа (только автор или админ могут удалить)
    if (currentUser.username !== post.author && !isAdmin) {
        if (window.Notifications) {
            window.Notifications.error('У вас нет прав для удаления этой публикации');
        } else {
            alert('У вас нет прав для удаления этой публикации');
        }
        return;
    }
    
    // Удаление публикации
    posts.splice(postIndex, 1);
    
    // Сохранение обновленного массива публикаций
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    
    // Вызов callback-функции, если она передана
    if (typeof callback === 'function') {
        callback();
    } else {
        if (window.Notifications && window.Notifications.redirect) {
            window.Notifications.redirect('Публикация успешно удалена', 'success', 'posts.html');
        } else if (window.Notifications) {
            window.Notifications.success('Публикация успешно удалена');
            window.location.href = 'posts.html';
        } else {
            alert('Публикация успешно удалена');
            window.location.href = 'posts.html';
        }
    }
}

/**
 * Получение публикации по ID
 * @param {string} postId - ID публикации
 * @param {Function} callback - Функция обратного вызова с публикацией
 */
function getPost(postId, callback) {
    // Загрузка публикаций
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    
    // Поиск публикации по ID
    const post = posts.find(p => p.id === postId);
    
    // Вызов callback-функции с найденной публикацией или null
    if (typeof callback === 'function') {
        callback(post || null);
    }
    
    return post || null;
}

// Добавляем функцию в экспорт
window.PostManager = {
    deletePost,
    getPost
}; 