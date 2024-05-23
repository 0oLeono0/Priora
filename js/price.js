const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.main__list',
        clickable: true, // Делает кнопки кликабельными
        renderBullet: function (index, className) {
            const styles = ['Групповые тренировки', 'Индивидуальные тренировки'];
            return '<li class="main__item ' + className + '"><button data-style="' + styles[index].toLowerCase().replace(/ /g, '') + '" class="main__btn">' + styles[index] + '</button></li>';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const select1 = new ItcCustomSelect('#select-1');
});