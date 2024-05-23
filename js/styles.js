const params = new URLSearchParams(window.location.search);
const styleParam = params.get('style');

// Функция для получения индекса слайда по его id
function getSlideIndexById(id) {
  const slides = document.querySelectorAll('.swiper-slide');
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === id) {
      return i;
    }
  }
  return 0; // Возвращаем первый слайд по умолчанию, если id не найден
}

const initialSlide = getSlideIndexById(styleParam);

const swiper = new Swiper('.swiper', {
  initialSlide: initialSlide,
  pagination: {
    el: '.main__list',
    clickable: true,
    renderBullet: function (index, className) {
      const styles = ['HipHop', 'Vogue', 'Dancehall', 'HighHeels', 'HouseDance', 'Electro', 'Popping', 'JazzFunk'];
      const styleName = styles[index];
      return '<li class="main__item ' + className + '"><button data-style="' + styleName + '" class="main__btn">' + styleName.replace(/([A-Z])/g, ' $1').trim() + '</button></li>';
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const select1 = new ItcCustomSelect('#select-1');
});