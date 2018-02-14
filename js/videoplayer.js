$('video').mediaelementplayer({
  pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
  shimScriptAccess: 'always',
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
  videoWidth: '100%',
  videoHeight: '100%',
  enableAutosize: true,
});
