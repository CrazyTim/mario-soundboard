import {getRandomInt} from './mario-util.js'

export default [
  {
    fileName: 'coin',
    title: 'coin',
  },
  {
    fileName: 'jump',
    title: 'jump',
  },
  {
    fileName: 'spin-jump',
    title: 'spin jump',
  },
  {
    fileName: 'kick',
    title: 'kick',
  },
  {
    fileName: 'stomp',
    imgFileName: 'music.png',
    title: 'stomp',
  },
  {
    fileName: 'mario-propeller-suit-fly',
    title: 'propeller',
  },
  {
    fileName: 'mario-fireball',
    title: 'fireball',
  },
  {
    fileName: 'iceball',
    title: 'iceball',
    format: 'ogg',
  },
  {
    fileName: 'yoshi-mount',
    title: 'yoshi<br>jump on',
  },
  {
    fileName: 'death',
    imgFileName: 'music.png',
    title: 'death',
  },
  {
    fileName: 'sprout',
    title: 'powerup<br>appears',
  },
  {
    fileName: 'powerup',
    title: 'powerup',
  },
  {
    fileName: 'powerdown',
    imgFileName: 'music.png',
    title: 'powerdown',
  },
  {
    fileName: '1up',
    title: '1up',
  },
  {
    fileName: 'super-star',
    title: 'star',
    restartWhenClicked: false,
    loop: true,
    format: 'ogg',
    isMusic: true,
  },
  {
    fileName: 'mega-mushroom',
    title: 'mega mushroom',
    restartWhenClicked: false,
    loop: true,
    format: 'ogg',
    isMusic: true,
  },
  {
    fileName: 'wing-cap',
    title: 'wing cap',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [0, 7363, false],
      loop: [7363, 25431 - 7363, true],
    },
  },
  {
    fileName: 'red-shell',
    title: 'red shell',
    restartWhenClicked: false,
  },
  {
    fileName: 'green-shell',
    title: 'green shell',
    restartWhenClicked: false,
  },
  {
    fileName: 'item-box',
    title: 'item box',
  },
  {
    fileName: 'item-box-roulette',
    imgFileName: 'item-box.png',
    title: 'item box roulette',
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
    title: 'pipe',
  },
  {
    fileName: 'countdown',
    title: 'count-</br>down',
    restartWhenClicked: false,
  },
  {
    fileName: 'race-start-mk64',
    imgFileName: 'music.png',
    title: 'race start',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'clapping',
    title: 'clapping',
  },
  {
    fileName: 'goal',
    title: 'goal',
    format: 'ogg',
  },
  {
    fileName: 'music-nsmbwii-victory',
    imgFileName: 'music.png',
    title: 'victory<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smw-course-clear',
    imgFileName: 'music.png',
    title: 'course clear<br>smw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-nsmbwii-course-clear',
    imgFileName: 'music.png',
    title: 'course clear<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-sm3dw-course-clear',
    imgFileName: 'music.png',
    title: 'course clear<br>sm3dw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-sm3dw-course-clear-short',
    imgFileName: 'music.png',
    title: 'course clear 2<br>sm3dw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'hurry-up',
    imgFileName: 'music.png',
    title: 'Hurry Up',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smb-game-over',
    imgFileName: 'game-over.png',
    title: 'game over<br>smb',
    restartWhenClicked: false,
    isMusic: true,
    format: 'ogg',
  },
  {
    fileName: 'music-smb3-game-over',
    imgFileName: 'game-over.png',
    title: 'game over<br>smb3',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'music-smw-game-over',
    imgFileName: 'game-over.png',
    title: 'game over<br>smw',
    restartWhenClicked: false,
    isMusic: true,
  },
  {
    fileName: 'pow',
    title: 'POW',
    restartWhenClicked: false,
  },
  {
    fileName: 'thwomp',
    title: 'thwomp',
  },
  {
    fileName: 'blooper',
    title: 'blooper',
  },
  {
    fileName: 'bobomb-fuse',
    title: 'bobomb<br>fuse',
    restartWhenClicked: false,
  },
  {
    fileName: 'explosion',
    title: 'explosion',
  },
  {
    fileName: 'cannon',
    title: 'cannon fire',
  },
  {
    fileName: 'mario',
    title: 'mario',
    clipCount: 12,
  },
  {
    fileName: 'luigi',
    title: 'luigi',
    clipCount: 9,
  },
  {
    fileName: 'boo',
    title: 'boo',
    format: 'ogg',
    clipCount: 4,
  },
  {
    fileName: 'bowser',
    title: 'bowser',
    clipCount: 11,
  },
  {
    fileName: 'yoshi',
    title: 'yoshi',
    clipCount: 10,
  },
  {
    fileName: 'peach',
    title: 'peach',
    clipCount: 12,
  },
  {
    fileName: 'rosalina',
    title: 'rosalina',
    clipCount: 18,
    format: 'ogg',
  },
  {
    fileName: 'donkey-kong',
    title: 'donkey kong',
    clipCount: 4,
  },
  {
    fileName: 'diddy-kong',
    title: 'diddy kong',
    clipCount: 12,
  },
  {
    fileName: 'wario',
    title: 'wario',
    clipCount: 11,
  },
  {
    fileName: 'waluigi',
    title: 'waluigi',
    clipCount: 11,
    format: 'ogg',
  },
  {
    fileName: 'toad',
    title: 'toad',
    clipCount: 4,
  },
  {
    fileName: 'chain-chomp',
    title: 'chain chomp',
    clipCount: 5,
  },
  {
    fileName: 'piranha-plant',
    title: 'piranha plant',
    format: 'ogg',
    clipCount: 2,
  },
  {
    fileName: 'music-smb3-overworld',
    imgFileName: 'music-smb3.png',
    title: 'theme<br>SMB3',
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
    title: 'grass land<br>SMB3',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [150, 14527 - 150, true]
    },
  },
  {
    fileName: 'music-smb-overworld',
    imgFileName: 'music-smb.png',
    title: 'theme<br>smb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smw-overworld',
    imgFileName: 'music-smw.png',
    title: 'theme<br>SMW',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smw-overworld-2',
    imgFileName: 'music-smw.png',
    title: 'theme 2<br>SMW',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mkwii-theme',
    imgFileName: 'music-mkwii.png',
    title: 'theme<br>mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mkwii-funky-stadium',
    imgFileName: 'music-mkwii.png',
    title: 'funky stadium<br>mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-mkwii-moo-moo-meadows',
    imgFileName: 'music-mkwii.png',
    title: 'moo moo<br>meadows mkwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-sm64-theme',
    imgFileName: 'music-sm64.png',
    title: 'theme<br>sm64',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-sm64-dire-dire-docks',
    imgFileName: 'music-sm64.png',
    title: 'Dire, Dire<br>Docks sm64',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmb-world6',
    imgFileName: 'music.png',
    title: 'the canyon<br>NSMB',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mk8-electrodrome',
    imgFileName: 'music.png',
    title: 'electro-<br>drome mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-mk8-sunshine-airport',
    imgFileName: 'music.png',
    title: 'sunshine<br>airport mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-mk8-bone-dry-dunes',
    imgFileName: 'music.png',
    title: 'bone dry<br>dunes mk8',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmb-walking-the-plains',
    imgFileName: 'music.png',
    title: 'Walking the plains<br>nsmb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
    format: 'ogg',
  },
  {
    fileName: 'music-nsmb-in-the-underground',
    imgFileName: 'music.png',
    title: 'under-<br>ground<br>nsmb',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-nsmbwii-troopa-battle',
    imgFileName: 'music.png',
    title: 'troopa battle<br>nsmbwii',
    restartWhenClicked: false,
    isMusic: true,
    loop: true,
  },
  {
    fileName: 'music-smg2-puzzle-plank-galaxy',
    imgFileName: 'music-smg2.png',
    title: 'puzzle plank<br>smg2',
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
    title: 'battle<br>malpj',
    restartWhenClicked: false,
    isMusic: true,
    sprite: {
      __default: [0, 3380, false],
      loop: [3380, 41733 - 3380, true],
    },
  },
];
