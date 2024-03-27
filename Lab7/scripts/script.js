document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const loader = document.createElement('div');
    loader.classList.add('loader');
    reviewsContainer.appendChild(loader);

    // Функция для выполнения HTTP-запроса и обработки данных
    function fetchReviews() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const randomReviews = getRandomElements(data, 10);
                renderReviews(randomReviews);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
                reviewsContainer.innerHTML = '<p class="error-message">⚠ Что-то пошло не так. Пожалуйста, попробуйте обновить страницу позже.</p>';
            });
    }

    // Функция для выбора случайных элементов из массива
    function getRandomElements(array, count) {
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
    }

    // Функция для отображения отзывов на странице
    function renderReviews(reviews) {
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p class="review__author">${review.name}</p>
                <p class="review__body">${review.body}</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    // Вызов функции для получения отзывов при загрузке страницы
    fetchReviews();
});

document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const refreshReviewsBtn = document.getElementById('refreshReviewsBtn');

    // Загрузка отзывов при загрузке страницы
    fetchReviews();

    // Обработчик клика на кнопке "Обновить отзывы"
    refreshReviewsBtn.addEventListener('click', function () {
        fetchReviews();
    });

    // Функция для выполнения HTTP-запроса и обработки данных
    function fetchReviews() {
        reviewsContainer.innerHTML = ''; // Очистка контейнера отзывов перед загрузкой новых
        const loader = document.createElement('div');
        loader.classList.add('loader');
        reviewsContainer.appendChild(loader);

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const randomReviews = getRandomElements(data, 10);
                renderReviews(randomReviews);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
                reviewsContainer.innerHTML = '<p class="error-message">⚠ Что-то пошло не так. Пожалуйста, попробуйте обновить страницу позже.</p>';
            });
    }

    // Функция для выбора случайных элементов из массива
    function getRandomElements(array, count) {
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
    }

    // Функция для отображения отзывов на странице
    function renderReviews(reviews) {
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p class="review__author">${review.name}</p>
                <p class="review__body">${review.body}</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }
});

