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

    // Получаем все кнопки с классом "accardion__btn"
    const buttons = document.querySelectorAll('.accardion__btn');

    // Добавляем обработчик событий для каждой кнопки
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем значение атрибута data-style
            const style = this.getAttribute('data-style');
            // Перенаправляем пользователя на страницу styles.html с параметром стиля
            window.location.href = `styles.html?style=${style}`;
        });
    });
})