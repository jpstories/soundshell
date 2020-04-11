window.addEventListener('DOMContentLoaded', () => {

    let playBtn = document.querySelector('.playBtn');


    var wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#ddd',
        progressColor: 'rgb(255, 145, 0)',
        cursorColor: '#ddd',
        barWidth: 2,
        barRadius: 0,
        cursorWidth: 1,
        height: 150,
        barGap: 1.5,
        fillParent: true,
        responsive: true,
        scrollParent: false
    });


    wavesurfer.load('./Face My Fears (Japanese Version).mp3');
    let playPause = false;

    wavesurfer.on('ready', function () {

        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 32 && playPause == false) {
                wavesurfer.play();
                playPause = true;
                playBtn.textContent = 'Pause';
            } else {
                wavesurfer.pause();
                playBtn.textContent = 'Play';
                playPause = false;
            }
        });

        playBtn.addEventListener('click', () => {
            if (playPause == true) {
                playBtn.textContent = 'Play';
                wavesurfer.pause();
                playPause = false;
            } else {
                playBtn.textContent = 'Pause';
                wavesurfer.play();
                playPause = true;
            }
        });

        // Equalizer
        var EQ = [
            {
                f: 32,
                type: 'lowshelf'
            },
            {
                f: 64,
                type: 'peaking'
            },
            {
                f: 125,
                type: 'peaking'
            },
            {
                f: 250,
                type: 'peaking'
            },
            {
                f: 500,
                type: 'peaking'
            },
            {
                f: 1000,
                type: 'peaking'
            },
            {
                f: 2000,
                type: 'peaking'
            },
            {
                f: 4000,
                type: 'peaking'
            },
            {
                f: 8000,
                type: 'peaking'
            },
            {
                f: 16000,
                type: 'highshelf'
            }
        ];

        // Create filters
        var filters = EQ.map(function (band) {
            var filter = wavesurfer.backend.ac.createBiquadFilter();
            filter.type = band.type;
            filter.gain.value = 0;
            filter.Q.value = 1.5;
            filter.frequency.value = band.f;
            return filter;
        });

        // Connect filters to wavesurfer
        wavesurfer.backend.setFilters(filters);

        // Bind filters to vertical range sliders
        var container = document.querySelector('#equalizer');

        filters.forEach(function (filter) {
            var input = document.createElement('input');
            Object.assign(input, {
                type: 'range',
                min: -15,
                max: 15,
                value: 0,
                title: filter.frequency.value
            });

            input.style.display = 'inline-block';
            input.setAttribute('orient', 'vertical');

            wavesurfer.util.style(input, {
                webkitAppearance: 'slider-vertical',
                width: '30px',
                height: '100px'
            });

            container.appendChild(input);

            var onChange = function (e) {
                filter.gain.value = ~~e.target.value;
            };

            input.addEventListener('input', onChange);
            input.addEventListener('change', onChange);
        });
    });
});
