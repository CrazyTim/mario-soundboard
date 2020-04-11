export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fillArrayWithNumbers(n) {
  let arr = Array.apply(null, Array(n));
  return arr.map(function (x, i) { return i });
}

export function fadeAudio (clip, durationSeconds) {
  // wip
  let audio = clip;
  let interval = (durationSeconds * 1000) / 20;
  let newVolume = audio.volume;
  let fadeAudioInterval = setInterval(function () {
    newVolume = (parseFloat(newVolume) - 0.05).toFixed(2);
    if(newVolume >= 0){
      audio.volume = newVolume;
    } else {
      audio.pause();
      clearInterval(fadeAudioInterval);
    }
  }, interval);
}
