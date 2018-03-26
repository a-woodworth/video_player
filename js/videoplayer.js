// Mediaplayer setup for video
$('video').mediaelementplayer({
  pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
  shimScriptAccess: 'always',
  features: [
    'playpause',
    'current',
    'progress',
    'duration',
    'volume',
    'fullscreen'],
  videoWidth: '100%',
  videoHeight: '100%',
  enableAutosize: true,
});

// Highlight transcript text while video plays
const video = document.querySelector('#video');
const transcript = document.querySelector('#transcript');
const span = document.querySelectorAll('#transcript span');

video.addEventListener('timeupdate', () => {
  for (let i = 0; i < span.length; i++ ) {
    let currentTime = video.currentTime;
    let dataStart = span[i].getAttribute('data-start');
    let dataEnd = span[i].getAttribute('data-end');
    currentTime;
    if (currentTime >= dataStart && currentTime <= dataEnd) {
      span[i].className = 'is-highlighted';
    } else {
      span[i].className = '';
    }
  }
});

// Change video when section of transcript text selected
transcript.addEventListener('click', (e) => {
  if (e.target.tagName == 'SPAN') {
    video.currentTime = e.target.getAttribute('data-start');
  }
});
