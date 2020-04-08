import * as util from './mario-util.js'
import items from './mario-items.js'
import itemGroups from './mario-groups.js'

export default class MarioSoundboard {

  constructor() {

    this.container = document.querySelector('#content-wrapper');
    this.container.classList.add('hidden');
    this.loading_wrapper = document.querySelector('#loading-wrapper');
    this.wrapper = document.querySelector('#item-wrapper');

    this.items = items;
    this.itemGroups = itemGroups;     // group items under a heading
    this.activeMusicClip = null;      // don't allow playing more than one 'music' clip at a time
    this.imgCount = 0;                // number of images we are loading
    this.imgLoadedCount = 0;          // number of images we have loaded so far

     // set default values for each item if undefined
    Object.values(this.items).forEach((i) => {

      if (typeof i.restartWhenClicked == 'undefined') { i.restartWhenClicked = true; } // if the clip is currently playing when the btn is clicked, restart the clip, otherwise stop it
      if (typeof i.isMusic == 'undefined') { i.isMusic = false; }    // only one music clip is allowed to play at a time
      if (typeof i.clipCount == 'undefined') { i.clipCount = 0; }    // number of clips in the set
      if (typeof i.loop == 'undefined') { i.loop = false; }          // loop the clip
      if (typeof i.title == 'undefined') { i.title = null; }
      if (typeof i.play == 'undefined') { i.play = null; }           // custom play function
      if (typeof i.stop == 'undefined') { i.stop = null; }           // custom stop function
      if (typeof i.format == 'undefined') { i.format = 'mp3'; }      // specify file format
      if (typeof i.sprite == 'undefined') { i.sprite = null; }       // howler sprite

      if (typeof i.imgFileName == 'undefined') {
        i.imgFileName = 'img/items/' + i.fileName + '.png'; // guess the file name
      } else if (i.imgFileName != null) {
        i.imgFileName = 'img/items/' + i.imgFileName; // image has been specified
      } else {
        // image is null
      }

      i.isPlaying = false;              // true if the item is playing a sound
      i.isPlayingSpriteLoop = false;    // true if we have finished playing the '__default' sprite and we are now playing the 'loop' sprite

      i.render = () => {
        if (i.isPlaying) {
          i.btn.parentElement.classList.add('playing');
        } else {
          i.btn.parentElement.classList.remove('playing');
        }
      }

      i.willLoop = () => { // true if the item will loop
        return (i.sprite?.['loop'][2] == true || i.sprite?.['__default'][2] == true || i.loop);
      }

    });

    // initalise item groups
    for (const j in this.items) {
      const item = this.items[j];
      let matchedGroup = null;
      for (const g in this.itemGroups) {
        if (this.itemGroups[g].doesItemBelongToGroup(item)) {
          matchedGroup = g;
          break;
        }
      }
      if (matchedGroup == null) matchedGroup = 'other';
      this.itemGroups[matchedGroup].items.push(item)
      //console.log(matchedGroup);
    }

    // create buttons for each item
    for (const [key, value] of Object.entries(this.itemGroups)) {

      if (value.items.length == 0) { break; }

      { // create heading
        const el = document.createElement('h1');
        el.textContent = key.toUpperCase();
        this.wrapper.appendChild(el);
      }

      // create item grid
      const itemGrid = document.createElement('div');
      itemGrid.classList.add('item-grid');
      this.wrapper.appendChild(itemGrid);

      // loop over each item in the group
      Object.values(value.items).forEach((i) => {

        // set play|stop|end events...

        if (i.play == null) {
          if (i.sprite !== null && i.sprite.hasOwnProperty('loop') && i.sprite.hasOwnProperty('__default') ) {
            // play the '__default' sprite (the intro), followed by the 'loop' sprite

            i.clip = new Howl({
              html5: true, // don't wait for the full file to be downloaded and decoded before playing
              src: ['audio/' + i.fileName + '.' + i.format],
              sprite: i.sprite,
              onload: () => { this._soundLoaded(i); },
            })

            i.clip.on('play', () => {
              i.isPlaying = true;
              i.render();
              this._initaliseProgressBar(i)
            });

            i.clip.on('stop', () => {
              i.isPlaying = false;
              i.isPlayingSpriteLoop = false;
              i.render();
              this._resetProgressBar(i);
            });

            i.clip.on('end', () => {
              if (!i.isPlayingSpriteLoop) {
                i.isPlayingSpriteLoop = true;
                i.clip.play('loop');
              }
            });

          } else if (i.clipCount == 0) { // single clip

            i.clip = new Howl({
              html5: true, // don't wait for the full file to be downloaded and decoded before playing
              src: ['audio/' + i.fileName + '.' + i.format],
              loop: i.loop,
              sprite: i.sprite,
              onload: () => { this._soundLoaded(i); },
            })

            i.clip.on('play', () => {
              i.isPlaying = true;
              i.render();
              this._initaliseProgressBar(i)
            });

            i.clip.on('stop', () => {
              i.isPlaying = false;
              i.render();
              this._resetProgressBar(i);
            });

            i.clip.on('end', () => {
              if (!i.willLoop() && this.activeMusicClip == i.clip) {
                this.activeMusicClip = null;
              }
              i.isPlaying = false;
              i.render();
              this._clearProgressBar(i);
            });

          } else if (i.clipCount >= 0) { // mulitple clips

            i.next = util.fillArrayWithNumbers(i.clipCount);
            i.clips = util.fillArrayWithNumbers(i.clipCount);

            i.next.forEach((set_value, set_key) => {

              i.clips[set_key] = new Howl({
                html5: true, // don't wait for the full file to be downloaded and decoded before playing
                src: ['audio/' + i.fileName + '/' + set_value + '.' + i.format],
                loop: i.loop
              })

              i.clips[set_key].on('play', () => {
                i.isPlaying = true;
                i.render();
              });

              i.clips[set_key].on('stop', () => {
                i.isPlaying = false;
                i.render();
              });

              i.clips[set_key].on('end', () => {
                i.isPlaying = false;
                i.render();
              });

            });

          }
        }

        // create button wrapper
        const btnWrapper = document.createElement('div');
        btnWrapper.classList.add('btn-wrapper');
        itemGrid.appendChild(btnWrapper);

        { // create the ring behind the button
          const el = document.createElement('div');
          el.classList.add('btn-ring');
          btnWrapper.appendChild(el);
        }

        // create button
        const btn = document.createElement('div');
        i.btn = btn;
        btn.classList.add('btn');
        btn.onclick = () => {
          this._play(i)
        };
        btnWrapper.appendChild(btn);

        // set and load the img
        if (i.imgFileName != null) {

          btn.setAttribute('style', 'background-image: url(' + i.imgFileName + ')');

          const el = new Image();
          this.imgCount++;
          el.onload = () => { this._imgLoaded(); }
          el.src = i.imgFileName;

        }

        // create title
        if (i.title != null) {
          const el = document.createElement('div');
          el.classList.add('title');
          el.innerHTML = i.title.toUpperCase();
          btnWrapper.appendChild(el);
        }

        // create 'set' icon
        if (i.clipCount >= 1) {
          const el = document.createElement('div');
          el.classList.add('icon_set');
          btn.appendChild(el);
        }

      });

    }

  }

