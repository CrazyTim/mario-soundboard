import {getRandomInt} from './mario-util.js'

export default [
  {
    fileName: 'coin',
    displayName: 'coin',
  },
  {
    fileName: 'jump',
    displayName: 'jump',
  },
  {
    fileName: 'spin-jump',
    displayName: 'spin jump',
  },
  {
    fileName: 'kick',
    displayName: 'kick',
  },
  {
    fileName: 'stomp',
    displayName: 'stomp',
    imgUrl: null,
  },
  {
    fileName: 'mario-propeller-suit-fly',
    displayName: 'propeller',
  },
  {
    fileName: 'mario-fireball',
    displayName: 'fireball',
  },
  {
    fileName: 'iceball',
    displayName: 'iceball',
    format: 'ogg',
  },
  {
    fileName: 'yoshi-mount',
    displayName: 'yoshi<br>jump on',
  },
  {
    fileName: 'death',
    displayName: 'death',
    imgUrl: null,
  },
  {
    fileName: 'sprout',
    displayName: 'powerup<br>appears',
  },
  {
    fileName: 'powerup',
    displayName: 'powerup',
  },
  {
    fileName: 'powerdown',
    displayName: 'powerdown',
    imgUrl: null,
  },
  {
    fileName: '1up',
    displayName: '1up',
  },
  {
    fileName: 'super-star',
    displayName: 'star',
    restartWhenClicked: false,
    loop: true,
    icon: true,
    format: 'ogg',
  },
  {
    fileName: 'mega-mushroom',
    displayName: 'mega mushroom',
    restartWhenClicked: false,
    loop: true,
    icon: true,
    format: 'ogg',
  },
  {
    fileName: 'red-shell',
    displayName: 'red shell',
    restartWhenClicked: false,
  },
  {
    fileName: 'green-shell',
    displayName: 'green shell',
    restartWhenClicked: false,
  },
  {
    fileName: 'item-box',
    displayName: 'item box',
  },
  {
    fileName: 'item-box-roulette',
    displayName: 'item box roulette',
    imgUrl: null,
    restartWhenClicked: false,
    clip: new Howl({
      src: ['audio/item-box-roulette.ogg'],
      loop: true,
      sprite:{
        one:[0,720,true]
      }
    }),
    clip2: new Howl({
      src: ['audio/item-box-roulette-finish.ogg']
    }),
    onPlay: function () {
      // item roulete sound: loop roulete sound for a random time between 2-5 seconds, then play finish sound.
      let i = this;

      //console.log('play');
      //console.log(ii);

      i.clip2.once('end', () => {
        //console.log('end');
        i.playing -= 1;
        if (i.playing == 0) {
          i.btn.setAttribute('playing', 'false');
        }
      });

      let duration = getRandomInt(1200,5000);

      i.playAudioInterval = setTimeout(() => {
        //console.log('timeout');
        i.clip.stop();
        i.clip2.play();
      }, duration);

      i.clip.play('one');
      },
    onStop: function () {
      let ii = this;

      //console.log('stop');
      //console.log(ii);

      i.playing -= 1;
      if (i.playing == 0) {
        i.btn.setAttribute('playing', 'false');
      }

      clearTimeout(i.playAudioInterval);
      i.clip.stop();
      i.clip2.stop();

      i.clip2.off(); // remove end event

    },
  },
  {
    fileName: 'warp-pipe',
    displayName: 'pipe',
  },
  {
    fileName: 'countdown',
    displayName: 'count-</br>down',
    restartWhenClicked: false,
    isMusic: true,
    icon: true,
  },
  {
    fileName: 'race-start-mk64',
    displayName: 'race start',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'clapping',
    displayName: 'clapping',
  },
  {
    fileName: 'goal',
    displayName: 'goal',
    format: 'ogg',
  },
  {
    fileName: 'music-nsmbwii-victory',
    displayName: 'victory<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smw-course-clear',
    displayName: 'level clear<br>smw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-nsmbwii-level-clear',
    displayName: 'level clear<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'hurry-up',
    displayName: 'Hurry Up',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smb-game-over',
    displayName: 'game over<br>smb',
    restartWhenClicked: false,
    isMusic: true,
    format: 'ogg',
  },
  {
    fileName: 'music-smb3-game-over',
    displayName: 'game over<br>smb3',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smw-game-over',
    displayName: 'game over<br>smw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'pow',
    displayName: 'POW',
    restartWhenClicked: false,
  },
  {
    fileName: 'thwomp',
    displayName: 'thwomp',
  },
  {
    fileName: 'blooper',
    displayName: 'blooper',
  },
  {
    fileName: 'bobomb-fuse',
    displayName: 'bobomb<br>fuse',
    restartWhenClicked: false,
  },
  {
    fileName: 'explosion',
    displayName: 'explosion',
  },
  {
    fileName: 'cannon',
    displayName: 'cannon fire',
  },
  {
    fileName: 'chain-chomp',
    displayName: 'chain chomp',
    count: 5,
  },
  {
    fileName: 'piranha-plant',
    displayName: 'piranha plant',
    format: 'ogg',
    count: 2,
  },
  {
    fileName: 'mario',
    displayName: 'mario',
    count: 12,
  },
  {
    fileName: 'luigi',
    displayName: 'luigi',
    count: 9,
  },
  {
    fileName: 'boo',
    displayName: 'boo',
    format: 'ogg',
    count: 4,
  },
  {
    fileName: 'bowser',
    displayName: 'bowser',
    count: 11,
  },
  {
    fileName: 'yoshi',
    displayName: 'yoshi',
    count: 10,
  },
  {
    fileName: 'peach',
    displayName: 'peach',
    count: 12,
  },
  {
    fileName: 'rosalina',
    displayName: 'rosalina',
    count: 18,
    format: 'ogg',
  },
  {
    fileName: 'donkey-kong',
    displayName: 'donkey kong',
    count: 4,
  },
  {
    fileName: 'diddy-kong',
    displayName: 'diddy kong',
    count: 12,
  },
  {
    fileName: 'wario',
    displayName: 'wario',
    count: 11,
  },
  {
    fileName: 'waluigi',
    displayName: 'waluigi',
    count: 11,
    format: 'ogg',
  },
  {
    fileName: 'toad',
    displayName: 'toad',
    count: 4,
  },
  {
    fileName: 'music-smb3-overworld',
    displayName: 'SMB3 Theme',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smb-overworld',
    displayName: 'SMB Theme',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smw-overworld',
    displayName: 'Theme<br>SMW',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smw-overworld1',
    displayName: 'Theme 2<br>SMW',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mkwii-theme',
    displayName: 'Theme<br>mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    imgUrl: 'img/items/music-mkwii-theme.png',
  },
  {
    fileName: 'music-mkwii-funky-stadium',
    displayName: 'funky stadium<br>mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-mkwii-moo-moo-meadows',
    displayName: 'moo moo<br>meadows mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmb-world6',
    displayName: 'the canyon<br>NSMB',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-sm64-theme',
    displayName: 'theme<br>sm64',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mk8-electrodrome',
    displayName: 'electro-<br>drome mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-mk8-sunshine-airport',
    displayName: 'sunshine<br>airport mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mk8-bone-dry-dunes',
    displayName: 'bone dry<br>dunes mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmb-walking-the-plains',
    displayName: 'Walking the plains<br>nsmb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-nsmb-in-the-underground',
    displayName: 'in the underground<br>nsmb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmbwii-troopa-battle',
    displayName: 'troopa battle<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
];
