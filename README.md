<div>
  <img alt="thumbnail" src="https://crazytim.github.io/mario-soundboard/repo-thumbnail.jpg" width=350px />
  <br>
</div>

# Mario Soundboard

A fun unofficial sound-effects app. I made this so my kids could have sound-effects and music when playing the [Monopoly Gamer board game](https://boardgamegeek.com/boardgame/230408/monopoly-gamer). Collecting coins from the bank has never sounded so good!

Its a small showcase of the amazing sounds and icons of the Mario franchise.

View the [live version here](https://crazytim.github.io/mario-soundboard/).

## Getting Started

Host the files on a web server, or if you have Node.js run:

```sh
npm init
npm start
```

## Limitations

- We need to pre-load audio so sounds will play instantly as soon as they are clicked (with no buffering or loading). A good way to do this is to begin loading all audio async when the app loads and disable each button until it's audio has loaded. `HTML5 Audio` doesn't guarantee pre-load, so we must use `Web Audio API`.
- `Mp3` files can't loop seamlessly (see [reddit](https://www.reddit.com/r/html5/comments/2kd16q/seamless_looping_html5_audio/), [stackoverflow](https://stackoverflow.com/questions/7330023/gapless-looping-audio-html5), and [here](https://www.kevssite.com/seamless-audio-looping/)), so another format needs to be used for looping sounds, such as `WebM` or `Ogg`. Refer to MDN for more info about [audio codecs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs) and [containers](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers).

## Acknowledgements

### Audio:
- https://downloads.khinsider.com/mario
- https://themushroomkingdom.net/media/
- https://www.sounds-resource.com
- http://www.videogamesoundboards.com/?s=mario
- https://mfgg.net
- https://www.youtube.com/watch?v=sWDfNDKjj1Y

### Images:
- https://www.mariowiki.com
- https://mario.fandom.com/wiki/MarioWiki
- https://www.mariowiki.com
