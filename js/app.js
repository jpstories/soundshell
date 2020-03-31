Amplitude.init({
  bindings: {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  debug: true,
  visualization: 'michaelbromley_visualization',
  songs: [
    {
      "name": "The Garpa whitewood",
      "artist": "Masashi Hamauzu",
      "album": "FF[XIII] OST - Disc Three",
      "url": "../song/ffxiii/13_1.mp3",
      "cover_art_url": "../img-song/ffxiii/lightning.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      "name": "The Vestige",
      "artist": "Masashi Hamauzu",
      "album": "FF[XIII] OST - Disc Three",
      "url": "../song/ffxiii/13_2.mp3",
      "cover_art_url": "../img-song/ffxiii/lightning.jpg",
      "visualization": "michaelbromley_visualization"
    },
    {
      "name": "Mysteries Abound",
      "artist": "Masashi Hamauzu",
      "album": "FF[XIII] OST - Disc Three",
      "url": "../song/ffxiii/13_3.mp3",
      "cover_art_url": "../img-song/ffxiii/lightning.jpg",
      "visualization": "michaelbromley_visualization"
    }
  ],

  volume: 50,
  waveforms: {
    sample_rate: 500
  },

  visualizations: [
    {
      object: MichaelBromleyVisualization,
      params: {

      }
    }
  ]
});

document.getElementsByClassName('visualization-toggle')[0].addEventListener('click', function () {
  if (this.classList.contains('visualization-off')) {
    this.classList.remove('visualization-off');
    this.classList.add('visualization-on');
    document.getElementById('large-now-playing-album-art').style.display = 'none';
    document.getElementById('large-visualization').style.display = 'block';
  } else {
    this.classList.remove('visualization-on');
    this.classList.add('visualization-off');
    document.getElementById('large-now-playing-album-art').style.display = 'block';
    document.getElementById('large-visualization').style.display = 'none';
  }
});

// time input
document.documentElement.classList.add('js');
addEventListener('input', e => {
	let _t = e.target;
	
	_t.style.setProperty('--val', +_t.value)
}, false);

// volume
let valueInput = document.querySelector('.amplitude-volume-slider');
valueInput.min = '0';
valueInput.max = '100';
valueInput.value = '50';