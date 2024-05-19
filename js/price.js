document.addEventListener('DOMContentLoaded', () => {
    const select1 = new ItcCustomSelect('#select-1');
    const btns = document.querySelectorAll('.train__btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.train__btn').forEach(button => {
                button.classList.remove('active');
            })
            btn.classList.add('active')
        })
    })
})