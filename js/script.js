document.addEventListener('DOMContentLoaded', () => {
    const select1 = new ItcCustomSelect('#select-1');
    const boxes = Array.from(document.querySelectorAll(".accardion__box"));

    function boxHandler(e) {
        e.preventDefault();
        let currentBox = e.target.closest(".accardion__box");
        let currentContent = e.target.nextElementSibling;
        currentBox.classList.toggle("active");
        if (currentBox.classList.contains("active")) {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        } else {
            currentContent.style.maxHeight = 0
        }
    }

    boxes.forEach((box) => {
        box.addEventListener("click", boxHandler);
    })

    // Получаем все кнопки
    const buttons = document.querySelectorAll('.accardion__btn');
    const educators = document.querySelectorAll('.educators__block');
    const priceBtn = document.querySelector('.price__btn');
    const timetableBtn = document.querySelector('.timetable__btn');
    const franchiseBtn = document.querySelector('.franchise__btn');

    
    priceBtn.addEventListener('click', () => {
        window.location.href = `price.html`;
    })
    
    timetableBtn.addEventListener('click', () => {
        window.location.href = `schedule.html`;
    })

    franchiseBtn.addEventListener('click', () => {
        window.location.href = `franchise.html`;
    })
    // Добавляем обработчик событий для каждой кнопки
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем значение атрибута data-style
            const style = this.getAttribute('data-style');
            // Перенаправляем пользователя на страницу styles.html с параметром стиля
            window.location.href = `styles.html?style=${style}`;
        });
    });

    educators.forEach(educator => {
        educator.addEventListener('click', function() {
            // Получаем значение атрибута data-style
            const style = this.getAttribute('data-style');
            // Перенаправляем пользователя на страницу educators.html с параметром стиля
            window.location.href = `educators.html?style=${style}`;
        });
    });
})