  _imgLoaded() {

    this.imgLoadedCount++;

    // hide the loading icon once all images have loaded
    if (this.imgLoadedCount === this.imgCount) {
      this.loading_wrapper.classList.add('hidden');
      this.container.classList.remove('hidden');
    }
  }

  _soundLoaded(i) {
    if(i.clip.duration() <= 0.5) return;
    // create progress bar
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    el.setAttribute('viewBox', '0 0 36 36');
    el.classList.add('progress-bar');
    el.innerHTML = `<circle class='foreground' r='16' cx='18' cy='18'  stroke-dasharray='100.53096 100.53096'/>`;
    i.btn.parentElement.appendChild(el);
  }

  _initaliseProgressBar(i) {
    const prog = i.btn.parentElement.querySelector('.progress-bar');
    if (!prog) return;
    this._resetProgressBar(i);

    i.progressBarInterval = setTimeout(() => { // wait until the change has been rendered
      prog.style.opacity ='1';

      i.progressBarInterval = setInterval(() => {
        this._setProgressBar(i);
      },50);

    },100);
  }

  _setProgressBar(i) {
    const prog = i.btn.parentElement.querySelector('.progress-bar');
    if (!prog) return;
    const percentage = (i.clip.seek() / (i.clip.duration()-0.05) * 100); // minus a small amount of time to account for silence at the ends of mp3 files
    prog.querySelector('.foreground').style.strokeDashoffset = 100 - Math.min(percentage, 100);
    //console.log(i.clip.duration() + ', ' + percentage);
  }

  _clearProgressBar(i) {
    const prog = i.btn.parentElement.querySelector('.progress-bar');
    if (!prog) return;
    clearInterval(i.progressBarInterval);
    prog.querySelector('.foreground').style.strokeDashoffset = 0; // 100%
    i.progressBarInterval = setTimeout(() => { // give time for the (subtle) transition animation to finish
      this._resetProgressBar(i)
    },100);
  }

  _resetProgressBar(i) {
    const prog = i.btn.parentElement.querySelector('.progress-bar');
    if (!prog) return;
    clearInterval(i.progressBarInterval);
    prog.style.opacity ='0';
    prog.querySelector('.foreground').style.strokeDashoffset = 100; // 0%
  }

  _play(i) {


    // don't allow certain clips to play concurrently
    let preventConcurrent = [
      ['mega-mushroom', 'super-star','wing-cap'],
    ];

    preventConcurrent.forEach(arr => {
      if (arr.includes(i.fileName)) {
         this.items.forEach(item => {
           if (item !== i && arr.includes(item.fileName)) {
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
    if (i.isPlaying) {

      if (this.activeMusicClip == i.clip) {
        this.activeMusicClip = null;
      }

      if (i.restartWhenClicked) {
        i.clip.stop(); // clip will be played again below...

      } else {

        if (i.stop != null) {
          i.stop();
        } else {
          i.clip.stop();
        }

        return // don't play the clip

      }
    }

    // select new random clip
    if (i.clipCount >= 1) {
      let ranIndex = this._spin(i);
      i.clip = i.clips[ranIndex];
    }

    if (i.play != null) {
      i.play();
    } else {
      i.clip.play();
    }

    if (i.isMusic) {
      this.activeMusicClip = i.clip;
    }

  }

  _spin(i) {

    // if we have played all the clips in the set, reset the set
    if (i.next.length == 0) {
      i.next = util.fillArrayWithNumbers(i.clipCount);
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

}
