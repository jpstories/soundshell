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
        "name": "Risin' High (feat Raashan Ahmad)",
        "artist": "Ancient Astronauts",
        "album": "We Are to Answer",
        "url": "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "The Gun",
        "artist": "Lorn",
        "album": "Ask The Dust",
        "url": "https://521dimensions.com/song/08 The Gun.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "Anvil",
        "artist": "Lorn",
        "album": "Anvil",
        "url": "https://521dimensions.com/song/LORN - ANVIL.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "I Came Running",
        "artist": "Ancient Astronauts",
        "album": "We Are to Answer",
        "url": "https://521dimensions.com/song/ICameRunning-AncientAstronauts.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "First Snow",
        "artist": "Emancipator",
        "album": "Soon It Will Be Cold Enough",
        "url": "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "Terrain",
        "artist": "pg.lost",
        "album": "Key",
        "url": "https://521dimensions.com/song/Terrain-pglost.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/key.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "Vorel",
        "artist": "Russian Circles",
        "album": "Guidance",
        "url": "https://521dimensions.com/song/Vorel-RussianCircles.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "Intro / Sweet Glory",
        "artist": "Jimkata",
        "album": "Die Digital",
        "url": "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "Offcut #6",
        "artist": "Little People",
        "album": "We Are But Hunks of Wood Remixes",
        "url": "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "Dusk To Dawn",
        "artist": "Emancipator",
        "album": "Dusk To Dawn",
        "url": "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg",
        "visualization": "michaelbromley_visualization"
      },
      {
        "name": "Anthem",
        "artist": "Emancipator",
        "album": "Soon It Will Be Cold Enough",
        "url": "https://521dimensions.com/song/Anthem-Emancipator.mp3",
        "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
        "visualization": "michaelbromley_visualization"
      }
    ],
  
    waveforms: {
        sample_rate: 50
    },
  
    visualizations: [
      {
        object: MichaelBromleyVisualization,
        params: {
  
        }
      }
    ]
  });
  
  document.getElementsByClassName('visualization-toggle')[0].addEventListener('click', function(){
    if( this.classList.contains( 'visualization-off' ) ){
      this.classList.remove('visualization-off');
      this.classList.add('visualization-on');
      document.getElementById('large-now-playing-album-art').style.display = 'none';
      document.getElementById('large-visualization').style.display = 'block';
    }else{
      this.classList.remove('visualization-on');
      this.classList.add('visualization-off');
      document.getElementById('large-now-playing-album-art').style.display = 'block';
      document.getElementById('large-visualization').style.display = 'none';
    }
  });