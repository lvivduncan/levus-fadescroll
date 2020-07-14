// 14-07-2020
{
    const fadescroll = document.querySelector('#levus-fadescroll');
    const slides = document.querySelectorAll('#levus-fadescroll div');
    const left = document.querySelector('#left');
    const right = document.querySelector('#right');

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

    // resize scroll
    window.addEventListener('resize', () => {
        fadescroll.style.height = `${fadescroll.clientWidth * 3 / 4}px`;
    });
}