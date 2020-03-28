import * as util from './mario-util.js'
import items from './mario-items.js'

export default class MarioSoundboard {

  constructor(settings) {

    this.container = document.getElementById("mario-wrapper");
    this.container.classList.add('hidden');
    this.loading_wrapper = document.getElementById("loading-wrapper");
    this.wrapper = document.getElementById("item-grid");

    this.items = items;               //
    this.activeMusicClip = null;      // don't allow playing more than one 'music' clip at a time
    this.imgCount = 0;                // number of images we are loading
    this.imgLoadedCount = 0;          // number of images we have loaded so far

    this._ini();

  }

  _ini() {

    // initalise each item
    Object.values(this.items).forEach((i, key) => {

      // set default values if undefined
      if (typeof i.restartWhenClicked == 'undefined') { i.restartWhenClicked = true; } // if the clip is currently playing when the btn is clicked, restart the clip, otherwise stop it
      if (typeof i.isMusic == 'undefined') { i.music = false; }
      if (typeof i.count == 'undefined') { i.count = 0; }  // number of clips in the set
      if (typeof i.loop == 'undefined') { i.loop = false; }
      if (typeof i.displayName == 'undefined') { i.displayName = null; }
      if (typeof i.icon == 'undefined') { i.icon = false; }
      if (typeof i.onPlay == 'undefined') { i.onPlay = null; }
      if (typeof i.format == 'undefined') { i.format = 'mp3'; }
      if (typeof i.imgUrl == 'undefined') {
        if (i.isMusic && !i.icon) {
          i.imgUrl = 'img/music-green.png';// generic music icon
        } else {
          i.imgUrl = 'img/items/' + i.fileName + '.png';
        }
      }

      i.isPlaying = () => {

        if (typeof i.clip != "undefined") {
          if (i.clip.playing()) return true;
        } else {
          i.clips.forEach(item => {
             if (item.playing()) return true;
          });
        }

        return false

      }

      //console.log(key + ': ' + i.fileName + '.' + i.format);

      // set clip
      if (i.count == 0 && i.onPlay == null) {

        i.clip = new Howl({
          src: ['audio/' + i.fileName + '.' + i.format],
          loop: i.loop
        })

        i.clip.on('play', () => {
          this._renderItem(i);
        });

        i.clip.on('stop', () => {
          this._renderItem(i);
        });

        // event for when it stops playing because it reached the end of the clip
        if (!i.loop) {
          i.clip.on('end', () => {
            //console.log(key + ': end');
            if (this.activeMusicClip == i.clip) {
              this.activeMusicClip = null;
            }
            this._renderItem(i);
          });
        }

      } else if (i.count >= 0 && i.onPlay == null) {

        i.next = util.fillArrayWithNumbers(i.count);
        i.clips = util.fillArrayWithNumbers(i.count);

        i.next.forEach((set_value, set_key) => {
          i.clips[set_key] = new Howl({
            src: ['audio/' + i.fileName + '/' + set_value + '.' + i.format],
            loop: i.loop
          })

          i.clips[set_key].on('play', () => {
            this._renderItem(i);
          });

          i.clips[set_key].on('stop', () => {
            this._renderItem(i);
          });

          i.clips[set_key].on('end', () => {
            this._renderItem(i);
          });

        });
      }

      // create DOM object
      const btn = document.createElement("div");
      i.btn = btn;
      btn.setAttribute('class', 'btn');
      btn.onclick = () => { this._play(key) };
      this.wrapper.appendChild(btn);

      // set the img
      if (i.imgUrl != null) {

        btn.setAttribute('style', 'background-image: url(' + i.imgUrl + ')');

        // load the img
        const img = new Image();
        this.imgCount++;
        img.onload = () => { this._imgLoaded(); }
        img.src = i.imgUrl;

      }

      // show title
      if (i.displayName != null) {
        const title = document.createElement("div");
        title.setAttribute('class', 'title');
        title.innerHTML = i.displayName.toUpperCase();
        btn.appendChild(title);
      }

      // show set icon
      if (i.count >= 1) {
        const set_icon = document.createElement("div");
        set_icon.setAttribute('class', 'icon_set');
        btn.appendChild(set_icon);
      }

    });

  }

  _imgLoaded() {

    this.imgLoadedCount++;

    // hide the loading icon once all images have loaded
    if (this.imgLoadedCount === this.imgCount) {
      this.loading_wrapper.classList.add('hidden');
      this.container.classList.remove('hidden');
    }
  }

  _play(itemIndex) {

    const i = this.items[itemIndex];

    // don't allow certain clips to play concurrently
    let preventConcurrent = [
      ['mega mushroom', 'star'],
    ];

    preventConcurrent.forEach(arr => {
      if (arr.includes(i.displayName)) {
         this.items.forEach(item => {
           if (item !== i && arr.includes(item.displayName)) {
             item.clip.stop();
           }
         });
      }
    });

    if (i.isMusic && this.activeMusicClip != null && this.activeMusicClip !== i.clip) {
      this.activeMusicClip.stop(); // stop playing prev music
      this.activeMusicClip = null;
    }

    // stop the clip if it is currently playing
    if (i.isPlaying()) {

      if (this.activeMusicClip == i.clip) {
        this.activeMusicClip = null;
      }

      if (i.restartWhenClicked) {
        i.clip.stop(); // clip will be played again below...

      } else {

        if (i.onStop != null) {
          i.onStop(i);
        } else {
          i.clip.stop();
        }

        return // don't play the clip

      }
    }

    // select new random clip
    if (i.count >= 1) {
      let ranIndex = this._spin(itemIndex);
      i.clip = i.clips[ranIndex];
    }

    if (i.onPlay != null) {
      i.onPlay(i);
    } else {
      i.clip.play();
    }

    if (i.isMusic) {
      this.activeMusicClip = i.clip;
    }

  }

  _spin(itemIndex) {

    const i = this.items[itemIndex];

    // if we have played all the clips in the set, reset the set
    if (i.next.length == 0) {
      i.next = util.fillArrayWithNumbers(i.count);
    }

    // selecet a random item
    let rand;
    let ri
    do {
        rand = util.getRandomInt(0, i.next.length - 1);
        ri = i.next[rand];
    } while (ri == i.last);

    i.next.splice(rand,1); // remove the item so it can't be played until we reset the set..

    i.last = ri; // remember which one we played last so we don't play it twice in a row after reseting the set

    return ri;

  }

  _renderItem(item) {

    if (item.isPlaying()) {
      item.btn.setAttribute('playing', 'true');
    } else {
      item.btn.setAttribute('playing', 'false');
    }

  }

}
