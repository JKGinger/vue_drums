const sound1 = 'sounds/snare.mp3';
const sound2 = 'sounds/tom-3.mp3';
const sound3 = 'sounds/tom-1.mp3';
const sound4 = 'sounds/kick-bass.mp3';
const sound5 = 'sounds/tom-2.mp3';
const sound6 = 'sounds/tom-4.mp3';
const sound7 = 'sounds/crash.mp3';

new Vue ({
    el: '#Drum_app',
    data: {
        name: 'John'
    },
    created() {
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener('keydown', this.onKeyDown);
      },
      destroyed() {
        document.removeEventListener('keydown', this.onKeyDown);
      },
    methods: {
        playSound (sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        },
        onKeyDown(e) {
            switch (e.keyCode) {
                case 65: this.playSound(sound1); break; // 'a' key
                case 83: this.playSound(sound2); break; // 'b' key
                case 68: this.playSound(sound3); break; // 'b' key
                case 70: this.playSound(sound4); break; // 'b' key
                case 71: this.playSound(sound5); break; // 'b' key
                case 72: this.playSound(sound6); break; // 'b' key
                case 74: this.playSound(sound7); break; // 'b' key
            }
        },
    }

})

// to do
// keydown event
// bedre css
// 
// 
// 