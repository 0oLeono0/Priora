document.addEventListener('DOMContentLoaded', () => {
    const select1 = new ItcCustomSelect('#select-1');
    // Функция для показа блока по стилю и изменения стиля кнопки
    function showStyleBlock(style) {
        // Скрываем все блоки
        document.querySelectorAll('.main__educator').forEach(block => {
            block.classList.remove('active');
        });
        // Показываем блок с соответствующим id
        const activeBlock = document.getElementById(style);
        if (activeBlock) {
            activeBlock.classList.add('active');
        }

        // Сбрасываем стиль всех кнопок
        document.querySelectorAll('.main__btn').forEach(button => {
            button.classList.remove('active');
        });
        // Устанавливаем стиль активной кнопки
        const activeButton = document.querySelector(`.main__btn[data-style="${style}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Проверка параметров URL
    const params = new URLSearchParams(window.location.search);
    const styleParam = params.get('style');
    if (styleParam) {
        showStyleBlock(styleParam);
    }

    // Добавляем обработчики событий для кнопок
    const buttons = document.querySelectorAll('.main__btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const style = this.getAttribute('data-style');
            showStyleBlock(style);
            // Обновляем URL без перезагрузки страницы
            window.history.pushState({}, '', `?style=${style}`);
        });
    });
})