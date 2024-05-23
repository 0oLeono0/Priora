document.addEventListener('DOMContentLoaded', () => {
    const select1 = new ItcCustomSelect('#select-1');
    const select2 = new ItcCustomSelect('#select-2');
    const boxes = Array.from(document.querySelectorAll(".pricing__feature"));

    function boxHandler(e) {
        e.preventDefault();
        let currentBox = e.target.closest(".pricing__feature");
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
})