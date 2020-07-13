// 13-07-2020
{
    const fadescroll = document.querySelectorAll('#levus-fadescroll div');

    const left = document.querySelector('#left');
    const right = document.querySelector('#right');

    let num = 0;
    const length = fadescroll.length - 1;

    left.addEventListener('click', () => {
        fadescroll.forEach(item => item.style.opacity = 0);
        fadescroll[num].style.opacity = 1;
        num <= 0 ? num = length : num--;
    });

    right.addEventListener('click', () => {
        fadescroll.forEach(item => item.style.opacity = 0);
        fadescroll[num].style.opacity = 1;
        num < length ? num++ : num = 0;
    });
}

// todo: resize height and width