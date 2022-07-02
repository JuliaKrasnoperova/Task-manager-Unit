// Работа с навигацией
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');


navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active')
});


// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');
// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
    // Для каждой ссылки добавляем прослушку по событию "клик"
    item.addEventListener('click', function () {
        navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки мобильной навигации
        nav.classList.remove('nav--active'); // Убираем активный класс у блока мобю навигации
    })
})

// Работа с формой поиска
const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function (e) {
    if (searchForm.classList.contains('search--visible')) {

    } else {
        e.preventDefault(); // отмена стандартного поведения формы для отправки данных
        searchForm.classList.toggle('search--visible');
    }

})