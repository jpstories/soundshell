
let playKey = document.querySelectorAll('.sc-button-play');
let pause = false;
playKey.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (pause === true) {
            playKey[0].classList.remove('sc-button-pause');
            playKey[1].classList.remove('sc-button-pause');
            pause = false;
        } else {
            playKey[0].classList.add('sc-button-pause');
            playKey[1].classList.add('sc-button-pause');
            pause = true;
        };
    });
});

        // item.textContent = 'Play';
        // item.setAttribute('title', 'Play');