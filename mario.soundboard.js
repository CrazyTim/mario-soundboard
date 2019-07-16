class MarioSoundboard {

	constructor(settings) {

		var m = this;

		m.container = document.getElementById("mario-wrapper");
		m.container.classList.add('hidden');

		m.loading_wrapper = document.getElementById("loading-wrapper");
		m.loading_icon = document.getElementById("loading-icon");
		m.loading_icon.onload = function() {  m._ini(); }
		m.wrapper = document.getElementById("item-grid");
		
	}

	_ini() {
		var m = this;

		m.musicClip = null; 	// only allow playing one music at a time
		m.imgLoadedCount = 0;	// keep track of the images we are loading
		m.imgCount = 0;

		m.items = [
			{
			  fileName: 'coin',         
			  displayName: "coin"
			},
			{
			  fileName: 'jump',         
			  displayName: "jump"
			},
			{
			  fileName: 'spin_jump',      
			  displayName: "spin jump"
			},
			{
			  fileName: 'kick',         
			  displayName: "kick",
			  imgUrl: null
			},
			{
			  fileName: 'stomp',        
			  displayName: "stomp",
			  imgUrl: null
			},
			{
			  fileName: 'death',        
			  displayName: "death",
			  imgUrl: null
			},
			{
			  fileName: 'sprout',       
			  displayName: "powerup<br>appears"
			},
			{
			  fileName: 'powerup',      
			  displayName: "powerup"
			},
			{
			  fileName: 'powerdown',      
			  displayName: "powerdown",
			  imgUrl: null
			},
			{
			  fileName: 'super_star',     
			  displayName: "star",  
			  wait: true,
			  loop: true,
			  icon: true,
			  format: 'ogg'
			},
			{
			  fileName: '1up',    
			  displayName: "1up"
			},
			{
			  fileName: 'mega_mushroom',    
			  displayName: "mega mushroom", 
			  wait: true,
			  music: true,
			  loop: true,
			  icon: true,
			  format: 'ogg'
			},
			{
			  fileName: 'red_shell',
			  displayName: "red shell",
			  wait: true
			},
			{
			  fileName: 'green_shell',
			  displayName: "green shell",
			  wait: true
			},
			{
			  fileName: 'warp_pipe',
			  displayName: "pipe"
			},
			{
			  fileName: 'pow',
			  displayName: "POW",
			  wait: true
			},
			{
			  fileName: 'thwomp',
			  displayName: "thwomp"
			},
			{
			  fileName: 'blooper',
			  displayName: "blooper"
			},
			{
			  fileName: 'countdown',      
			  displayName: "count down",  
			  wait: true,
			  music: true,
			  icon: true
			},
			{
			  fileName: 'goal',      
			  displayName: "goal",
			  format: 'ogg'
			},
			{
			  fileName: 'item_box',   
			  displayName: "item box"
			},
			{
				fileName: 'item_box_roulette',    
				displayName: "item box roulette",
				imgUrl: null,
				wait: true,
			  	clip: new Howl({
					src: ['item_audio/item_box_roulette.ogg'],
					loop: true,
					sprite:{
						one:[0,720,true]
					}
				}),
				clip2: new Howl({
					src: ['item_audio/item_box_roulette_finish.ogg']
				}),
				playFunction: function () {
					// item roulete sound: loop roulete sound for a random time between 2-5 seconds, then play finish sound.
					var ii = this;
					var sf = ii.stopFunction;

					console.log("play");
					//console.log(ii);

					ii.clip2.once('end', function(){
						console.log("end");
						ii.playing -= 1;
						if (ii.playing == 0) {
							ii.btn.setAttribute('playing', 'false');
						}
					});

					var duration = m._getRandomInt(1200,5000);

					ii.playAudioInterval = setTimeout(function () {
						console.log("timeout");
					  ii.clip.stop();
					  ii.clip2.play();
					}, duration);

					ii.clip.play('one');
			  	},
				stopFunction: function (item) {
					var ii = item;

					console.log("stop");
					console.log(ii);

					ii.playing -= 1;
					if (ii.playing == 0) {
					  ii.btn.setAttribute('playing', 'false');
					}

					clearTimeout(ii.playAudioInterval);
					ii.clip.stop();
					ii.clip2.stop();

					ii.clip2.off(); // remove end event

				}
			},
			{
			  fileName: 'bobomb_fuse',    
			  displayName: "bobomb<br>fuse",  
			  wait: true 
			},
			{
			  fileName: 'cannon',       
			  displayName: "cannon fire"
			},
			{
			  fileName: 'mario_propeller_suit_fly', 
			  displayName: "propeller"
			},
			{
			  fileName: 'mario_fireball',   
			  displayName: "fireball"
			},
			{
			  fileName: 'iceball',   
			  displayName: "iceball",
			  format: 'ogg',
			},
			{
			  fileName: 'clapping',       
			  displayName: "clapping",
			  imgUrl: null
			},
			{
			  fileName: 'yoshi_mount',        
			  displayName: "yoshi<br>jump on"
			},
			{
			  fileName: 'explosion',      
			  displayName: "explosion",
			  imgUrl: null
			},
			{
			  fileName: 'chain_chomp',    
			  displayName: "chain chomp",  
			  count: 5
			},
			{
			  fileName: 'piranha_plant',    
			  displayName: "piranha plant",
			  format: 'ogg',   
			  count: 2
			},
			{
			  fileName: 'mario',        
			  displayName: "mario",  
			  count: 12
			},
			{
			  fileName: 'luigi',        
			  displayName: "luigi", 
			  count: 9
			},
			{
			  fileName: 'boo',        
			  displayName: "boo", 
			  format: 'ogg',
			  count: 4
			},
			{
			  fileName: 'bowser',       
			  displayName: "bowser",  
			  count: 11
			},
			{
			  fileName: 'yoshi',        
			  displayName: "yoshi", 
			  count: 10
			},
			{
			  fileName: 'peach',        
			  displayName: "peach",  
			  count: 12
			},
			{
			  fileName: 'rosalina',        
			  displayName: "rosalina",  
			  count: 18,
			  format: 'ogg'
			},
			{
			  fileName: 'donkey_kong',    
			  displayName: "donkey kong",   
			  count: 4
			},
			{
			  fileName: 'diddy_kong',     
			  displayName: "diddy kong",  
			  count: 12
			},
			{
			  fileName: 'wario',        
			  displayName: "wario", 
			  count: 11
			},
			{
			  fileName: 'waluigi',        
			  displayName: "waluigi", 
			  count: 11,
			  format: 'ogg'
			},
			{
			  fileName: 'toad',         
			  displayName: "toad",   
			  count: 4
			},
			{
			  fileName: 'music_smb3_overworld',         
			  displayName: "SMB3 Theme",  
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_smb_overworld',        
			  displayName: "SMB Theme", 
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_smw_overworld',        
			  displayName: "Theme<br>SMW",  
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_smw_course_clear',         
			  displayName: "level clear<br>smw",  
			  wait: true,
			  music: true
			},
			{
			  fileName: 'music_nsmbwii_level_clear',        
			  displayName: "level clear<br>nsmbwii",  
			  wait: true,
			  music: true
			},
			{
			  fileName: 'music_smw_overworld1',         
			  displayName: "Theme 2<br>SMW",  
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_mkwii_theme',
			  displayName: "Theme<br>mkwii",
			  wait: true,
			  music: true,
			  loop: true,
			  imgUrl: 'item_img/music_mkwii_theme.png'
			},
			{
			  fileName: 'music_nsmb_world6',        
			  displayName: "the canyon<br>NSMB",  
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_sm64_theme',         
			  displayName: "theme<br>sm64", 
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_smb3_game_over',           
			  displayName: "game over<br>smb3", 
			  wait: true,
			  music: true
			},
			{
			  fileName: 'music_smw_game_over',          
			  displayName: "game over<br>smw",  
			  wait: true,
			  music: true
			},
			{
			  fileName: 'hurry_up',         
			  displayName: "Hurry Up",  
			  wait: true,
			  music: true
			},
			{
			  fileName: 'music_mk8_electrodrome',         
			  displayName: "electrodrome<br>mk8", 
			  wait: true,
			  music: true,
			  loop: true,
			  format: 'ogg'
			},
			{
			  fileName: 'music_nsmb_walking_the_plains',        
			  displayName: "Walking the plains<br>nsmb",  
			  wait: true,
			  music: true,
			  loop: true,
			  format: 'ogg'
			},
			{
			  fileName: 'music_nsmb_in_the_underground',        
			  displayName: "in the underground<br>nsmb",  
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_nsmbwii_victory',        
			  displayName: "victory<br>nsmbwii",  
			  wait: true,
			  music: true
			},
			{
			  fileName: 'music_nsmbwii_troopa_battle',        
			  displayName: "troopa battle<br>nsmbwii",  
			  wait: true,
			  music: true,
			  loop: true
			},
			{
			  fileName: 'music_mkwii_funky_stadium',        
			  displayName: "funky stadium<br>mkwii",  
			  wait: true,
			  music: true,
			  loop: true,
			  format: 'ogg'
			}

		];


		var s1 = new Howl({
			src: ['item_audio/super_star.ogg'],
			loop: true
		})

		// initalise each item
		Object.values(this.items).forEach( function(value, key) {
			
			// set default values if undefined
			if (typeof value.wait == 'undefined') { value.wait = false; }
			if (typeof value.music == 'undefined') { value.music = false; }
			if (typeof value.count == 'undefined') { value.count = 0; }
			if (typeof value.loop == 'undefined') { value.loop = false; }
			if (typeof value.displayName == 'undefined') { value.displayName = null; }
			if (typeof value.icon == 'undefined') { value.icon = false; }
			if (typeof value.playFunction == 'undefined') { value.playFunction = null; }
			if (typeof value.format == 'undefined') { value.format = 'mp3'; }
			if (typeof value.imgUrl == 'undefined') { 
				if (value.music == true && value.icon == false) {
					value.imgUrl = 'img/music_green.png';// generic music icon
				} else {
					value.imgUrl = 'item_img/' + value.fileName + '.png';
				}
			}

			value.displayName = value.displayName.toUpperCase();
			value.playing = 0;

			console.log(key + ': ' + value.fileName + '.' + value.format);


			// set clip
			if (value.count == 0 && value.playFunction == null) {
				value.clip = new Howl({
					src: ['item_audio/' + value.fileName + '.' + value.format],
					loop: value.loop
				})

				// event for when we click on the icon to stop it playing
				value.clip.on('stop', function(){
					console.log(key + ': stop');
					value.playing -= 1;
					if (value.playing == 0) {
						value.btn.setAttribute('playing', 'false');
					}
				});

				// event for when it stops playing because it reached the end of the clip
				if (!value.loop) {
					value.clip.on('end', function(){
						console.log(key + ': end');
						value.playing -= 1;
						if (value.playing == 0) {
							value.btn.setAttribute('playing', 'false');
						}
					});
				}

			} else if (value.count >= 0 && value.playFunction == null) {
				
				value.next = m._fillArrayWithNumbers(value.count);
				value.clips = m._fillArrayWithNumbers(value.count);
				
				value.next.forEach( function(set_value, set_key) {
					value.clips[set_key] = new Howl({
						src: ['item_audio/' + value.fileName + '/' + set_value + '.' + value.format],
						loop: value.loop
					})

					value.clips[set_key].on('stop', function(){
						console.log(key + ': stop');
						value.playing -= 1;
						if (value.playing == 0) {
							value.btn.setAttribute('playing', 'false');
						}
					});

					value.clips[set_key].on('end', function(){
						console.log(key + ': end');
						value.playing -= 1;
						if (value.playing == 0) {
							value.btn.setAttribute('playing', 'false');
						}
					});




				});
			}


			// create DOM object
			var btn = document.createElement("div");
			value.btn = btn;
			btn.setAttribute('class', 'btn');
			btn.onclick = function() { m._play(key) };
			m.wrapper.appendChild(btn);


			// set the img
			if (value.imgUrl != null) {

				btn.setAttribute('style', 'background-image: url(' + value.imgUrl + ')');

				// load the img
				var img = new Image();
				m.imgCount++;
				img.onload = function() { m._imgLoaded(); }
				img.src = value.imgUrl;

			}
			

			// show title
			if (value.displayName != null) {
				var title = document.createElement("div");
				title.setAttribute('class', 'title');
				title.innerHTML = value.displayName;
				btn.appendChild(title);
			}


			// show set icon
			if (value.count >= 1) {
				var set_icon = document.createElement("div");
				set_icon.setAttribute('class', 'icon_set');
				btn.appendChild(set_icon);
			}

		});
		
	}

	_imgLoaded() {
		var m = this;

		m.imgLoadedCount++;

		// hide the loading icon once all images have loaded
		if (m.imgLoadedCount === m.imgCount) {
			m.loading_wrapper.classList.add('hidden');
			m.container.classList.remove('hidden');
			//console.log("loaded");
		}
	}

	_play(itemIndex) {

		var m = this;
		var ii = m.items[itemIndex];
		var e = ii.btn;

		if (ii.music == true && m.musicClip != null) {
		  m.musicClip.pause(); // stop playing prev music
		  m.musicClip.currentTime = 0;
		}

		// stop the sound if it is currently playing
		if (ii.playing >= 1) {
		  if (ii.wait == true) {

		    if (ii.stopFunction != null) {
		      ii.stopFunction(ii);
		      return;
		    } else {
		      // stop, reset, and end
		      ii.clip.stop();
		      return;
		    }
		    
		  } else {
		    // stop, reset, and play
		    ii.clip.stop();
		  }
		}

		// select new random track
		if (ii.count >= 1) {
			var ranIndex = m._spin(itemIndex);
			ii.clip = ii.clips[ranIndex];
		}
		

		/*if (ii.loop == true) {
		  ii.clip.loop = true;
		}*/

		e.setAttribute('playing', 'true');
		ii.playing += 1;

		if (ii.playFunction != null) {
		  ii.playFunction(ii);
		} else {
		  ii.clip.play();
		}

		if (ii.music == true) {
		  m.musicClip = ii.clip; // indicate that music is playing
		}

  }

  _spin(itemIndex) {

  	var m = this;
    var ii = m.items[itemIndex];
    
    // if we have played all the sounds in the set, reset the set
    if (ii.next.length == 0) {
      ii.next = m._fillArrayWithNumbers(ii.count);
    }

    // selecet a random item
    var rand;
    var ri
    do {
        rand = m._getRandomInt(0, ii.next.length - 1);
        ri = ii.next[rand];
    } while (ri == ii.last);

    ii.next.splice(rand,1); // remove the item so it can't be played until we reset the set..

    ii.last = ri; // remember which one we played last so we don't play it twice in a row after reseting the set

    return ri;
  }

	_fillArrayWithNumbers(n) {
		var arr = Array.apply(null, Array(n));
		return arr.map(function (x, i) { return i });
	}

	_fadeAudio (clip, durationSeconds) {
		var audio = clip;
		var interval = (duration * 1000) / 20;
		var newVolume = audio.volume;
		var fadeAudioInterval = setInterval(function () {
			newVolume = (parseFloat(newVolume) - 0.05).toFixed(2);
			if(newVolume >= 0){
				audio.volume = newVolume;
			} else {
				audio.pause();
				clearInterval(fadeAudioInterval);
			}
		}, interval);
	}

	_getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}