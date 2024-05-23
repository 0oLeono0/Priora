const swiper = new Swiper('.swiper', {
    initialSlide: 1, // Устанавливаем второй слайд активным по умолчанию
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const select1 = new ItcCustomSelect('#select-1');
  });
  