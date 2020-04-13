window.addEventListener('DOMContentLoaded', () => {

    let playBtn = document.querySelector('.playBtn');
    let vinyl = document.querySelector('.vinyl__img');
    let artistName = document.querySelector('.artist__name');
    let songName = document.querySelector('.track__name');
    let songThemeName = document.querySelectorAll('.songTheme-name');
    let songThemeArtist = document.querySelectorAll('.songTheme-artist');
    let listGroup = document.querySelector('.list-group');

    var wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#fff',
        progressColor: 'orange',
        cursorColor: 'orange',
        barWidth: 2,
        barRadius: 0,
        cursorWidth: 1,
        height: 140,
        barGap: 2,
        fillParent: true,
        responsive: true,
        scrollParent: false
    });


    wavesurfer.load('./Face My Fears (Japanese Version).mp3');
    let playPause = false;

    wavesurfer.on('ready', function () {
        
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 32 && pause === true) {
                wavesurfer.pause();
                vinyl.classList.remove('vinyl__round');
                playKey[0].classList.remove('sc-button-pause');
                pause = false;
            } else if(e.keyCode == 32 && pause == false) {
                wavesurfer.play();
                vinyl.classList.add('vinyl__round');
                playKey[0].classList.add('sc-button-pause');
                pause = true;
            }
        });

        let playKey = document.querySelectorAll('.sc-button-play');
        let pause = false;
        playKey.forEach((item) => {
            item.addEventListener('click', (e) => {
                // console.log( playKey[0]);
                e.preventDefault();
                if (pause === true) {
                    
                    playKey[0].classList.remove('sc-button-pause');
                    pause = false;
                    wavesurfer.pause();
                    vinyl.classList.remove('vinyl__round');
                } else {
                    playKey[0].classList.add('sc-button-pause');
                    pause = true;
                    wavesurfer.play();
                    vinyl.classList.add('vinyl__round');
                };
            });
        });

        // // Equalizer
        // var EQ = [
        //     {
        //         f: 100,
        //         type: 'peaking'
        //     },
        //     {
        //         f: 1000,
        //         type: 'peaking'
        //     },
        //     {
        //         f: 6000,
        //         type: 'peaking'
        //     }
        // ];

        // // Create filters
        // var filters = EQ.map(function (band) {
        //     var filter = wavesurfer.backend.ac.createBiquadFilter();
        //     filter.type = band.type;
        //     filter.gain.value = 0;
        //     filter.Q.value = 0.5;
        //     filter.frequency.value = band.f;
        //     return filter;
        // });

        // // Connect filters to wavesurfer
        // wavesurfer.backend.setFilters(filters);

        // // Bind filters to vertical range sliders
        // var container = document.querySelector('#equalizer');

        // filters.forEach(function (filter) {
        //     var input = document.createElement('input');
        //     Object.assign(input, {
        //         type: 'range',
        //         min: -15,
        //         max: 15,
        //         value: 0,
        //         title: filter.frequency.value
        //     });

        //     input.style.display = 'inline-block';
        //     input.setAttribute('orient', 'vertical');

        //     wavesurfer.util.style(input, {
        //         webkitAppearance: 'slider-vertical',
        //         width: '30px',
        //         height: '100px'
        //     });

        //     container.appendChild(input);

        //     var onChange = function (e) {
        //         filter.gain.value = ~~e.target.value;
        //     };

        //     input.addEventListener('input', onChange);
        //     input.addEventListener('change', onChange);
        // });

        // The playlist links
        var links = document.querySelectorAll('#playlist a');
        let songThemeName = document.querySelectorAll('.songTheme-name');

        songThemeName.forEach((item) => {
            window.addEventListener('click', (e) => {

                if(e.target == item) {
                    songName.textContent = e.target.textContent;
                    artistName.textContent = e.target.textContent;
                };
            });
        });

        // artistName.textContent = e.target.textContent; 

        var currentTrack = 0;
        // console.log(links);

        // Load a track by index and highlight the corresponding link
        var setCurrentSong = function(index) {
            links[currentTrack].classList.remove('active__song');
            currentTrack = index;
            links[currentTrack].classList.add('active__song');
            wavesurfer.load(links[currentTrack].href);
        };

        // Load the track on click
        Array.prototype.forEach.call(links, function(link, index) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                setCurrentSong(index);
            });
        });

    //     // Play on audio load
    //     wavesurfer.on('ready', function() {
    //         wavesurfer.play();
    //     });

    //     wavesurfer.on('error', function(e) {
    //         console.warn(e);
    //     });

    //     // Go to the next track on finish
    //     wavesurfer.on('finish', function() {
    //         setCurrentSong((currentTrack + 1) % links.length);
    //     });

    //     // Load the first track
    //     setCurrentSong(currentTrack);
    // });
    });
});