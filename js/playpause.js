window.addEventListener('DOMContentLoaded', () => {
    let playKey = document.querySelector('.sc-button-play');
    let pause = false;
    playKey.addEventListener('click', (e) => {
        e.preventDefault();
        if (pause === true) {
            playKey.classList.remove('sc-button-pause');
            playKey.textContent = 'Play';
            playKey.setAttribute('title', 'Play');
            pause = false;
        } else {
            playKey.classList.add('sc-button-pause');
            playKey.textContent = 'Pause';
            playKey.setAttribute('title', 'Pause');
            pause = true;
        }
    });
})
