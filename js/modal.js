document.addEventListener('DOMContentLoaded', function () {
    // Получить модальное окно
    const modal = document.getElementById('modal');
    const modalReg = document.getElementById('modal--reg');
    const request = document.getElementById('request');

    // Получить кнопку, которая открывает модальное окно
    const logins = document.querySelectorAll('.link-to-login');
    const regs = document.querySelectorAll('.link-to-reg');
    const reqs = document.querySelectorAll('.pricing__button');

    // Получить элемент <span>, который закрывает модальное окно
    const spans = document.querySelectorAll('.modal__close');

    // Когда пользователь нажимает на кнопку, открыть модальное окно
    logins.forEach(login => {
        login.addEventListener('click', function (event) {
            event.preventDefault();
            modalReg.style.display = 'none';
            request.style.display = 'none';
            modal.style.display = 'block';
            document.body.classList.add('no-scroll');
        });
    });

    regs.forEach(reg => {
        reg.addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = 'none';
            request.style.display = 'none';
            modalReg.style.display = 'block';
            document.body.classList.add('no-scroll');
        });
    });

    reqs.forEach(req => {
        req.addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = 'none';
            request.style.display = 'block';
            modalReg.style.display = 'none';
            document.body.classList.add('no-scroll');
        });
    });


    // Когда пользователь нажимает на <span> (x), закрыть модальное окно
    spans.forEach(span => {
        span.addEventListener('click', function () {
            modal.style.display = 'none';
            modalReg.style.display = 'none';
            request.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });
    })

    // Когда пользователь нажимает в любом месте вне модального окна, закрыть его
    window.addEventListener('click', function (event) {
        if (event.target === modal || event.target === modalReg || event.target === request) {
            modal.style.display = 'none';
            modalReg.style.display = 'none';
            request.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });

    // Переключение видимости пароля
    const passwordInput = document.getElementById('password');
    const passwordInputReg = document.getElementById('password-reg');
    const passwordInputRegRepet = document.getElementById('password-repet');
    const toggles = document.querySelectorAll('.password-toggle');
    const toggleReg = document.querySelector('.password-toggle--reg');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            if (passwordInput.type === 'password' || passwordInputReg.type === 'password') {
                passwordInput.type = 'text';
                passwordInputReg.type = 'text';
            } else {
                passwordInput.type = 'password';
                passwordInputReg.type = 'password';
            }
        });
    })

    toggleReg.addEventListener('click', function () {
        if (passwordInputRegRepet.type === 'password') {
            passwordInputRegRepet.type = 'text';
        } else {
            passwordInputRegRepet.type = 'password';
        }
    });
});
