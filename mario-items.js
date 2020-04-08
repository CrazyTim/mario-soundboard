import {getRandomInt} from './mario-util.js'

const END_OF_FILE = 9999999;

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
    imgFileName: 'music.png',
    displayName: 'stomp',
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
    imgFileName: 'music.png',
    displayName: 'death',
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
    imgFileName: 'music.png',
    displayName: 'powerdown',
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
    format: 'ogg',
    isMusic: true,
  },
  {
    fileName: 'mega-mushroom',
    displayName: 'mega mushroom',
    restartWhenClicked: false,
    loop: true,
    format: 'ogg',
    isMusic: true,
  },
  {
    fileName: 'wing-cap',
    displayName: 'wing cap',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [0, 7363, false],
      loop: [7363, 25431 - 7363, true],
    },
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
    imgFileName: 'item-box.png',
    displayName: 'item box roulette',
    restartWhenClicked: false,
    clip: new Howl({
      src: ['audio/item-box-roulette.ogg'],
      loop: true,
      sprite:{
        __default:[0, 720, true]
      }
    }),
    clip2: new Howl({
      src: ['audio/item-box-roulette-finish.ogg']
    }),
    play: function () {

      let i = this;

      // play clip1 on loop for a random duration between 1.2-5 seconds, then play finish sound.
      i.playAudioInterval = setTimeout(() => {
        i.clip.stop();
        i.clip2.play();
      }, getRandomInt(1200,5000) );

      i.clip2.once('end', () => {
        i.isPlaying = false;
        i.render();
      });

      i.isPlaying = true;
      i.render();

      i.clip.play();

    },
    stop: function () {

      let i = this;

      i.isPlaying = false;
      i.render();

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
  },
  {
    fileName: 'race-start-mk64',
    imgFileName: 'music.png',
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
    imgFileName: 'music.png',
    displayName: 'victory<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smw-course-clear',
    imgFileName: 'music.png',
    displayName: 'course clear<br>smw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-nsmbwii-course-clear',
    imgFileName: 'music.png',
    displayName: 'course clear<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-sm3dw-course-clear',
    imgFileName: 'music.png',
    displayName: 'course clear<br>sm3dw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-sm3dw-course-clear-short',
    imgFileName: 'music.png',
    displayName: 'course clear 2<br>sm3dw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'hurry-up',
    imgFileName: 'music.png',
    displayName: 'Hurry Up',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smb-game-over',
    imgFileName: 'game-over.png',
    displayName: 'game over<br>smb',
    restartWhenClicked: false,
    isMusic: true,
    format: 'ogg',
  },
  {
    fileName: 'music-smb3-game-over',
    imgFileName: 'game-over.png',
    displayName: 'game over<br>smb3',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smw-game-over',
    imgFileName: 'game-over.png',
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
    fileName: 'music-smb3-overworld',
    imgFileName: 'music-smb3.png',
    displayName: 'theme<br>SMB3',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [0, 3400, false],
      loop: [3400, 29068 - 3400, true],
    },
  },
  {
    fileName: 'music-smb3-grass-land',
    imgFileName: 'music-smb3.png',
    displayName: 'grass land<br>SMB3',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [150, 14527 - 150, true]
    },
  },
  {
    fileName: 'music-smb-overworld',
    imgFileName: 'music-smb.png',
    displayName: 'theme<br>smb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smw-overworld',
    imgFileName: 'music-smw.png',
    displayName: 'theme<br>SMW',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smw-overworld-2',
    imgFileName: 'music-smw.png',
    displayName: 'theme 2<br>SMW',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mkwii-theme',
    imgFileName: 'music-mkwii.png',
    displayName: 'theme<br>mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mkwii-funky-stadium',
    imgFileName: 'music-mkwii.png',
    displayName: 'funky stadium<br>mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-mkwii-moo-moo-meadows',
    imgFileName: 'music-mkwii.png',
    displayName: 'moo moo<br>meadows mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-sm64-theme',
    imgFileName: 'music-sm64.png',
    displayName: 'theme<br>sm64',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-sm64-dire-dire-docks',
    imgFileName: 'music-sm64.png',
    displayName: 'Dire, Dire<br>Docks sm64',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmb-world6',
    imgFileName: 'music.png',
    displayName: 'the canyon<br>NSMB',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mk8-electrodrome',
    imgFileName: 'music.png',
    displayName: 'electro-<br>drome mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-mk8-sunshine-airport',
    imgFileName: 'music.png',
    displayName: 'sunshine<br>airport mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mk8-bone-dry-dunes',
    imgFileName: 'music.png',
    displayName: 'bone dry<br>dunes mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmb-walking-the-plains',
    imgFileName: 'music.png',
    displayName: 'Walking the plains<br>nsmb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-nsmb-in-the-underground',
    imgFileName: 'music.png',
    displayName: 'under-<br>ground<br>nsmb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmbwii-troopa-battle',
    imgFileName: 'music.png',
    displayName: 'troopa battle<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smg2-puzzle-plank-galaxy',
    imgFileName: 'music-smg2.png',
    displayName: 'puzzle plank<br>smg2',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [0, 11500, false],
     loop: [11500, 70541 - 11500, true],
    },
  },
  {
    fileName: 'music-malpj-battle',
    imgFileName: 'music-malpj.png',
    displayName: 'battle<br>malpj',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [0, 3380, false],
      loop: [3380, 41733 - 3380, true],
    },
  },
];
