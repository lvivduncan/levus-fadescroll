// 14-07-2020
function fadeScroll(element, width, height) {
    const fadescroll = document.querySelector(element);
    const slides = fadescroll.querySelectorAll('div');

    const left = fadescroll.querySelector('#left');
    const right = fadescroll.querySelector('#right');

    let num = 0;
    const length = slides.length - 1;

    left.addEventListener('click', () => {
        slides.forEach(item => item.style.opacity = 0);
        slides[num].style.opacity = 1;
        num <= 0 ? num = length : num--;
    });

    right.addEventListener('click', () => {
        slides.forEach(item => item.style.opacity = 0);
        slides[num].style.opacity = 1;
        num < length ? num++ : num = 0;
    });

    // on load
    window.addEventListener('DOMContentLoaded', () => {
        fadescroll.style.height = `${fadescroll.clientWidth * width / height}px`;
    });

    // resize scroll
    window.addEventListener('resize', () => {
        fadescroll.style.height = `${fadescroll.clientWidth * width / height}px`;
    });

    // arrow left and right
    document.addEventListener('keydown', e => {
        if (e.key === "ArrowLeft" || e.code === "ArrowLeft") {
            slides.forEach(item => item.style.opacity = 0);
            slides[num].style.opacity = 1;
            num <= 0 ? num = length : num--;
        }
        if (e.key === "ArrowRight" || e.code === "ArrowRight") {
            slides.forEach(item => item.style.opacity = 0);
            slides[num].style.opacity = 1;
            num < length ? num++ : num = 0;
        }
    });
}

// init
fadeScroll('#levus-fadescroll', 600, 800);